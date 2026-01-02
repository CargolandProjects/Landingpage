"use client";

import { satoshi } from "@/app/fonts";
import { motion } from "framer-motion";
import { MapPin, Headphones, Sparkles, Utensils, StarIcon } from "lucide-react";
import { text } from "stream/consumers";

const items = [
  { text: "Highly rated riders", icon: MapPin, color: "#2ED573" },
  {
    text: "24/7 support for customers and vendors",
    icon: Headphones,
    color: "#FFB6C1",
  },
  { text: "Quick and easy onboarding", icon: Sparkles, color: "#FFD700" },
  { text: "Quality meal choices", icon: Utensils, color: "#FF8C42" },
  { text: "Quick-Grab Groceries", icon: StarIcon, color: "#FFD700" },
];

export default function FeaturePillsMarquee() {
  return (
    <section className="overflow-hidden bg-white py-10">
      {/* Fade-in only */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden">
          {/* MOVING TRACK */}
          <div className="marquee-track">
            {/* TRACK A */}
            <div className="marquee-group">
              {items.map((item, index) => (
                <Pill key={`a-${index}`} item={item} />
              ))}
            </div>

            {/* TRACK B (CLONE) */}
            <div className="marquee-group">
              {items.map((item, index) => (
                <Pill key={`b-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Pill({ item }: { item: any }) {
  const Icon = item.icon;

  return (
    <div
      className={`${satoshi.className} flex shrink-0 items-center gap-3 rounded-xl bg-[#2A1F1D] px-6 py-3 text-md font-bold text-white shadow-md`}
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full"
        style={{ backgroundColor: item.color }}
      >
        <Icon size={14} className="text-[#2A1F1D]" />
      </span>

      <span className="whitespace-nowrap">{item.text}</span>
    </div>
  );
}
