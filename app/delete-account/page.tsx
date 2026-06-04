import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Footer from "@/src/components/Footer/Footer";
import PrivacyPolicyHero from "@/src/components/Legal/PrivacyPolicyHero";
import PrivacyPolicyContent from "@/src/components/Legal/PrivacyPolicyContent";
import { deleteAccountSections } from "@/src/components/Legal/legalSections";
import DownloadAppSection from "@/src/components/DownloadApp/DownloadAppSection";
import { satoshi } from "@/app/fonts";
import { CONTACT_EMAIL } from "@/src/config/links";

export const metadata: Metadata = {
  title: "Delete Your Account | CargolandFood",
  description:
    "Learn how to request permanent deletion of your CargolandFood account and associated data.",
};

const steps = [
  {
    title: "Email us from your registered address",
    text: `Send an email to ${CONTACT_EMAIL} using the same email address linked to your CargolandFood account, so we can verify the request.`,
  },
  {
    title: 'Use the subject "Account Deletion Request"',
    text: "A clear subject line helps us route your request to the right team and respond faster.",
  },
  {
    title: "Include your account details",
    text: "Add the full name and phone number registered on your account so we can confirm your identity before deleting any data.",
  },
];

export default function DeleteAccountPage() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Account Deletion Request"
  )}&body=${encodeURIComponent(
    "Hello CargolandFood team,\n\nI would like to permanently delete my CargolandFood account and all associated data.\n\nRegistered name:\nRegistered phone number:\nRegistered email:\n\nThank you."
  )}`;

  return (
    <>
      <PrivacyPolicyHero
        title="Delete Your Account"
        subtitle="Want to permanently delete your CargolandFood account and data? Here's how to request it."
      />

      {/* HOW TO REQUEST — steps + email CTA */}
      <section className={`bg-white ${satoshi.className}`}>
        <div className="mx-auto max-w-[980px] px-6 pt-10 md:pt-14">
          <h2 className="text-[20px] font-extrabold text-[#111111] md:text-[24px]">
            How to request account deletion
          </h2>
          <p className="mt-3 text-[13px] leading-[1.85] text-[#5C5C5C] md:text-[14.5px]">
            CargolandFood accounts are deleted on request through our support
            email. Follow the steps below and our team will take care of the
            rest.
          </p>

          {/* Steps */}
          <ol className="mt-8 space-y-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-[#EEE6E2] bg-[#FAFAFA] p-5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F25C05] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-[#1F1614]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.7] text-[#5C5C5C]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Email CTA card */}
          <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-[#2D2020] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F25C05]">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-[15px] font-bold">Send your request</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 block text-[14px] text-[#F1E7E1] underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <a
              href={mailto}
              className="inline-flex items-center gap-2 rounded-full bg-[#F25C05] px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-[#d94e00]"
            >
              <Mail size={16} />
              Email us to delete my account
            </a>
          </div>
        </div>
      </section>

      <PrivacyPolicyContent sections={deleteAccountSections} />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
