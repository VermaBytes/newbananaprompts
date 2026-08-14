import fs from "fs";
import path from "path";
import { sendBlogNotification } from "../lib/onesignal";

const SITE_URL = "https://newbananaprompts.in";
const POSTS_PATH = path.join(process.cwd(), "data/posts.json");
const SENT_PATH = path.join(process.cwd(), "data/sent-notifications.json");

// Ensure sent-notifications.json exists
if (!fs.existsSync(SENT_PATH)) {
  fs.writeFileSync(SENT_PATH, JSON.stringify([], null, 2));
}

// Manually load .env variables for the prebuild script
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of envLines) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }
}

async function run() {
  console.log("OneSignal: Checking for new blog posts to notify...");

  // A local `npm run build` should never make external API calls or send a real
  // push notification. Vercel sets VERCEL=1 during deployments; other CI
  // providers can opt in explicitly with SEND_ONESIGNAL_NOTIFICATIONS=true.
  const notificationsEnabled =
    process.env.VERCEL === "1" ||
    process.env.SEND_ONESIGNAL_NOTIFICATIONS === "true";

  if (!notificationsEnabled) {
    console.log(
      "OneSignal: Skipping notifications outside deployment (set SEND_ONESIGNAL_NOTIFICATIONS=true to opt in)."
    );
    return;
  }

  const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
  const apiKey = process.env.ONESIGNAL_REST_API_KEY;

  if (!appId) {
    console.log("OneSignal: NEXT_PUBLIC_ONESIGNAL_APP_ID is missing. Skipping notification check.");
    return;
  }

  if (!apiKey) {
    console.log("OneSignal: ONESIGNAL_REST_API_KEY is missing. Skipping notification check.");
    return;
  }

  // Load posts
  let posts: any[] = [];
  try {
    posts = JSON.parse(fs.readFileSync(POSTS_PATH, "utf8"));
  } catch (error) {
    console.error("OneSignal: Failed to load posts.json", error);
    return;
  }

  // Load local sent log
  let sentLog: any[] = [];
  try {
    sentLog = JSON.parse(fs.readFileSync(SENT_PATH, "utf8"));
  } catch (error) {
    console.error("OneSignal: Failed to load sent-notifications.json", error);
  }

  // Fetch OneSignal sent notification history as secondary check to prevent duplicates
  const oneSignalSentUrls = new Set<string>();
  try {
    const response = await fetch(`https://onesignal.com/api/v1/notifications?app_id=${appId}&limit=50`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const data = await response.json();
      if (data.notifications && Array.isArray(data.notifications)) {
        data.notifications.forEach((notif: any) => {
          if (notif.url) {
            oneSignalSentUrls.add(notif.url);
          }
        });
      }
    } else {
      console.warn("OneSignal: Failed to retrieve notification history from API. Relying on local log.");
    }
  } catch (error) {
    console.error("OneSignal: Error fetching notification history from API", error);
  }

  const now = new Date();
  const updatedSentLog = [...sentLog];
  let newNotificationsSent = false;

  // Notify only the single newest published post. This prevents a deployment from
  // sending a backlog of notifications for older posts that are absent from the log.
  const latestPost = posts
    .filter((post: any) => new Date(post.publishedAt) <= now)
    .sort(
      (left: any, right: any) =>
        new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
    )[0];

  if (!latestPost) {
    console.log("OneSignal: No published posts found. Skipping notification check.");
    return;
  }

  for (const post of [latestPost]) {

    const postUrl = `${SITE_URL}/post/${post.slug}`;
    
    // Check if already sent in local log
    const alreadySentLocally = sentLog.some((entry: any) => entry.slug === post.slug);
    // Check if already sent in OneSignal history
    const alreadySentRemote = oneSignalSentUrls.has(postUrl);
    const alreadySent = alreadySentLocally || alreadySentRemote;

    console.log(`* Found post: ${post.slug}`);
    console.log(`* Notification already sent: ${alreadySent}`);

    if (alreadySent) {
      // If it is in remote history but not local log, sync local log
      if (alreadySentRemote && !alreadySentLocally) {
        console.log(`* Syncing local log for ${post.slug} (already sent on remote)`);
        updatedSentLog.push({
          slug: post.slug,
          notificationId: "remote-synced",
          sentAt: new Date().toISOString(),
          title: post.title
        });
        newNotificationsSent = true;
      }
      continue;
    }

    // Generate Title & Message
    const title = `🎉 New Blog: ${post.title}`;
    const message = post.description || "Read our latest article now!";
    const imageUrl = post.image ? (post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`) : undefined;
    
    console.log(`* Sending notification...`);

    // Use the existing sendBlogNotification utility
    const result = await sendBlogNotification({
      title,
      message,
      url: postUrl,
      imageUrl
    });

    console.log(`* OneSignal response: ${JSON.stringify(result)}`);

    const hasErrors = result.data?.errors && result.data.errors.length > 0;
    const isSuccessful = !!(result.success && result.data && result.data.id && !hasErrors);

    if (isSuccessful) {
      console.log(`* OneSignal response ID: ${result.data.id}`);
      console.log(`* Notification success/failure: success`);

      updatedSentLog.push({
        slug: post.slug,
        notificationId: result.data.id,
        sentAt: new Date().toISOString(),
        title: post.title,
        message: message
      });
      newNotificationsSent = true;
    } else {
      console.log(`* Notification success/failure: failure`);
      const errorMsg = result.error || (hasErrors ? result.data.errors.join(", ") : "Empty notification ID returned (no subscribed users or invalid request)");
      console.error(`OneSignal: Failed to send notification for "${post.title}":`, errorMsg);
    }
  }

  // Save updated local log if changes made
  if (newNotificationsSent) {
    try {
      fs.writeFileSync(SENT_PATH, JSON.stringify(updatedSentLog, null, 2));
      console.log("OneSignal: Local sent-notifications log updated.");
    } catch (error) {
      console.error("OneSignal: Failed to write sent-notifications.json", error);
    }
  } else {
    console.log("OneSignal: No new posts found. Notification status is up to date.");
  }
}

run();
