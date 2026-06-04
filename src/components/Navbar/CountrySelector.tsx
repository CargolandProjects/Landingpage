"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { satoshi } from "@/app/fonts";

const countries = [
  {
    code: "NG",
    name: "Nigeria",
    flag: "/images/flags/ng.jpg",
  },
  {
    code: "GH",
    name: "Ghana",
    flag: "/images/flags/gh.svg",
  },
];

export default function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(countries[0]);

  return (
    <div className={`relative ${satoshi.className}`}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center cursor-pointer gap-3 rounded-full bg-[#2D2020] px-4 py-3 text-sm text-white"
      >
        <Image
          src={active.flag}
          alt={active.name}
          width={20}
          height={20}
          className="rounded-full"
          unoptimized
        />

        <span className="font-medium underline underline-offset-4">
          {active.code}
        </span>

        <ChevronDown size={16} />
      </button>

      {/* Dropdown — ONLY inactive country */}
      {open && (
        <div className="absolute right-0 mt-3">
          {countries
            .filter((country) => country.code !== active.code)
            .map((country) => (
              <button
                key={country.code}
                onClick={() => {
                  setActive(country);
                  setOpen(false);
                }}
                className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm text-[#1F1614] shadow-md transition hover:scale-[1.02]"
              >
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                  unoptimized
                />

                <span className="font-medium underline underline-offset-4">
                  {country.code}
                </span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
