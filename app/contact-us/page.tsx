import type { Metadata } from "next";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import FAQSection from "@/src/components/Faq/Faq";
import DownloadAppSection from "@/src/components/DownloadApp/DownloadAppSection";
import Footer from "@/src/components/Footer/Footer";
import ContactForm from "@/src/components/Contact/ContactForm";
import { satoshi } from "@/app/fonts";
import { SOCIAL_LINKS } from "@/src/config/links";

export const metadata: Metadata = {
  title: "Contact Us | CargolandFood",
  description:
    "Have questions, feedback, or need support? Our team is ready to help you every step of the way.",
};

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M14.25 3c.39 2.08 1.56 3.4 3.75 3.54v2.6c-1.28.12-2.42-.3-3.47-.95l-.03 5.55c0 3.2-2.3 5.63-5.57 5.63-3.17 0-5.43-2.35-5.43-5.33 0-3.45 2.68-5.72 6.19-5.28v2.7c-1.74-.24-3.46.73-3.46 2.58 0 1.34 1.03 2.5 2.58 2.5 1.5 0 2.45-1.04 2.45-2.57V3h2.99Z" />
    </svg>
  );
}

const socials = [
  {
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    icon: <Facebook className="h-5 w-5" />,
  },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, icon: <TikTokIcon /> },
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: <Instagram className="h-5 w-5" />,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F76600]">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url('/images/hero-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "760px 760px",
          }}
        />

        <div
          className={`relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-16 pt-34 text-center text-white md:pb-20 md:pt-40 ${satoshi.className}`}
        >
          <h1 className="text-[36px] font-extrabold tracking-[-0.03em] md:text-[52px]">
            Contact Us
          </h1>
          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-white/90 md:text-[16px]">
            Have questions, feedback, or need support? Our team is ready to help
            you every step of the way.
          </p>
        </div>
      </section>

      <section className={`bg-white ${satoshi.className}`}>
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="-mt-14 relative z-10 rounded-[22px] border-2 border-[#1F1614] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:-mt-18">
            <div className="grid gap-6 border-b border-[#EEE6E2] px-6 py-7 text-[#1F1614] md:grid-cols-3 md:px-10 md:py-8">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF2E8] text-[#F76600]">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-[#1F1614]">
                    Address
                  </p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#6B625E]">
                    49, Oguntade Road, Salami Bus Stop, Shaha, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF2E8] text-[#F76600]">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-[#1F1614]">
                    Contact
                  </p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#6B625E]">
                    Phone: 0703 279 5341
                  </p>
                  <p className="text-[12.5px] leading-relaxed text-[#6B625E]">
                    Phone: 0816 739 9885
                  </p>
                  <p className="text-[12.5px] leading-relaxed text-[#6B625E]">
                    Email: info@cargolandfood.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF2E8] text-[#F76600]">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-[#1F1614]">
                    Stay Connected
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    {socials.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="grid h-9 w-9 place-items-center rounded-full border border-[#E6E1DE] text-[#1F1614] transition hover:border-[#F76600] hover:text-[#F76600]"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-10 pt-7 md:px-10 md:pb-12 md:pt-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
