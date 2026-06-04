"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/src/config/links";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Contact from ${name || "website visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-[17px] font-bold text-[#1F1614]">Type Here</h2>

      <div className="mt-4 rounded-[14px] border border-[#E6E1DE] bg-[#FAFAFA] p-4 md:p-5">
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-[10px] border border-transparent bg-white px-4 py-3 text-[13px] text-[#1F1614] placeholder:text-[#9A8F8A] shadow-sm outline-none transition focus:border-[#F76600]"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-[10px] border border-transparent bg-white px-4 py-3 text-[13px] text-[#1F1614] placeholder:text-[#9A8F8A] shadow-sm outline-none transition focus:border-[#F76600]"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full resize-none rounded-[12px] border border-transparent bg-white px-4 py-3 text-[13px] text-[#1F1614] placeholder:text-[#9A8F8A] shadow-sm outline-none transition focus:border-[#F76600]"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-full bg-[#F76600] px-10 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#E35D00]"
      >
        Submit
      </button>
    </form>
  );
}
