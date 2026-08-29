"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const CONSENT_KEY = "nb_prompts_cookie_consent";
type Consent = "accepted" | "essential" | null;

export function PrivacyScripts() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setConsent(stored === "accepted" || stored === "essential" ? stored : null);
    setReady(true);
  }, []);

  const choose = (value: Exclude<Consent, null>) => {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-CFRHNCTG1G" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-CFRHNCTG1G');`}
          </Script>
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7598958516745914"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="lazyOnload" />
        </>
      ) : null}

      {ready && consent === null ? (
        <section
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl border border-slate-300 bg-white p-4 text-slate-800 shadow-2xl dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 sm:p-5"
          role="dialog"
          aria-label="Cookie choices"
          aria-live="polite"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 sm:text-sm">
              We use optional analytics, advertising, and push-notification technologies only with your permission. Essential site preferences work without them. Read our{" "}
              <Link href="/cookie-policy" className="font-semibold text-cyan-600 underline dark:text-cyan-400">Cookie Policy</Link>.
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button type="button" onClick={() => choose("essential")} className="min-h-10 border border-slate-400 px-4 text-xs font-semibold">
                Essential only
              </button>
              <button type="button" onClick={() => choose("accepted")} className="min-h-10 bg-cyan-600 px-4 text-xs font-semibold text-white">
                Accept optional
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
