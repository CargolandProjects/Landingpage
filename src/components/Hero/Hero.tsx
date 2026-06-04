import HeroContent from "./HeroContent";
import HeroDecor from "./HeroDecor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F25C05]">
      {/* Pattern background layer */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: "url('/images/hero-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "2000px 2000px",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24 md:pt-38 md:pb-38">
        <HeroContent />
      </div>

      <HeroDecor />
    </section>
  );
}
