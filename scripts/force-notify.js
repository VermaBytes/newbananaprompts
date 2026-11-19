const fs = require("fs");
const path = require("path");

// Load .env manually
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of envLines) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

const SITE_URL = "https://newbananaprompts.in";
const SENT_PATH = path.join(process.cwd(), "data/sent-notifications.json");

const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
const apiKey = process.env.ONESIGNAL_REST_API_KEY;

// Posts to force-notify (slugs not yet in sent-notifications.json)
const POSTS_JSON = path.join(process.cwd(), "data/posts.json");
const posts = JSON.parse(fs.readFileSync(POSTS_JSON, "utf8"));
const sentLog = JSON.parse(fs.readFileSync(SENT_PATH, "utf8"));
const sentSlugs = new Set(sentLog.map((s) => s.slug));

const pendingPosts = posts.filter((p) => !sentSlugs.has(p.slug));
console.log(`Found ${pendingPosts.length} unsent post(s):`, pendingPosts.map((p) => p.slug));

async function sendNotification(post) {
  const title = `🎉 New Blog: ${post.title}`;
  const message = post.description || "Read our latest article now!";
  const url = `${SITE_URL}/post/${post.slug}`;
  const imageUrl = post.image ? (post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`) : undefined;

  console.log(`\nSending: "${title}"`);
  console.log(`URL: ${url}`);

  const response = await fetch("https://onesignal.com/api/v1/notifications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Basic ${apiKey}`,
    },
    body: JSON.stringify({
      app_id: appId,
      included_segments: ["Subscribed Users", "Active Subscriptions"],
      headings: { en: title },
      contents: { en: message },
      url: url,
      chrome_web_image: imageUrl,
      big_picture: imageUrl,
    }),
  });

  const data = await response.json();
  console.log("OneSignal response:", JSON.stringify(data));

  if (data.id && !data.errors?.length) {
    sentLog.push({
      slug: post.slug,
      notificationId: data.id,
      sentAt: new Date().toISOString(),
      title: post.title,
      message: message,
    });
    console.log(`✅ Notification sent! ID: ${data.id}`);
    return true;
  } else {
    console.error(`❌ Failed:`, data.errors || data);
    return false;
  }
}

(async () => {
  if (!appId || !apiKey) {
    console.error("Missing OneSignal credentials!");
    process.exit(1);
  }

  for (const post of pendingPosts) {
    await sendNotification(post);
    // Small delay between notifications
    await new Promise((r) => setTimeout(r, 2000));
  }

  // Save updated sent log
  fs.writeFileSync(SENT_PATH, JSON.stringify(sentLog, null, 2));
  console.log("\n✅ sent-notifications.json updated!");
})();
