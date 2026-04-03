import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | AI Prompts, Image Tools & Blogging Platform`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "NB Prompts is a creator-first hub for AI prompt ideas, free online image tools, blogging tips, SEO guides, and quick content workflow solutions.",
  keywords: [
    "NB Prompts",
    "AI prompts",
    "free online tools",
    "image tools",
    "blogging tips",
    "SEO friendly blog",
    "background remover",
    "image compressor",
    "JPG to PNG",
    "image optimization",
    "AI writing prompts",
    "content creation",
    "creator tools",
    "online converter",
    "prompt ideas"
  ],
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${SITE_NAME} | Best AI Prompts & Free Online Tools`,
    description:
      "Create smarter with AI prompts, blogging resources, and free online image tools for creators and bloggers.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Best AI prompts, image tools, blogging tips, and online creator resources."
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var storedTheme = localStorage.getItem("theme");
                var theme = storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                document.documentElement.dataset.theme = theme;
              } catch (error) {}
            })();
          `}
        </Script>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body>
        <div className="site-shell">
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-13rem)] max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
