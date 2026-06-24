"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Placeholder data for logos. Replace with actual paths when available.
const governmentLogos = [
  { name: "Delegation", src: "/logo_partner_1.svg" },
  { name: "KBRI", src: "/logo_partner_2.svg" },
  { name: "Kemenkop", src: "/logo_partner_3.svg" },
  { name: "Komdigi", src: "/logo_partner_4.svg" },
  { name: "Ekraf", src: "/logo_partner_5.svg" },
  { name: "Kementrian HAM", src: "/logo_partner_6.svg" },
  { name: "Dinas Jatim", src: "/logo_partner_7.svg" },
  { name: "Kominfo Jatim", src: "/logo_partner_8.svg" },
];

const privateLogos = [
  { name: "BNI", src: "/logo_partner_9.svg" },
  { name: "IndiHome", src: "/logo_partner_10.svg" },
  { name: "Xpora", src: "/logo_partner_11.svg" },
  { name: "PLN", src: "/logo_partner_12.svg" },
  { name: "J99 Corp", src: "/logo_partner_13.svg" },
  { name: "GoTo", src: "/logo_partner_14.svg" },
];

export default function PartnersSection() {
  const [activeLogos, setActiveLogos] = useState<string[]>([]);

  const toggleLogo = (name: string) => {
    setActiveLogos((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  const isLogoActive = (name: string) => activeLogos.includes(name);

  return (
    <section
      id="partners"
      className="relative w-full bg-transparent pb-24 md:pb-0"
    >
      {/* Background Glow */}
      <div className="absolute -top-1/3 left-0 h-[300px] w-[300px] translate-x-[-30%] translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(208,84,127,0.5)_35%,rgba(208,84,127,0.2)_30%,transparent_30%)] blur-[50px] md:h-[1000px] md:w-[1000px] md:blur-[150px]" />

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-widest capitalize">
            <Plus className="size-4" />
            <span>Sponsors & Partners</span>
          </div>
          <h2 className="text-neutral-off-white mt-6 text-3xl font-medium tracking-tight md:text-5xl lg:text-[64px] lg:leading-snug">
            Aliansi Strategis Penggerak <br className="hidden sm:block" />{" "}
            Ekosistem
          </h2>
          <p className="text-neutral-off-white mt-6 w-full max-w-[850px] text-sm leading-relaxed lg:text-2xl">
            Sinergi kolaboratif multi-stakeholder antara jajaran kementerian,
            pemerintah daerah, Badan Usaha Milik Negara (BUMN), dan sektor
            swasta dalam mengawal peta jalan ekonomi kreatif Indonesia.
          </p>
        </div>

        {/* Instansi Pemerintah */}
        <div className="mt-24 w-full">
          {/* Separator Title */}
          <div className="flex items-center justify-center gap-4">
            <div className="hidden h-px w-full max-w-[150px] bg-linear-to-r from-transparent to-white/20 md:block md:max-w-[300px]"></div>
            <h3 className="text-neutral-off-white text-base font-semibold tracking-wider whitespace-nowrap md:text-sm md:text-white/60">
              Instansi Pemerintah & Kementerian
            </h3>
            <div className="hidden h-px w-full bg-linear-to-l from-transparent to-white/20 md:block md:max-w-[300px]"></div>
          </div>

          {/* Desktop view */}
          <div className="mt-12 hidden flex-wrap items-center justify-center gap-8 md:flex md:gap-16">
            {governmentLogos.map((logo, index) => {
              const active = isLogoActive(logo.name);
              return (
                <div
                  key={`gov-${index}`}
                  onClick={() => toggleLogo(logo.name)}
                  className={`relative flex h-16 w-32 cursor-pointer items-center justify-center transition-all duration-300 ${
                    active ? "grayscale-0" : "grayscale hover:grayscale-0"
                  } md:h-20 md:w-40`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain opacity-90 hover:opacity-100"
                    sizes="(max-width: 768px) 128px, 140px"
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile view (Row-by-row layout matching mockup) */}
          <div className="mt-12 flex flex-col items-center gap-8 md:hidden">
            {/* Row 1: 2 logos */}
            <div className="flex items-center justify-center gap-8">
              {governmentLogos.slice(0, 2).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`gov-mob-r1-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className={`relative flex h-14 w-28 cursor-pointer items-center justify-center transition-all duration-300 ${
                      active ? "grayscale-0" : "grayscale"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain opacity-95"
                      sizes="112px"
                    />
                  </div>
                );
              })}
            </div>

            {/* Row 2: 3 logos */}
            <div className="flex items-center justify-center gap-4">
              {governmentLogos.slice(2, 5).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`gov-mob-r2-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className={`relative flex h-12 w-24 cursor-pointer items-center justify-center transition-all duration-300 ${
                      active ? "grayscale-0" : "grayscale"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain opacity-95"
                      sizes="96px"
                    />
                  </div>
                );
              })}
            </div>

            {/* Row 3: 3 logos */}
            <div className="flex items-center justify-center gap-4">
              {governmentLogos.slice(5, 8).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`gov-mob-r3-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className={`relative flex h-12 w-24 cursor-pointer items-center justify-center transition-all duration-300 ${
                      active ? "grayscale-0" : "grayscale"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain opacity-95"
                      sizes="96px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sektor Swasta */}
        <div className="mt-20 w-full">
          {/* Separator Title */}
          <div className="flex items-center justify-center gap-4">
            <div className="hidden h-px w-full max-w-[150px] bg-linear-to-r from-transparent to-white/20 md:block md:max-w-[300px]"></div>
            <h3 className="text-neutral-off-white text-base font-semibold tracking-wider whitespace-nowrap md:text-sm md:text-white/60">
              Sektor Swasta & Mitra Bisnis
            </h3>
            <div className="hidden h-px w-full max-w-[150px] bg-linear-to-l from-transparent to-white/20 md:block md:max-w-[300px]"></div>
          </div>

          {/* Desktop view */}
          <div className="mx-auto mt-12 hidden max-w-[1000px] flex-wrap items-center justify-center gap-8 md:flex md:gap-16">
            {privateLogos.map((logo, index) => {
              const active = isLogoActive(logo.name);
              return (
                <div
                  key={`priv-${index}`}
                  onClick={() => toggleLogo(logo.name)}
                  className={`relative flex h-16 w-32 cursor-pointer items-center justify-center transition-all duration-300 ${
                    active ? "grayscale-0" : "grayscale hover:grayscale-0"
                  } md:h-20 md:w-40`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain opacity-70 hover:opacity-100"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile view (Row-by-row layout matching mockup) */}
          <div className="mt-12 flex flex-col items-center gap-8 md:hidden">
            {/* Row 1: 2 logos */}
            <div className="flex items-center justify-center gap-8">
              {privateLogos.slice(0, 2).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`priv-mob-r1-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className={`relative flex h-14 w-28 cursor-pointer items-center justify-center transition-all duration-300 ${
                      active ? "grayscale-0" : "grayscale"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain opacity-80"
                      sizes="112px"
                    />
                  </div>
                );
              })}
            </div>

            {/* Row 2: 3 logos */}
            <div className="flex items-center justify-center gap-4">
              {privateLogos.slice(2, 5).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`priv-mob-r2-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className={`relative flex h-12 w-24 cursor-pointer items-center justify-center transition-all duration-300 ${
                      active ? "grayscale-0" : "grayscale"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain opacity-85"
                      sizes="96px"
                    />
                  </div>
                );
              })}
            </div>

            {/* Row 3: 1 logo */}
            <div className="flex items-center justify-center">
              {privateLogos.slice(5, 6).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`priv-mob-r3-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className={`relative flex h-14 w-28 cursor-pointer items-center justify-center transition-all duration-300 ${
                      active ? "grayscale-0" : "grayscale"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain opacity-80"
                      sizes="112px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
