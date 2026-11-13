"use client";

import WhatMakesUsDifferent from "@/src/components/AboutSection/WhatMakesUsDifferent";
import DownloadAppSection from "@/src/components/DownloadApp/DownloadAppSection";
import Footer from "@/src/components/Footer/Footer";
import FAQSection from "@/src/components/Faq/Faq";
import FeaturePillsMarquee from "@/src/components/Features/FeaturePills";
import Hero from "@/src/components/Hero/Hero";
import TestimonialsSection from "@/src/components/Testimonial/TestimonialSection";
import FeatureCarousel from "@/src/components/WebFeatures/FeatureCarousel";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/stats.service";

export default function HomePage() {
  const hasTracked = useRef(false);
  useEffect(() => {
    // Guard to prevent double-firing in React Strict Mode (development only)
    if (hasTracked.current) return;

    hasTracked.current = true;
    stats.markVisitor();
  }, []);

  return (
    <>
      <Hero />
      <FeaturePillsMarquee />
      <WhatMakesUsDifferent />
      <FeatureCarousel />
      <TestimonialsSection />
      <FAQSection />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
