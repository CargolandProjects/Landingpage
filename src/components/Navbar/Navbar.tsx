"use client";

import { useState } from "react";
import { satoshi } from "@/app/fonts";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountrySelector from "./CountrySelector";
import {
  SIGNUP_URL,
  VENDOR_PORTAL_URL,
  RIDER_PORTAL_URL,
} from "@/src/config/links";

const moreLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-6 left-0 right-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl ${satoshi.className} items-center justify-between px-4 sm:px-6`}
      >
        {/* LOGO — links to home */}
        <Link href="/" className="rounded-xl px-2 py-3 sm:px-4" aria-label="CargolandFood home">
          <Image
            src="/images/logo2.png"
            alt="CargolandFood"
            width={120}
            height={36}
            priority
            unoptimized
            className="h-auto w-[100px] sm:w-[120px]"
          />
        </Link>

        {/* CENTER NAV PILL (desktop) */}
        <div className="hidden md:flex items-center gap-10 rounded-full bg-[#2D2020] px-10 py-4 text-sm text-[#F4F1EE]">
          <a
            href={VENDOR_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium cursor-pointer transition hover:text-white"
          >
            <span>🏪</span>
            <span>Vendor/Restaurant</span>
          </a>

          <a
            href={RIDER_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium cursor-pointer transition hover:text-white"
          >
            <span>🛵</span>
            <span>Delivery man</span>
          </a>

          {/* MORE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-2 font-medium cursor-pointer transition hover:text-white"
            >
              <span>More</span>
              <ChevronDown
                size={16}
                className={`transition ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {moreOpen && (
              // top-full + pt-4 keeps the hover area continuous (no gap that
              // would trigger onMouseLeave between the trigger and the menu)
              <div className="absolute left-0 top-full pt-4">
                <div className="flex w-44 flex-col overflow-hidden rounded-3xl bg-white py-2 text-[#1F1614] shadow-lg">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      className="px-5 py-2.5 text-sm font-medium transition hover:bg-[#FFF3EA] hover:text-[#F25C05]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT ACTIONS (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* COUNTRY */}
          <CountrySelector />

          {/* SIGN UP */}
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center cursor-pointer gap-2 rounded-full border-2 border-white bg-[#ECE4B7] px-6 py-3 text-sm font-medium text-[#1F1614] transition hover:scale-[1.03] active:scale-[0.97]"
          >
            Sign Up
            {/* Icons */}
            <span className="relative h-4 w-4">
              {/* Default */}
              <ArrowUpRight
                size={16}
                className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
              />

              {/* Hover */}
              <ArrowRight
                size={16}
                className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              />
            </span>
          </a>
        </div>

        {/* MOBILE: country + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <CountrySelector />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full bg-[#2D2020] text-white"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {menuOpen && (
        <div className={`md:hidden ${satoshi.className} px-4 sm:px-6`}>
          <div className="mt-3 flex flex-col gap-1 rounded-2xl bg-white p-3 text-[#1F1614] shadow-xl">
            <a
              href={VENDOR_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-[#FFF3EA]"
            >
              <span>🏪</span>
              <span>Vendor/Restaurant</span>
            </a>

            <a
              href={RIDER_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-[#FFF3EA]"
            >
              <span>🛵</span>
              <span>Delivery man</span>
            </a>

            <div className="my-1 h-px bg-[#F3E6DE]" />

            {moreLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-[#FFF3EA] hover:text-[#F25C05]"
              >
                {item.label}
              </Link>
            ))}

            {/* SIGN UP */}
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border-2 border-[#1F1614] bg-[#ECE4B7] px-6 py-3 text-sm font-medium text-[#1F1614]"
            >
              Sign Up
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
