import { satoshi } from "@/app/fonts";

export default function PrivacyPolicyHero({
  title = "Privacy Policy",
  subtitle = "Learn how CargolandFood collects, uses, and protects your personal information.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#F76600]">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/images/hero-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "760px 760px",
        }}
      />

      <div
        className={`relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-12 pt-34 text-center text-white md:pb-14 md:pt-40 ${satoshi.className}`}
      >
        <h1 className="text-[34px] font-extrabold tracking-[-0.03em] md:text-[50px]">
          {title}
        </h1>
        <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-white/90 md:text-[16px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
