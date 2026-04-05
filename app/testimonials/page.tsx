import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { TestimonialsClient } from "@/components/testimonials-client";

const pageTitle = "Testimonials | Web Development with AI";
const pageDescription =
  "Share your review for the Web Development with AI course. Submit one review and update it anytime.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/testimonials"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/testimonials`,
    siteName: SITE_NAME,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription
  }
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
