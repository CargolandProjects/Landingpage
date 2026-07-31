import Image from "next/image";
import { satoshi } from "@/app/fonts";
import StoreBadges from "@/src/components/StoreBadges/StoreBadges";

export default function PrivacyDownloadCard() {
  return (
    <section className={`bg-white px-6 pb-14 pt-10 md:pb-16 ${satoshi.className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[18px] bg-[#342624] px-5 py-6 text-white md:min-h-[255px] md:px-12 md:py-10">
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="relative z-10 grid items-end gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-[360px] pt-1">
              <h2 className="text-[28px] font-extrabold leading-[1.05] tracking-[-0.03em]">
                Download the App for More Delicious Experiences
              </h2>

              <p className="mt-4 text-[14px] leading-[1.7] text-white/80">
                Get instant access to top restaurants, easy ordering, fast
                delivery, and a smooth experience designed to satisfy cravings
                anytime.
              </p>

              <StoreBadges
                className="mt-6 gap-3"
                play={{ width: 138, height: 41, className: "h-auto w-[138px]" }}
                apple={{ width: 122, height: 41, className: "h-auto w-[122px]" }}
              />
            </div>

            <div className="relative flex justify-center md:justify-end">
              <Image
                src="/images/phone-vendor.png"
                alt="CargolandFood app preview"
                width={245}
                height={455}
                className="h-auto w-[190px] translate-y-4 md:w-[245px] md:translate-y-12"
              />

              <Image
                src="/images/icons/rating.png"
                alt=""
                width={28}
                height={28}
                className="absolute right-7 top-0 md:right-8 md:top-1"
              />

              <Image
                src="/images/icons/food-1.png"
                alt=""
                width={28}
                height={28}
                className="absolute right-1 top-7 md:right-0 md:top-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
