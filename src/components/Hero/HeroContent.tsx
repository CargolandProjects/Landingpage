"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import HeroActions from "./HeroActions";
import { sail, satoshi } from "@/app/fonts";

export default function HeroContent() {
  return (
    <motion.div
      // variants={stagger}
      initial="hidden"
      animate="visible"
      className={`mx-auto flex max-w-3xl  ${satoshi.className} flex-col items-center text-center text-white`}
    >
      {/* Badge */}
      <motion.span
        variants={fadeUp}
        className="mb-6 inline-block rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-[#F25C05]"
      >
        Why Go Hungry?
      </motion.span>

      {/* Headline */}
      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        className="relative text-4xl md:text-6xl leading-tight"
      >
        <span className="font-extrabold">Delicious </span>
        <span className={`relative inline-block ${sail.className}`}>
          Cargolandfood
          {/* Doodle */}
          <img
            src="/images/feater.png"
            alt=""
            className="pointer-events-none absolute -top-7 right-0 w-9 md:-top-11 md:w-16"
          />
        </span>{" "}
        <span className="font-extrabold">Meals, One Click</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={fadeUp}
        className={`mt-6 max-w-xl text-lg font-medium text-white/90 ${satoshi.className}`}
      >
        Craving something tasty? Cargolandfood delivers fresh, delicious meals
        straight to you, fast and hassle-free every time.
      </motion.p>

      {/* Actions */}
      <div className="mt-0">
        <HeroActions />
      </div>
    </motion.div>
  );
}
