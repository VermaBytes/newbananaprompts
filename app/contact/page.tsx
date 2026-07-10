"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    // Basic Validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg("Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate form submission to a backend / email service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl space-y-8">
      {/* Page Heading */}
      <div className="space-y-2">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em]">Get In Touch</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl tracking-tight">
          Contact NB Prompts
        </h1>
        <p className="theme-text-secondary text-sm max-w-2xl leading-6">
          Have a question about AI prompts, exam preparation roadmaps, online courses, or partnerships? Reach out below, and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
        {/* Contact Form Column */}
        <div className="site-panel rounded-xl px-5 py-6 sm:px-8 sm:py-8 space-y-6">
          <h2 className="theme-text-primary text-xl font-bold">Send Us a Message</h2>
          
          {isSuccess ? (
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-5 space-y-2 text-center animate-pulse">
              <svg className="w-12 h-12 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="theme-text-primary text-lg font-bold">Message Sent Successfully!</h3>
              <p className="theme-text-secondary text-sm leading-relaxed max-w-md mx-auto">
                Thank you for reaching out! We have received your message and will respond within 24-48 business hours.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-3 theme-button theme-soft-hover rounded-none px-4 py-1.5 text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="rounded bg-rose-500/10 border border-rose-500/20 px-3 py-2.5 text-xs text-rose-400">
                  {errorMsg}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="theme-text-primary text-xs font-semibold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-none border border-cyan-400/20 bg-white/5 px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="theme-text-primary text-xs font-semibold">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-none border border-cyan-400/20 bg-white/5 px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="theme-text-primary text-xs font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="What is this regarding?"
                  className="w-full rounded-none border border-cyan-400/20 bg-white/5 px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="theme-text-primary text-xs font-semibold">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full rounded-none border border-cyan-400/20 bg-white/5 px-3 py-2 text-xs text-white outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="hero-cta w-full flex items-center justify-center rounded-none py-2.5 text-xs font-bold text-white shadow-lg disabled:opacity-50"
              >
                {isLoading ? "Sending Message..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6">
          <div className="site-panel rounded-xl px-5 py-6 sm:px-8 sm:py-8 space-y-4">
            <h2 className="theme-text-primary text-xl font-bold">Contact Directory</h2>
            <div className="space-y-3.5 text-sm leading-relaxed theme-text-secondary">
              <div>
                <p className="font-semibold theme-text-primary text-xs uppercase tracking-wider text-cyan-400">Email Address</p>
                <a href="mailto:shoverashop@gmail.com" className="hover:underline text-cyan-400 font-semibold">shoverashop@gmail.com</a>
              </div>
              <div>
                <p className="font-semibold theme-text-primary text-xs uppercase tracking-wider text-cyan-400">Response Window</p>
                <p>We review and respond to inquiries within 24-48 business hours (Monday to Friday).</p>
              </div>
            </div>
          </div>

          <div className="site-panel rounded-xl px-5 py-6 sm:px-8 sm:py-8 space-y-4">
            <h2 className="theme-text-primary text-xl font-bold">Direct Verification</h2>
            <p className="theme-text-secondary text-xs leading-5">
              If you are looking for exam guidelines, always cross-verify dates, notices, and syllabi against official government channels (e.g. ssc.gov.in, upsc.gov.in). {SITE_NAME} is an educational platform and does not issue notifications directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
