/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import { Apple, ArrowRightCircle, Play } from "lucide-react";
import { PLAY_STORE_URL, WEB_APP_URL } from "@/src/config/links";

export default function HeroActions() {
  // Helper to safely fire the Meta Pixel event
  const trackLead = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "Google Play Download",
        content_category: "App Download",
      });
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      {/* Order Now */}
      <motion.a
        href={WEB_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-full bg-[#1F1F1F] px-8 py-4 text-white font-semibold shadow-lg transition"
      >
        Order Now
        <span>
          <ArrowRightCircle size={20} className="inline-block ml-2" />
        </span>
      </motion.a>

      {/* Download App */}
      <div className="relative group">
        {/* Download App Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-4 rounded-full bg-[#F8E9C9] px-8 py-4 font-semibold text-[#1F1F1F] shadow-lg transition outline-none"
        >
          <span>Download App</span>

          {/* Icons group */}
          <span className="flex items-center gap-1">
            <Apple size={16} />
            {/* Divider */}
            <span className="h-5 w-px bg-[#1F1F1F]/30" />
            <Play size={16} />
          </span>
        </motion.button>

        {/* Dropdown Menu - Powered entirely by CSS transitions */}
        <div
          className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 z-50 
                     opacity-0 invisible translate-y-2 
                     transition-all duration-200 ease-out 
                     group-hover:opacity-100 group-hover:visible group-hover:translate-y-0  group-hover:delay-80
                     group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0"
        >
          <button
            // href={APP_STORE_URL || "#"}
            // target="_blank"
            // rel="noopener noreferrer"
            disabled
            className="relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#1F1F1F] hover:bg-[#F25C05]/8 transition-colors hover:text-[#F25C05] w-full"
          >
            {/* Unavalable indicator overlay */}
            <div className="absolute inset-0 right-2 flex justify-end items-center backdrop-blur-[1px]" />
            <Apple size={18} />
            App Store
          </button>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#1F1F1F] hover:bg-[#F25C05]/8 transition-colors hover:text-[#F25C05]"
          >
            <Play size={18} />
            Google Play
          </a>
        </div>
      </div>
    </motion.div>
  );
}
