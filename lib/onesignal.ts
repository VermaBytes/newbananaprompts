/**
 * Reusable utility function for sending push notifications via OneSignal REST API.
 * This runs on the server-side (e.g., in API routes or Server Actions).
 * 
 * Required Environment Variables:
 * - NEXT_PUBLIC_ONESIGNAL_APP_ID: The OneSignal App ID
 * - ONESIGNAL_REST_API_KEY: The OneSignal REST API Key (Keep this secret!)
 */
export async function sendBlogNotification({
  title,
  message,
  url,
  imageUrl
}: {
  title: string;
  message: string;
  url: string;
  imageUrl?: string;
}) {
  const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
  const apiKey = process.env.ONESIGNAL_REST_API_KEY;

  if (!appId) {
    console.error("OneSignal app ID (NEXT_PUBLIC_ONESIGNAL_APP_ID) is not configured.");
    return { success: false, error: "OneSignal App ID is missing" };
  }

  if (!apiKey) {
    console.error("OneSignal REST API key (ONESIGNAL_REST_API_KEY) is not configured.");
    return { success: false, error: "OneSignal REST API Key is missing" };
  }

  try {
    const response = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Basic ${apiKey}`
      },
      body: JSON.stringify({
        app_id: appId,
        included_segments: ["Subscribed Users"],
        headings: { en: title },
        contents: { en: message },
        url: url,
        chrome_web_image: imageUrl,
        big_picture: imageUrl
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors?.[0] || "Failed to send notification");
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Error sending OneSignal notification:", error);
    return { success: false, error: error.message || "Unknown error occurred" };
  }
}
