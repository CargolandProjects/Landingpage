import WhatMakesUsDifferent from "@/src/components/AboutSection/WhatMakesUsDifferent";
import FeaturePillsMarquee from "@/src/components/Features/FeaturePills";
import Hero from "@/src/components/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturePillsMarquee />
      <WhatMakesUsDifferent />
    </>
  );
}
