"use client";
/* eslint-disable react-hooks/exhaustive-deps -- SDK callbacks intentionally use the current OneSignal instance. */

import { useEffect, useState } from "react";
import { SITE_URL } from "@/lib/site";

// Declare global types for OneSignal Web SDK
declare global {
  interface Window {
    OneSignalDeferred?: any[];
    OneSignal?: any;
    onesignalSubscriptionState?: string;
    onesignal_pending_click?: boolean;
  }
}

export function OneSignalManager() {
  const [mounted, setMounted] = useState(false);
  
  // "loading" | "subscribed" | "unsubscribed" | "blocked"
  // Default to unsubscribed to avoid visible "loading" delay to the user.
  const [subscriptionState, setSubscriptionState] = useState<"loading" | "subscribed" | "unsubscribed" | "blocked">("unsubscribed");
  const [bellRinging, setBellRinging] = useState(false);

  const isProd = process.env.NODE_ENV === "production";
  const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;

  // Sync initial state on mount to avoid loading delay
  useEffect(() => {
    if (typeof window !== "undefined") {
      const nativePermission = window.Notification ? window.Notification.permission : "default";
      if (nativePermission === "denied") {
        setSubscriptionState("blocked");
      } else if (nativePermission === "granted") {
        const optedOut = localStorage.getItem("onesignal_opted_out") === "true";
        setSubscriptionState(optedOut ? "unsubscribed" : "subscribed");
      } else {
        setSubscriptionState("unsubscribed");
      }
    }
  }, []);

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
            sessionStorage.setItem("onesignal_prompt_dismissed", "true");
            console.log("OneSignal: User dismissed the slidedown prompt.");
          }
        }, 500);
      });

      // Listen to subscription state changes
      OneSignal.User.pushSubscription.addEventListener("change", () => {
        updateSubscriptionState(OneSignal);
      });

      // Check if there was a pending click queued while SDK was loading
      if (window.onesignal_pending_click) {
        delete window.onesignal_pending_click;
        console.log("OneSignal: Executing pending bell click after SDK loaded.");
        setTimeout(() => {
          handleBellClick();
        }, 200);
      }

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
      window.onesignalSubscriptionState = state;
      window.dispatchEvent(new CustomEvent("onesignal-state-change", { detail: state }));
    }
  };

  // Dispatch subscriptionState changes globally
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onesignalSubscriptionState = subscriptionState;
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
  }); // Re-bind on every render to prevent stale closure of handleBellClick

  // Helper to trigger slidedown prompt
  const triggerPrompt = (OneSignalInstance: any) => {
    if (!isProd) return;
    const isDismissed = sessionStorage.getItem("onesignal_prompt_dismissed") === "true";
    const nativePermission = typeof window !== "undefined" && window.Notification ? window.Notification.permission : "default";

    // Only prompt if not already dismissed in this session AND browser permission is default
    if (!isDismissed && nativePermission === "default") {
      OneSignalInstance.Slidedown.promptPush();
      console.log("OneSignal: Slidedown permission prompt triggered.");
    }
  };

  // Click handler - closure safe
  const handleBellClick = async () => {
    if (!isProd) {
      alert("OneSignal is in production-only mode. Notification bell mock clicked!");
      const nextState = subscriptionState === "subscribed" ? "unsubscribed" : "subscribed";
      setSubscriptionState(nextState);
      return;
    }

    if (typeof window === "undefined") return;

    if (!window.OneSignal) {
      console.log("OneSignal: SDK not loaded yet. Queueing click...");
      window.onesignal_pending_click = true;
      setSubscriptionState("loading");
      window.dispatchEvent(new CustomEvent("onesignal-state-change", { detail: "loading" }));
      return;
    }

    const OneSignal = window.OneSignal;
    const nativePermission = window.Notification ? window.Notification.permission : "default";

    if (nativePermission === "denied") {
      alert("Notifications are blocked in your browser settings. Please reset notifications permission in your address bar to subscribe.");
      return;
    }

    const isPermissionGranted = OneSignal.Notifications.permission;
    const isOptedIn = OneSignal.User.pushSubscription.optedIn;
    const isSubscribed = isPermissionGranted && isOptedIn && nativePermission === "granted";

    if (isSubscribed) {
      // Unsubscribe
      localStorage.setItem("onesignal_opted_out", "true");
      await OneSignal.User.pushSubscription.optOut();
      setSubscriptionState("unsubscribed");
      console.log("OneSignal: User opted out of push notifications.");
    } else {
      // Subscribe / Prompt
      localStorage.removeItem("onesignal_opted_out");
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
