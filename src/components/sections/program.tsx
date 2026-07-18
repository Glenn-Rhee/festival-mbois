"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";

const programImages = [
  "/program_sportainment_v2.webp",
  "/program_sound_of_malang_menyala_v2.webp",
  "/program_malang_city_connect_v2.webp",
  "/program_made_by_arema_market_v2.webp",
  "/program_malang_mediart_experience_v2.webp",
];

export default function ProgramSection() {
  const { t } = useLanguage();

  return (
    <section id="program" className="relative w-full py-24 md:py-32 lg:py-89">
      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-18">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:items-center md:justify-between lg:mb-24 lg:items-end">
          <div className="flex flex-col gap-6">
            <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-wider capitalize">
              <Plus className="hidden size-4 md:block" />
              <span>{t.program.label}</span>
            </div>
            <h2 className="text-neutral-off-white max-w-200 text-2xl font-medium tracking-tight md:text-5xl lg:text-[64px] lg:leading-snug">
              {t.program.title}
            </h2>
          </div>
          <p className="text-neutral-off-white/80 max-w-112.5 pt-5 text-sm leading-relaxed font-normal md:pt-10 md:text-left md:text-base lg:text-2xl">
            {t.program.description}
          </p>
        </div>
        {/* Programs List */}
        <div className="mt-20 flex flex-col gap-20 md:mt-64 lg:gap-32">
          {t.program.items.map((program, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-24"
            >
              {/* Image Container */}
              <div className="bg-brand-navy relative aspect-16/10 w-full overflow-hidden rounded-2xl md:aspect-4/3 md:w-[45%] md:rounded-3xl lg:aspect-16/11 lg:w-[45%]">
                <Image
                  src={programImages[index]}
                  alt={program.title}
                  fill
                  priority={index === 0}
                  className="scale-[1.02] object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Container */}
              <div className="flex w-full flex-col md:w-[55%] md:pt-0 lg:w-[50%]">
                <div className="text-neutral-off-white flex h-8 w-8 items-center justify-center rounded-full border border-white/20 font-medium">
                  {index + 1}
                </div>
                <h3 className="text-neutral-off-white mt-5 text-2xl font-medium tracking-tight md:text-3xl lg:text-[40px]">
                  {program.title}
                </h3>
                <p className="text-neutral-off-white mt-4 max-w-140 text-xs leading-relaxed font-light md:text-sm lg:text-xl lg:leading-8">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
