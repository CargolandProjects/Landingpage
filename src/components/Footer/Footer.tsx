import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { satoshi } from "@/app/fonts";
import { SOCIAL_LINKS, WEB_APP_URL } from "@/src/config/links";

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-current"
    >
      <path d="M14.25 3c.39 2.08 1.56 3.4 3.75 3.54v2.6c-1.28.12-2.42-.3-3.47-.95l-.03 5.55c0 3.2-2.3 5.63-5.57 5.63-3.17 0-5.43-2.35-5.43-5.33 0-3.45 2.68-5.72 6.19-5.28v2.7c-1.74-.24-3.46.73-3.46 2.58 0 1.34 1.03 2.5 2.58 2.5 1.5 0 2.45-1.04 2.45-2.57V3h2.99Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    icon: <Facebook className="h-6 w-6 fill-current" strokeWidth={2.2} />,
  },
  {
    label: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    icon: <TikTokIcon />,
  },
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: <Instagram className="h-6 w-6" strokeWidth={2.2} />,
  },
];

const supportLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms and condition", href: "/terms" },
  { label: "Delete account", href: "/delete-account" },
];

const quickLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className={`bg-[#2D2020] text-[#F6EDE8] ${satoshi.className}`}>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid gap-y-12 gap-x-8 lg:grid-cols-[1.5fr_0.65fr_0.55fr_0.9fr]">
          <div className="max-w-[440px]">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Cargoland Food"
                width={194}
                height={56}
                priority
                className="h-auto w-[164px] md:w-[194px]"
              />
            </Link>

            <p className="mt-8 max-w-[430px] text-[15px] leading-[1.65] text-[#F1E7E1] sm:text-[16px] md:text-[18px]">
              CargolandFood is a complete package it&apos;s time to empower your
              oline food business with powerful features!
            </p>

            <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/35 md:h-[52px] md:w-[52px]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/images/store/google-play.png"
                  alt="Get it on Google Play"
                  width={170}
                  height={50}
                  className="h-auto w-[148px] md:w-[170px]"
                />
              </a>

              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/images/store/app-store.png"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-auto w-[134px] md:w-[150px]"
                />
              </a>
            </div>
          </div>

          <FooterColumn title="Support">
            {supportLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] leading-[1.65] text-[#F1E7E1] transition hover:text-white sm:text-[16px] md:text-[18px]"
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Quick Link">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] leading-[1.65] text-[#F1E7E1] transition hover:text-white sm:text-[16px] md:text-[18px]"
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact Us">
            <a
              href="https://maps.google.com/?q=49+Oguntade+Road,+Salami+Bus+Stop,+Shaha,+Lagos,+Nigeria"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] leading-[1.6] text-[#F1E7E1] underline underline-offset-4 decoration-1 sm:text-[16px] md:text-[18px]"
            >
              49, Oguntade Road, Salami Bus Stop,
              <br />
              Shaha, Lagos, Nigeria
            </a>

            <a
              href="mailto:info@cargolandfood.com"
              className="text-[15px] leading-[1.6] text-[#F1E7E1] transition hover:text-white sm:text-[16px] md:text-[18px]"
            >
              info@cargolandfood.com
            </a>

            <a
              href="tel:+2347032795341"
              className="text-[15px] leading-[1.6] text-[#F1E7E1] transition hover:text-white sm:text-[16px] md:text-[18px]"
            >
              0703 279 5341
            </a>

            <a
              href="tel:+2348167399885"
              className="text-[15px] leading-[1.6] text-[#F1E7E1] transition hover:text-white sm:text-[16px] md:text-[18px]"
            >
              0816 739 9885
            </a>
          </FooterColumn>
        </div>

        <p className="mt-14 text-center text-sm leading-normal text-[#F1E7E1] md:mt-16 md:text-base">
          2025. All rights reserved. By Cargolandfood
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-1">
      <h3 className="text-lg font-bold text-[#FBF3EE] md:text-[18px]">
        {title}
      </h3>

      <div className="mt-8 flex flex-col gap-8">{children}</div>
    </div>
  );
}
