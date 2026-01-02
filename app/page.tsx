import WhatMakesUsDifferent from "@/src/components/AboutSection/WhatMakesUsDifferent";
import FAQSection from "@/src/components/Faq/Faq";
import FeaturePillsMarquee from "@/src/components/Features/FeaturePills";
import Hero from "@/src/components/Hero/Hero";
import TestimonialsSection from "@/src/components/Testimonial/TestimonialSection";
import FeatureCarousel from "@/src/components/WebFeatures/FeatureCarousel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturePillsMarquee />
      <WhatMakesUsDifferent />
      <FeatureCarousel />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
