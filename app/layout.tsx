import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FloatingWidgets } from "@/components/floating-widgets";
import { OneSignalManager } from "@/components/onesignal-manager";
import { PrivacyScripts } from "@/components/privacy-scripts";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | AI Prompts, Image Tools & Blogging Platform`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "NB Prompts is a creator-first hub for AI prompt ideas, free online image tools, blogging tips, SEO guides, and quick content workflow solutions.",
  applicationName: SITE_NAME,
  authors: [{ name: "Shobhit Verma", url: `${SITE_URL}/author` }],
  creator: "Shobhit Verma",
  publisher: SITE_NAME,
  category: "technology",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: `${SITE_NAME} | Best AI Prompts & Free Online Tools`,
    description:
      "Create smarter with AI prompts, blogging resources, and free online image tools for creators and bloggers.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/main-logo.png`,
        width: 1792,
        height: 2380,
        alt: `${SITE_NAME} logo`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Best AI prompts, image tools, blogging tips, and online creator resources.",
    images: [`${SITE_URL}/main-logo.png`]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-7598958516745914" />
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var storedTheme = localStorage.getItem("theme");
                var theme = storedTheme || "light";
                document.documentElement.dataset.theme = theme;
              } catch (error) {}
            })();
          `}
        </Script>

        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body>
        <div className="site-shell">
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-13rem)] max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <FloatingWidgets />
          <OneSignalManager />
          <PrivacyScripts />
        </div>
      </body>
    </html>
  );
}
