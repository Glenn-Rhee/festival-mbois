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
      <div className="absolute size-150 rounded-full bg-[#68114A] blur-[180px]" />
      <div className="absolute top-10 right-0 size-130 rounded-full bg-[#23367A] blur-[150px]" />

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-18">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-medium tracking-tight text-[#F2F2F2] md:text-4xl lg:text-7xl">
            {t.evolution.label}
          </h2>
          <p className="max-w-96 text-lg leading-snug font-semibold text-[#F2F2F2] md:text-right md:text-xl lg:text-[32px]">
            {t.evolution.title}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden mb-12"
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
                className={`relative flex h-64 shrink-0 cursor-pointer md:h-72 lg:h-80 ${
                  isActive ? "opacity-100" : "opacity-60"
                } transition-opacity duration-500`}
              >
                {/* Gambar */}
                <div className="relative w-40 shrink-0 overflow-hidden md:w-48 lg:w-56">
                  <Image
                    src={"/program_sportainment_v2.webp"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Panel */}
                <div className="flex w-56 flex-col justify-center gap-y-2 bg-[#FFEDFA] px-4 py-5 md:w-64 lg:w-72">
                  <span className="text-sm font-semibold text-[#31061B]">
                    {item.year}
                  </span>
                  <h4 className="text-xl leading-tight font-semibold text-[#F61D89] lg:text-2xl">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#31061B]">
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
