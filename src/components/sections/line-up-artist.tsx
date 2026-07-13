"use client";
import { useLanguage } from "@/i18n/context";
import { StarParticles } from "../ui/star-particles";
import LineupCarousel from "../ui/LineUpCarousel";

export default function LineUpArtist() {
  const { t } = useLanguage();
  return (
    <section
      id="line-up-artist"
      className="relative w-full overflow-hidden py-14 md:py-18"
    >
      <div className="relative z-20 flex flex-col items-center gap-y-6 text-[#F2F2F2]">
        <span className="block text-center font-semibold">
          {t.lineupArtist.label}
        </span>
        <h2 className="text-3xl leading-tight font-medium sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[90.19px]">
          {t.lineupArtist.title}
        </h2>
        <p className="w-full max-w-xl text-center text-base text-[#F2F2F2]/80 sm:text-lg md:max-w-3xl md:text-2xl lg:max-w-4xl">
          {t.lineupArtist.description}
        </p>
      </div>

      <LineupCarousel lineupArtist={t.lineupArtist.items} />

      <div className="relative z-20 mx-auto mt-8 w-full max-w-md text-center text-lg text-[#FDFDFD] md:max-w-4xl md:text-xl lg:max-w-6xl">
        {t.lineupArtist.subItems.map((si, i) => (
          <span key={si + i}>
            {si} {i === t.lineupArtist.subItems.length - 1 ? "" : "• "}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-48">
        <StarParticles bottom={10} left={20} glow size="large" />
        <StarParticles bottom={20} left={2} glow size="medium" />
        <StarParticles bottom={5} left={8} size="small" />
        <StarParticles bottom={15} left={35} size="small" />
        <StarParticles bottom={25} left={45} glow size="medium" />
        <StarParticles bottom={8} left={55} size="small" />
        <StarParticles bottom={18} left={62} glow size="large" />
        <StarParticles bottom={3} left={70} size="small" />
        <StarParticles bottom={22} left={78} size="medium" />
        <StarParticles bottom={12} left={85} glow size="medium" />
        <StarParticles bottom={6} left={92} size="small" />
        <StarParticles bottom={28} left={95} glow size="large" />
      </div>
    </section>
  );
}
