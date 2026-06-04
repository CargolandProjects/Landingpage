import type { Metadata } from "next";
import Footer from "@/src/components/Footer/Footer";
import PrivacyPolicyContent from "@/src/components/Legal/PrivacyPolicyContent";
import PrivacyPolicyHero from "@/src/components/Legal/PrivacyPolicyHero";
import { aboutUsSections } from "@/src/components/Legal/legalSections";
import DownloadAppSection from "@/src/components/DownloadApp/DownloadAppSection";

export const metadata: Metadata = {
  title: "About Us | CargolandFood",
  description:
    "Learn more about CargolandFood — who we are, our mission, and what we offer.",
};

export default function AboutUsPage() {
  return (
    <>
      <PrivacyPolicyHero
        title="About Us"
        subtitle="Delicious meals, reliable delivery, and a platform built for customers, vendors, and riders."
      />
      <PrivacyPolicyContent sections={aboutUsSections} />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
