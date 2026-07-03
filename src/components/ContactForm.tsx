"use client";

import { useState } from "react";
import { site } from "@/lib/menu";

const inputClass =
  "w-full rounded-2xl border border-blue-soft bg-white/80 px-5 py-3 text-[15px] text-ink placeholder:text-muted/60 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const message = String(data.get("message") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = encodeURIComponent(`Message from ${name} via momcha.co.ke`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${phone ? ` (${phone})` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-10 rounded-3xl bg-blue-tint p-8 text-center">
        <p className="text-4xl">💌</p>
        <p className="font-display mt-3 text-xl font-bold text-blue">
          Thank you!
        </p>
        <p className="mt-2 text-sm text-muted">
          Your email app should have opened with your message ready to send. We
          can&apos;t wait to hear from you!
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 rounded-full border-2 border-blue px-6 py-2 text-sm font-semibold text-blue transition hover:bg-blue hover:text-white"
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input name="name" required placeholder="Your Name" className={inputClass} />
      <input name="email" type="email" required placeholder="Email Address" className={inputClass} />
      <input name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
      <textarea name="message" required placeholder="Your Message" rows={5} className={`${inputClass} resize-none`} />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-blue px-8 py-3 font-semibold text-white shadow-lift transition hover:scale-105"
      >
        Send Message
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 11 18-8-8 18-2-8z" />
        </svg>
      </button>
    </form>
  );
}
