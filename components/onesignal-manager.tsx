"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_URL } from "@/lib/site";

// Declare global types for OneSignal Web SDK
declare global {
  interface Window {
    OneSignalDeferred?: any[];
    OneSignal?: any;
  }
}

export function OneSignalManager() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // "loading" | "subscribed" | "unsubscribed" | "blocked"
  const [subscriptionState, setSubscriptionState] = useState<"loading" | "subscribed" | "unsubscribed" | "blocked">("loading");
  const [showTooltip, setShowTooltip] = useState(false);
  const [bellRinging, setBellRinging] = useState(false);

  const isProd = process.env.NODE_ENV === "production";
  const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;

  // 1. Initial mounting and script initialization
  useEffect(() => {
    setMounted(true);

    if (!isProd) {
      console.log("OneSignal: Skip initialization in local development (dev mode).");
      setSubscriptionState("unsubscribed");
      return;
    }

    if (!appId) {
      console.error("OneSignal App ID is missing! Set NEXT_PUBLIC_ONESIGNAL_APP_ID in environment.");
      setSubscriptionState("unsubscribed");
      return;
    }

    // Prepare OneSignal Deferred Queue
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function (OneSignal: any) {
      await OneSignal.init({
        appId: appId,
        welcomeNotification: {
          disable: false,
          title: "🎉 Welcome to NB Prompts",
          message: "Get the latest AI Tools, Student Guides and Exam Preparation Updates.",
          url: SITE_URL,
        },
      });

      // Update state once OneSignal is ready
      updateSubscriptionState(OneSignal);

      // Listen to slidedown closing to detect user dismissal
      OneSignal.Slidedown.addEventListener("slidedownClosed", () => {
        setTimeout(() => {
          if (!OneSignal.User.pushSubscription.optedIn) {
            localStorage.setItem("onesignal_prompt_dismissed", "true");
            console.log("OneSignal: User dismissed the slidedown prompt.");
          }
        }, 500);
      });

      // Listen to subscription state changes
      OneSignal.User.pushSubscription.addEventListener("change", () => {
        updateSubscriptionState(OneSignal);
      });

      // Check if there was a pending prompt triggered by routing/timer
      const pendingPrompt = sessionStorage.getItem("onesignal_pending_prompt") === "true";
      if (pendingPrompt) {
        triggerPrompt(OneSignal);
        sessionStorage.removeItem("onesignal_pending_prompt");
      }
    });

    // Subtle micro-animation: Ring the bell periodically to attract attention if unsubscribed
    const ringInterval = setInterval(() => {
      if (subscriptionState === "unsubscribed") {
        setBellRinging(true);
        setTimeout(() => setBellRinging(false), 1200);
      }
    }, 15000);

    return () => clearInterval(ringInterval);
  }, [appId, isProd, subscriptionState]);

  // 2. Route path views counter
  useEffect(() => {
    // Record page views in sessionStorage
    const views = Number(sessionStorage.getItem("onesignal_page_views") || "0");
    const newViews = views + 1;
    sessionStorage.setItem("onesignal_page_views", String(newViews));

    if (newViews >= 2) {
      if (typeof window !== "undefined" && window.OneSignal) {
        triggerPrompt(window.OneSignal);
      } else {
        sessionStorage.setItem("onesignal_pending_prompt", "true");
      }
    }
  }, [pathname]);

  // 3. 10-seconds timer auto-prompt
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.OneSignal) {
        triggerPrompt(window.OneSignal);
      } else {
        sessionStorage.setItem("onesignal_pending_prompt", "true");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Sync state helper
  const updateSubscriptionState = (OneSignalInstance: any) => {
    const isPermissionGranted = OneSignalInstance.Notifications.permission;
    const isOptedIn = OneSignalInstance.User.pushSubscription.optedIn;
    const nativePermission = typeof window !== "undefined" && window.Notification ? window.Notification.permission : "default";

    let state: "subscribed" | "unsubscribed" | "blocked" = "unsubscribed";
    if (nativePermission === "denied") {
      state = "blocked";
    } else if (isPermissionGranted && isOptedIn) {
      state = "subscribed";
    } else {
      state = "unsubscribed";
    }

    setSubscriptionState(state);
    if (typeof window !== "undefined") {
      (window as any).onesignalSubscriptionState = state;
      window.dispatchEvent(new CustomEvent("onesignal-state-change", { detail: state }));
    }
  };

  // Dispatch initial subscriptionState changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).onesignalSubscriptionState = subscriptionState;
      window.dispatchEvent(new CustomEvent("onesignal-state-change", { detail: subscriptionState }));
    }
  }, [subscriptionState]);

  // Listen to custom onesignal-bell-click events dispatched by NavbarBell
  useEffect(() => {
    const handleBellClickEvent = () => {
      handleBellClick();
    };
    window.addEventListener("onesignal-bell-click", handleBellClickEvent);
    return () => {
      window.removeEventListener("onesignal-bell-click", handleBellClickEvent);
    };
  }, [subscriptionState]);

  // Helper to trigger slidedown prompt
  const triggerPrompt = (OneSignalInstance: any) => {
    if (!isProd) return;
    const isDismissed = localStorage.getItem("onesignal_prompt_dismissed") === "true";
    const nativePermission = typeof window !== "undefined" && window.Notification ? window.Notification.permission : "default";

    if (!isDismissed && nativePermission === "default") {
      OneSignalInstance.Slidedown.promptPush();
      console.log("OneSignal: Slidedown permission prompt triggered.");
    }
  };

  // Click handler
  const handleBellClick = async () => {
    if (!isProd) {
      alert("OneSignal is in production-only mode. Notification bell mock clicked!");
      const nextState = subscriptionState === "subscribed" ? "unsubscribed" : "subscribed";
      setSubscriptionState(nextState);
      return;
    }

    if (typeof window === "undefined" || !window.OneSignal) return;

    const OneSignal = window.OneSignal;
    const nativePermission = window.Notification ? window.Notification.permission : "default";

    if (nativePermission === "denied") {
      alert("Notifications are blocked in your browser settings. Please reset notifications permission in your address bar to subscribe.");
      return;
    }

    if (subscriptionState === "subscribed") {
      // Unsubscribe
      await OneSignal.User.pushSubscription.optOut();
      setSubscriptionState("unsubscribed");
      console.log("OneSignal: User opted out of push notifications.");
    } else {
      // Subscribe / Prompt
      if (nativePermission === "default") {
        await OneSignal.Slidedown.promptPush();
      } else {
        await OneSignal.User.pushSubscription.optIn();
        setSubscriptionState("subscribed");
        console.log("OneSignal: User opted back in.");
      }
    }
  };

  return null;
}

