"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { satoshi } from "@/app/fonts";
import { testimonials } from "./testimonialsData";
import { AnimatePresence, motion } from "framer-motion";

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const [direction, setDirection] = useState<1 | -1>(1);

  const total = testimonials.length;

  const indices = useMemo(() => {
    const left = mod(active - 1, total);
    const right = mod(active + 1, total);
    return { left, active, right };
  }, [active, total]);

  const goLeft = () => {
    setDirection(-1);
    setActive((p) => mod(p - 1, total));
  };

  const goRight = () => {
    setDirection(1);
    setActive((p) => mod(p + 1, total));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // slide to the right
      setActive((prev) => mod(prev + 1, total));
    }, 3000); // 5 seconds

    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className={`bg-white py-24 ${satoshi.className}`}>
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F1614] leading-tight">
          What Our Happy Customers <br /> Are Saying
        </h2>
        <p className="mt-5 text-[#6B625E] text-xl leading-relaxed">
          What our customers love: fast deliveries, seamless service, and
          consistently satisfying experiences every time.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-16 max-w-8xl px-6">
        {/* Desktop / Tablet */}
        <div className="hidden md:grid grid-cols-3 items-center gap-10">
          {/* Left (blurred) */}
          <Card variant="side" {...testimonials[indices.left]} />

          {/* CENTER (animated) */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={indices.active}
              custom={direction}
              initial={{ x: direction * 80, opacity: 0, scale: 0.96 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -direction * 80, opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.45,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Card variant="active" {...testimonials[indices.active]} />
            </motion.div>
          </AnimatePresence>

          {/* Right (blurred) */}
          <Card variant="side" {...testimonials[indices.right]} />
        </div>

        {/* Floating arrows (desktop) */}
        <button
          onClick={goLeft}
          aria-label="Previous testimonial"
          className="hidden md:flex absolute left-[27%] top-1/2 -translate-y-1/2
                     h-14 w-14 items-center justify-center rounded-full
                     bg-[#F25C05] shadow-lg ring-4 ring-white
                     hover:scale-[1.03] active:scale-[0.97] transition"
        >
          <ChevronLeft size={22} className="text-white" />
        </button>

        <button
          onClick={goRight}
          aria-label="Next testimonial"
          className="hidden md:flex absolute right-[27%] top-1/2 -translate-y-1/2
                     h-14 w-14 items-center justify-center rounded-full
                     bg-[#F25C05] shadow-lg ring-4 ring-white
                     hover:scale-[1.03] active:scale-[0.97] transition"
        >
          <ChevronRight size={22} className="text-white" />
        </button>

        {/* Mobile */}
        <div className="md:hidden mt-10 relative">
          <Card variant="active" {...testimonials[indices.active]} />

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={goLeft}
              className="h-12 w-12 rounded-full bg-[#F25C05] flex items-center justify-center shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={goRight}
              className="h-12 w-12 rounded-full bg-[#F25C05] flex items-center justify-center shadow-lg"
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- */
/* Card */
/* ----------------------------- */

function Card({
  name,
  text,
  avatar,
  rating = 5,
  variant,
}: {
  name: string;
  text: string;
  avatar: string;
  rating?: number;
  variant: "active" | "side";
}) {
  const isActive = variant === "active";

  return (
    <div
      className={[
        "rounded-2xl bg-white p-8 transition",
        isActive
          ? "border mb-30 border-[#F25C05] shadow-sm"
          : "border-3 border-[#F25C05] opacity-35 blur-[2px] shadow-none",
      ].join(" ")}
    >
      {/* Stars */}
      <div className="flex items-center gap-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={22}
            className="text-[#F25C05]"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Text */}
      <p className="mt-5 text-[#1F1614] text-lg leading-relaxed">{text}</p>

      {/* Footer */}
      <div className="mt-8 flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-[#F3E6DE]">
          <Image src={avatar} alt={name} width={40} height={40} />
        </div>
        <p className="font-bold text-[#1F1614] text-lg">{name}</p>
      </div>
    </div>
  );
}
