"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import { Apple, ArrowRightCircle, Play } from "lucide-react";
import { WEB_APP_URL } from "@/src/config/links";

export default function HeroActions() {
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
      <motion.a
        href={WEB_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-4 rounded-full bg-[#F8E9C9] px-8 py-4 font-semibold text-[#1F1F1F] shadow-lg transition"
      >
        <span>Download App</span>

        {/* Icons group */}
        <span className="flex items-center gap-1">
          <Apple size={16} />

          {/* Divider */}
          <span className="h-5 w-px bg-[#1F1F1F]/30" />

          <Play size={16} />
        </span>
      </motion.a>
    </motion.div>
  );
}
