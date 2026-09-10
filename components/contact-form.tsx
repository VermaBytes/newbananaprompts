"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "918381900990";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "General inquiry",
  message: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    };

    if (!trimmed.name || !trimmed.email || !trimmed.phone || !trimmed.message) {
      setStatus("Please fill in your name, email, phone number, and message.");
      return;
    }

    const message = [
      `Name: ${trimmed.name}`,
      `Email: ${trimmed.email}`,
      `Phone: ${trimmed.phone}`,
      `Subject: ${trimmed.subject || "General inquiry"}`,
      "",
      trimmed.message
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setStatus("Opening WhatsApp...");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="theme-surface space-y-5 rounded-none p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-cyan-400/15 pb-4">
        <h2 className="theme-text-primary text-xl font-bold">Send a message</h2>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
          WhatsApp
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="theme-text-primary font-medium">Full name *</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            required
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="theme-text-primary font-medium">Email address *</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            required
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="theme-text-primary font-medium">Phone number *</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 83819 00990"
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            required
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="theme-text-primary font-medium">Subject</span>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          >
            <option>General inquiry</option>
            <option>Content correction</option>
            <option>Advertise with us</option>
            <option>Copyright concern</option>
            <option>Partnership</option>
          </select>
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        <span className="theme-text-primary font-medium">Message *</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Write your message here..."
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          required
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="theme-button inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold"
        >
          Send on WhatsApp
        </button>
        <p className="theme-text-secondary text-xs leading-6">
          Your message will open in WhatsApp for +91 83819 00990.
        </p>
      </div>

      {status ? (
        <p className="theme-text-primary rounded-md border border-cyan-400/20 bg-cyan-500/5 px-3 py-2 text-sm">
          {status}
        </p>
      ) : null}
    </form>
  );
}
