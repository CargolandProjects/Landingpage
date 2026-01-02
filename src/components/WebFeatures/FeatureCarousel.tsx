"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { features } from "./featureData";
import { satoshi } from "@/app/fonts";

export default function FeatureCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByOne = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]") as HTMLElement | null;
    if (!card) return;

    el.scrollBy({
      left: dir === "left" ? -card.offsetWidth : card.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#f55b00] pt-[120px] pb-[72px]">
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[120px] w-full"
        >
          <path
            d="M0,40
           C120,80 240,0 360,20
           C480,40 600,100 720,80
           C840,60 960,20 1080,40
           C1200,60 1320,20 1440,30
           L1440,0
           L0,0
           Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      {/* SHARED WIDTH CONTAINER */}
      <div className={`${satoshi.className} mx-auto max-w-[1240px] px-6`}>
        {/* HEADER */}
        <div className="mb-[56px] flex items-center justify-between">
          <h3 className="text-white text-[34px] font-semibold leading-[1.15] tracking-[-0.02em]">
            Features That Elevate Your
            <br />
            Overall Experience
          </h3>

          <div className="flex items-center gap-[18px]">
            {/* LEFT ARROW */}
            <button
              onClick={() => scrollByOne("left")}
              aria-label="Previous"
              className="p-[6px] text-white/90"
            >
              <ChevronLeft size={22} />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() => scrollByOne("right")}
              aria-label="Next"
              className="grid h-[48px] w-[48px] place-items-center rounded-full bg-white text-gray-900"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={scrollerRef}
          className="overflow-x-auto scroll-smooth [scrollbar-width:none]"
        >
          <div className="flex gap-[24px]">
            {features.map((f, idx) => (
              <article
                key={idx}
                data-card
                className="flex w-[365px] h-[450px] min-w-[320px] flex-shrink-0 flex-col rounded-[24px] bg-white p-[24px]"
              >
                {/* ICON */}
                <span className="mb-[16px] grid h-[44px] w-[44px] place-items-center rounded-full bg-[#fff4ec]">
                  <Image src={f.icon} alt="" width={26} height={26} />
                </span>

                {/* TITLE */}
                <h3 className="mb-[8px] font-satoshi text-[29px] font-bold text-[#0b1220]">
                  {f.title}
                </h3>

                {/* DESC */}
                <p className="mb-[18px] text-[20px] leading-[1.5] text-[#6b7280]">
                  {f.description}
                </p>

                {/* IMAGE */}
                <div className="relative h-[260px] w-full overflow-hidden rounded-[18px] bg-[#fff4ec]">
                  {/* Uniform inset frame */}
                  <div className="absolute inset-[12px]">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover object-top"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
