"use client";

import { useLanguage } from "@/i18n/context";
import EvolutionTimeline from "../ui/evolution-timeline";
import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export default function EvolutionSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const card = cardRefs.current[active];
    if (!track || !card) return;

    const trackWidth = track.clientWidth;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const desiredOffset = cardCenter - trackWidth / 2;

    setOffset(Math.max(0, desiredOffset));
  }, [active]);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <section
      id="evolution"
      className="bg-brand-aubergine relative w-full overflow-hidden py-14 md:py-18"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B1030] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      </div>
      <div className="absolute rounded-full bg-[#68114A] blur-[180px] md:size-150" />
      <div className="absolute top-10 right-0 size-130 rounded-full bg-[#23367A] blur-[150px]" />

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-18">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="text-3xl font-medium tracking-tight text-[#F2F2F2] md:text-4xl lg:text-7xl">
            {t.evolution.label}
          </h2>
          <p className="text-sm leading-snug font-medium text-[#F2F2F2] md:max-w-96 md:text-right md:text-xl md:font-semibold lg:text-[32px]">
            {t.evolution.title}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        className="relative left-1/2 mb-12 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div
          className="flex gap-8 ps-[50%] transition-transform duration-700 ease-in-out lg:gap-20 lg:ps-[50%]"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {t.evolution.items.map((item, index) => {
            const isActive = index === active;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => setActive(index)}
                className={`relative flex h-48 shrink-0 cursor-pointer md:h-72 lg:h-80 ${
                  isActive ? "opacity-100" : "opacity-60"
                } transition-opacity duration-500`}
              >
                {/* Gambar */}
                <div className="relative w-48 shrink-0 overflow-hidden md:w-56 lg:w-64">
                  <Image
                    src={"/program_sportainment_v2.webp"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Panel */}
                <div className="flex w-48 flex-col justify-center gap-y-2 bg-[#FFEDFA] px-4 py-5 md:w-64 lg:w-72">
                  <span className="text-xs font-semibold text-[#31061B] md:text-sm">
                    {item.year}
                  </span>
                  <h4 className="text-sm leading-tight font-bold text-[#F61D89] md:font-semibold lg:text-2xl">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#31061B] md:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <EvolutionTimeline active={active} onChange={setActive} />
    </section>
  );
}
