import { satoshi } from "@/app/fonts";
import {
  privacyPolicySections,
  type LegalSection,
} from "./legalSections";

export default function PrivacyPolicyContent({
  sections = privacyPolicySections,
}: {
  sections?: LegalSection[];
}) {
  return (
    <section className={`bg-white ${satoshi.className}`}>
      <div className="mx-auto max-w-[980px] px-6 py-10 md:py-14">
        {sections.map((section) => (
          <PolicyBlock key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}

function PolicyBlock({ section }: { section: LegalSection }) {
  return (
    <section className="border-b border-[#EAEAEA] py-7 last:border-b-0 last:pb-0 md:py-8">
      <h2 className="text-[17px] font-extrabold tracking-[0.01em] text-[#111111] md:text-[19px]">
        {section.title}
      </h2>

      <div className="mt-3 space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[12.5px] leading-[1.85] text-[#5C5C5C] md:text-[13.5px]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
