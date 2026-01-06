"use client";

import Image from "next/image";
import { satoshi } from "@/app/fonts";
import { downloadAppData } from "./downloadAppData";

export default function DownloadAppSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div
        className={`
          relative mx-auto max-w-7xl
          h-[420px] lg:h-[460px]
          overflow-hidden rounded-[32px]
          bg-[#2B1E1E]
          ${satoshi.className}
        `}
      >
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 px-10 py-12">
          {/* LEFT CONTENT — stays fully visible */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl lg:text-[42px] font-extrabold leading-tight">
              {downloadAppData.title}
            </h2>

            <p className="mt-10 max-w-lg text-white/80 text-xl leading-relaxed">
              {downloadAppData.description}
            </p>

            <div className="mt-10 flex gap-4">
              <Image
                src={downloadAppData.googlePlay}
                alt="Google Play"
                width={170}
                height={52}
              />
              <Image
                src={downloadAppData.appStore}
                alt="App Store"
                width={170}
                height={52}
              />
            </div>
          </div>

          {/* RIGHT PHONE — intentionally overflows */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src={downloadAppData.phoneImage}
              alt="CargolandFood App"
              width={320}
              height={640}
              priority
              className="translate-y-5 translate-x-10 lg:translate-x-[-80px]"
            />

            {/* floating icons */}
            <Image
              src="/images/icons/food-1.png"
              alt=""
              width={44}
              height={44}
              className="absolute -top-6 right-12"
            />
            <Image
              src="/images/icons/food-2.png"
              alt=""
              width={40}
              height={40}
              className="absolute top-20 -right-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
