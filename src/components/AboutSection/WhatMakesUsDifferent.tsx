"use client";

import { useState } from "react";
import Image from "next/image";
import { satoshi } from "@/app/fonts";
import { AnimatePresence, motion } from "framer-motion";

const tabs = ["Users", "Vendor", "Riders"] as const;
type Tab = (typeof tabs)[number];

const content: Record<Tab, any> = {
  Users: {
    image: "/images/phone-users.png",
    left: {
      title: "Use cargolandfood app",
      text: "Experience a seamless, effortless, and dependable food ordering journey designed for convenience and satisfaction anytime you want.",
    },
    right: {
      title: "Order your food",
      text: "Explore great restaurants, order freshly prepared meals, and enjoy quick, reliable delivery straight to your doorstep anytime.",
    },
  },
  Vendor: {
    image: "/images/phone-vendor.png",
    left: {
      title: "Grow your restaurant",
      text: "Reach more customers, manage orders easily, and scale your business with powerful vendor tools.",
    },
    right: {
      title: "Manage your menu",
      text: "Update meals, prices, and availability in real time with full control over your store.",
    },
  },
  Riders: {
    image: "/images/phone-rider.png",
    left: {
      title: "Earn on your schedule",
      text: "Deliver orders flexibly, earn competitively, and work on your own time with ease.",
    },
    right: {
      title: "Smart delivery system",
      text: "Get optimized routes, real-time updates, and smooth payouts for every delivery.",
    },
  },
};

export default function WhatMakesUsDifferent() {
  const [activeTab, setActiveTab] = useState<Tab>("Users");
  const [direction, setDirection] = useState<1 | -1>(1);

  function handleTabChange(tab: Tab) {
    setDirection(tab > activeTab ? 1 : -1);
    setActiveTab(tab);
  }

  return (
    <section className={`relative bg-white py-16 ${satoshi.className}`}>
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center px-6">
        <h2 className="text-4xl font-extrabold text-[#F25C05]">
          What Makes Us Different?
        </h2>
        <h3 className="mt-2 text-3xl md:text-4xl font-bold text-[#1F1614]">
          Fresh Flavors, Every Time
        </h3>
        <p className="mt-4 text-[#6B625E] text-xl pt-3">
          Enjoy a seamless experience for ordering food, receiving fast
          deliveries, and managing your meals effortlessly in one place.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex justify-center">
        <div className="flex rounded-full bg-[#FFF2E8] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition
                ${
                  activeTab === tab
                    ? "bg-[#F25C05] text-white"
                    : "text-[#1F1614]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="relative mx-auto mt-16 max-w-6xl hidden md:flex items-center justify-center">
        {/* Background rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[480px] w-[480px] rounded-full border border-[#FFE0CC]" />
          <div className="absolute h-[580px] w-[580px] rounded-full border border-[#FFE0CC]" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex items-center justify-center w-full"
          >
            <FeatureCard
              position="left"
              title={content[activeTab].left.title}
              text={content[activeTab].left.text}
            />

            {/* Phone */}
            <motion.div
              key={content[activeTab].image}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10"
            >
              <Image
                src={content[activeTab].image}
                alt={`${activeTab} app view`}
                width={300}
                height={580}
                priority
              />
            </motion.div>

            <FeatureCard
              position="right"
              title={content[activeTab].right.title}
              text={content[activeTab].right.text}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MOBILE */}
      <div className="md:hidden mt-12 px-6 flex flex-col items-center gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={content[activeTab].image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={content[activeTab].image}
              alt={`${activeTab} app view`}
              width={260}
              height={500}
              priority
            />
          </motion.div>
        </AnimatePresence>

        <FeatureCard
          mobile
          title={content[activeTab].left.title}
          text={content[activeTab].left.text}
        />

        <FeatureCard
          mobile
          title={content[activeTab].right.title}
          text={content[activeTab].right.text}
        />
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Feature Card */
/* ---------------------------------- */

function FeatureCard({
  title,
  text,
  position,
  mobile = false,
}: {
  title: string;
  text: string;
  mobile?: boolean;
  position?: "left" | "right";
}) {
  return (
    <div
      className={`${
        mobile
          ? "w-full"
          : position === "left"
          ? "absolute left-23 -translate-x-12 "
          : "absolute right-23 translate-x-12 top-20"
      } max-w-xs  border-3 border-[#FFE5D7] rounded-2xl bg-[#FFF5EE] p-3 shadow-sm`}
    >
      <h4 className="flex items-center gap-2 font-semibold italic text-[#B64504]">
        <img
          src="/images/icons/rating.png"
          alt=""
          className="h-6 w-6 shrink-0"
        />
        <span>{title}</span>
      </h4>

      <p className="mt-2 text-sm leading-6 font-medium text-[#F25C05]">
        {text}
      </p>
    </div>
  );
}
