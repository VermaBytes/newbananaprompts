"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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

    if (nativePermission === "denied") {
      setSubscriptionState("blocked");
    } else if (isPermissionGranted && isOptedIn) {
      setSubscriptionState("subscribed");
    } else {
      setSubscriptionState("unsubscribed");
    }
  };

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
      setSubscriptionState(subscriptionState === "subscribed" ? "unsubscribed" : "subscribed");
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

  if (!mounted) return null;

  // Tooltip details based on subscription status
  const tooltipText = {
    loading: "Loading OneSignal...",
    subscribed: "Notifications Enabled",
    unsubscribed: "Subscribe to Updates",
    blocked: "Notifications Blocked",
  }[subscriptionState];

  return (
    <div className="fixed bottom-72 right-5 z-[9999]">
      <div className="relative flex items-center justify-end">
        {/* Tooltip on the left */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: -12, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full whitespace-nowrap rounded-none border border-slate-200 dark:border-cyan-400/20 bg-white/95 dark:bg-[#020617]/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-800 dark:text-cyan-400 shadow-md backdrop-blur-md"
            >
              {tooltipText}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Floating Bell Icon */}
        <motion.button
          onClick={handleBellClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={bellRinging ? {
            rotate: [0, -15, 15, -15, 15, -10, 10, -5, 5, 0],
            transition: { duration: 0.8 }
          } : {}}
          className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg cursor-pointer transition-all duration-300 ${
            subscriptionState === "subscribed"
              ? "bg-gradient-to-tr from-green-500 to-emerald-600 shadow-green-500/20 hover:shadow-green-500/40"
              : subscriptionState === "blocked"
              ? "bg-slate-700/80 dark:bg-slate-800/80 shadow-slate-900/10"
              : "bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 shadow-cyan-500/20 hover:shadow-cyan-500/40"
          }`}
          aria-label={tooltipText}
          title={tooltipText}
        >
          {/* Bell Icon SVG */}
          <div className="relative">
            <svg
              className={`w-7 h-7 fill-none stroke-current ${bellRinging ? "animate-bounce" : ""}`}
              viewBox="0 0 24 24"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>

            {/* Subscribed Badge (Green Checkmark) */}
            {subscriptionState === "subscribed" && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-emerald-600 border border-emerald-500 shadow-sm">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            )}

            {/* Blocked Badge (Red Slash or Dot) */}
            {subscriptionState === "blocked" && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 border border-white dark:border-slate-900 text-white shadow-sm font-bold text-[8px]">
                !
              </span>
            )}
          </div>
        </motion.button>
      </div>
    </div>
  );
}
