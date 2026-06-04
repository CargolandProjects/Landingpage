import type { Metadata } from "next";
import Footer from "@/src/components/Footer/Footer";
import PrivacyPolicyContent from "@/src/components/Legal/PrivacyPolicyContent";
import PrivacyPolicyHero from "@/src/components/Legal/PrivacyPolicyHero";
import { termsSections } from "@/src/components/Legal/legalSections";
import DownloadAppSection from "@/src/components/DownloadApp/DownloadAppSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | CargolandFood",
  description:
    "Read the terms and conditions that govern your use of CargolandFood.",
};

export default function TermsPage() {
  return (
    <>
      <PrivacyPolicyHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using CargolandFood."
      />
      <PrivacyPolicyContent sections={termsSections} />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
