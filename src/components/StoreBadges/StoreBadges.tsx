"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PLAY_STORE_URL } from "@/src/config/links";

type Badge = {
  width: number;
  height: number;
  className?: string;
};

type StoreBadgesProps = {
  /** Wrapper classes — pass the gap the surrounding layout needs. */
  className?: string;
  play: Badge;
  apple: Badge;
};

export default function StoreBadges({
  className = "gap-4",
  play,
  apple,
}: StoreBadgesProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function handleAppStoreClick() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowComingSoon(true);
    timerRef.current = setTimeout(() => setShowComingSoon(false), 2400);
  }

  return (
    <div className={`flex flex-wrap items-center ${className}`}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="transition hover:opacity-90"
      >
        <Image
          src="/images/store/google-play.png"
          alt="Get it on Google Play"
          width={play.width}
          height={play.height}
          className={play.className}
        />
      </a>

      <div className="relative">
        <button
          type="button"
          onClick={handleAppStoreClick}
          aria-label="Download on the App Store — coming soon"
          className="block cursor-pointer transition hover:opacity-90"
        >
          <Image
            src="/images/store/app-store.png"
            alt="Download on the App Store"
            width={apple.width}
            height={apple.height}
            className={apple.className}
          />
        </button>

        <AnimatePresence>
          {showComingSoon && (
            <motion.span
              role="status"
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-[#2D2020] shadow-lg"
            >
              Coming soon on iOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
