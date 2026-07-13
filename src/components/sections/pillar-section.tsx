"use client";
import Image from "next/image";
import { useState } from "react";
import Dialog from "../ui/Dialog";
import { useLanguage } from "@/i18n/context";

export default function PillarSection() {
  const { t } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<
    (typeof t.pillar.items)[number] | null
  >(null);

  return (
    <section
      id="pillar"
      className="relative w-full overflow-hidden py-14 md:py-18"
    >
      <div className="absolute top-2 -right-70 size-80 rounded-full bg-[#f61d89] blur-[150px]" />
      <div className="flex flex-col items-center gap-y-6 text-[#F2F2F2]">
        <span className="block text-center font-semibold">
          {t.pillar.label}
        </span>
        <h2 className="text-6xl leading-[90.19px] font-medium">
          {t.pillar.title}
        </h2>
        <p className="w-4xl text-center text-2xl text-[#F2F2F2]/80">
          {t.pillar.description}
        </p>
      </div>

      <div className="mt-8 flex w-full flex-wrap justify-center gap-x-6 gap-y-10">
        {t.pillar.items.map((dp) => (
          <div
            role="button"
            key={dp.title}
            onClick={() => setSelectedPillar(dp)}
            className="relative w-full max-w-sm cursor-pointer overflow-hidden rounded-xl border border-white/50 bg-white/5 px-6 py-4 shadow-xl backdrop-blur-md sm:w-[calc(50%-1rem)] lg:w-[calc(30%-1rem)]"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={dp.imgUrl}
                alt={dp.title + " image"}
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 rounded-xl bg-linear-to-b from-[#5693FD]/70 to-[#25CFEF]/70" />
              <div className="absolute inset-0 flex items-center justify-center px-5 py-4 text-center">
                <span className="text-2xl font-extrabold text-[#F2F2F2] drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]">
                  {dp.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog isOpen={!!selectedPillar} onClose={() => setSelectedPillar(null)}>
        {selectedPillar && (
          <div className="relative grid min-h-80 w-full max-w-2xl grid-cols-2 gap-x-8 rounded-xl border border-white bg-[#8d00478c] p-6 opacity-90">
            {" "}
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={"/program_sound_of_malang_menyala_v2.webp"}
                alt={selectedPillar.title + " image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-y-4">
              <div className="flex size-8 items-center justify-center rounded-full border border-white text-lg font-semibold">
                {t.pillar.items.indexOf(selectedPillar) + 1}
              </div>
              <h6 className="w-full text-2xl font-semibold">
                {selectedPillar.title}
              </h6>
              <p className="text-sm text-[#F2F2F2]/80">
                {selectedPillar.description}
              </p>
              <button className="mt-auto w-full rounded-lg border border-[#F61D89] py-2.5 text-xs font-medium transition hover:border-white hover:bg-white hover:text-black">
                {t.pillar.itemAction}
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
