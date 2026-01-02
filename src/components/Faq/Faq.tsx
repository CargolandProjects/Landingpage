"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { satoshi } from "@/app/fonts";
import { faqs } from "./faqData";

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className={`bg-white py-24 ${satoshi.className}`}>
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT — FAQ */}
        <div>
          <h2 className="text-5xl font-extrabold text-[#1F1614] mb-10">
            Frequently <br /> Asked Questions
          </h2>

          <div className="divide-y divide-[#F3E6DE] rounded-xl overflow-hidden">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <button
                  key={index}
                  onClick={() => setActive(isOpen ? null : index)}
                  className={`w-full text-left px-6 py-5 transition ${
                    isOpen ? "bg-[#FFF3EA]" : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#1F1614]">
                      {faq.question}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`transition ${
                        isOpen ? "rotate-90 text-[#F25C05]" : "text-[#2f2f2fff]"
                      }`}
                    />
                  </div>

                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-[#6B625E]">
                      {faq.answer}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT — PROMO CARD */}
        <div className="relative rounded-[28px] bg-[#F25C05] h-[600px] p-10 text-white overflow-hidden">
          {/* DECOR ICONS */}
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              🍲
            </div>
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              🍔
            </div>
          </div>

          <h3 className="text-4xl font-extrabold leading-tight">
            What Makes Us <br />
            Different? Fresh <br />
            Flavors, Every Time
          </h3>

          <p className="mt-4 max-w-sm text-lg leading-relaxed text-white/90">
            Discover your perfect meal every day — fresh, tasty, and delivered
            fast. Enjoy quality, flavor, and convenience in every bite.
          </p>

          {/* PHONE */}
          <div className="mt-10 flex justify-center">
            <Image
              src="/images/phone-mockup.png"
              alt="Cargoland App"
              width={260}
              height={520}
              className="drop-shadow-xl "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
