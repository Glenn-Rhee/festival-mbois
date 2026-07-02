"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { useLanguage } from "@/i18n/context";

// Placeholder data for logos. Replace with actual paths when available.
const governmentLogos = [
  { name: "Delegation", src: "/logo_partner_1.svg", srcWhite: "/logo_partner_1_white.svg" },
  { name: "KBRI", src: "/logo_partner_2.svg", srcWhite: "/logo_partner_2_white.svg" },
  { name: "Kemenkop", src: "/logo_partner_3.svg", srcWhite: "/logo_partner_3_white.svg" },
  { name: "Komdigi", src: "/logo_partner_4.svg", srcWhite: "/logo_partner_4_white.svg" },
  { name: "Ekraf", src: "/logo_partner_5.svg", srcWhite: "/logo_partner_5_white.svg" },
  { name: "Kementrian HAM", src: "/logo_partner_6.svg", srcWhite: "/logo_partner_6_white.svg" },
  { name: "Dinas Jatim", src: "/logo_partner_7.svg", srcWhite: "/logo_partner_7_white.svg" },
  { name: "Kominfo Jatim", src: "/logo_partner_8.svg", srcWhite: "/logo_partner_8_white.svg" },
];

const privateLogos = [
  { name: "BRI", src: "/logo_partner_9.svg", srcWhite: "/logo_partner_9_white.svg" },
  { name: "Amazing", src: "/logo_partner_15.svg", srcWhite: "/logo_partner_15_white.svg" },
  { name: "Malang Apparel", src: "/logo_partner_16.svg", srcWhite: "/logo_partner_16_white.svg" },
  { name: "Sejuta Kopi", src: "/logo_partner_17.svg", srcWhite: "/logo_partner_17_white.svg" },
  { name: "IndiHome", src: "/logo_partner_10.svg", srcWhite: "/logo_partner_10_white.svg" },
  { name: "Xpora", src: "/logo_partner_11.svg", srcWhite: "/logo_partner_11_white.svg" },
  { name: "PLN", src: "/logo_partner_12.svg", srcWhite: "/logo_partner_12_white.svg" },
  { name: "J99 Corp", src: "/logo_partner_13.svg", srcWhite: "/logo_partner_13_white.svg" },
  { name: "GoTo", src: "/logo_partner_14.svg", srcWhite: "/logo_partner_14_white.svg" },
];

export default function PartnersSection() {
  const [activeLogos, setActiveLogos] = useState<string[]>([]);
  const { t } = useLanguage();

  const toggleLogo = (name: string) => {
    setActiveLogos((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  const isLogoActive = (name: string) => activeLogos.includes(name);

  return (
    <section id="partners" className="relative w-full pb-24 md:pb-0">
      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-widest capitalize">
            <Plus className="size-4" />
            <span>{t.partners.label}</span>
          </div>
          <h2 className="text-neutral-off-white mt-6 text-3xl font-medium tracking-tight md:text-5xl lg:text-[64px] lg:leading-snug">
            {t.partners.title}
          </h2>
          <p className="text-neutral-off-white mt-6 w-full max-w-[850px] text-sm leading-relaxed lg:text-2xl">
            {t.partners.description}
          </p>
        </div>

        {/* Instansi Pemerintah */}
        <div className="mt-24 w-full">
          {/* Separator Title */}
          <div className="flex items-center justify-center gap-4">
            <div className="hidden h-px w-full max-w-[150px] bg-linear-to-r from-transparent to-white/20 md:block md:max-w-[300px]"></div>
            <h3 className="text-neutral-off-white text-base font-semibold tracking-wider whitespace-nowrap md:text-sm md:text-white/60">
              {t.partners.governmentTitle}
            </h3>
            <div className="hidden h-px w-full bg-linear-to-l from-transparent to-white/20 md:block md:max-w-[300px]"></div>
          </div>

          {/* Desktop view - 7 logos in first row, 1 in second */}
          <div className="mt-12 hidden flex-col items-center gap-10 md:flex">
            <div className="flex flex-wrap items-center justify-center gap-10">
              {governmentLogos.slice(0, 7).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`gov-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className="group relative flex h-20 w-32 cursor-pointer items-center justify-center"
                  >
                    {/* White version (default) */}
                    <Image
                      src={logo.srcWhite}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-0" : "opacity-90 group-hover:opacity-0"
                      }`}
                      sizes="96px"
                    />
                    {/* Color version (active/hover) */}
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      sizes="96px"
                    />
                  </div>
                );
              })}
            </div>
            {governmentLogos.length > 7 && (
              <div className="flex items-center justify-center">
                {governmentLogos.slice(7).map((logo, index) => {
                  const active = isLogoActive(logo.name);
                  return (
                    <div
                      key={`gov-row2-${index}`}
                      onClick={() => toggleLogo(logo.name)}
                      className="group relative flex h-20 w-32 cursor-pointer items-center justify-center"
                    >
                      <Image
                        src={logo.srcWhite}
                        alt={logo.name}
                        fill
                        className={`object-contain transition-opacity duration-300 ${
                          active ? "opacity-0" : "opacity-90 group-hover:opacity-0"
                        }`}
                        sizes="96px"
                      />
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className={`object-contain transition-opacity duration-300 ${
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        sizes="96px"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile view */}
          <div className="mt-12 flex flex-col items-center gap-8 md:hidden">
            {/* Row 1: 3 logos */}
            <div className="flex items-center justify-center gap-6">
              {governmentLogos.slice(0, 3).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`gov-mob-r1-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className="relative flex h-12 w-20 cursor-pointer items-center justify-center"
                  >
                    <Image
                      src={logo.srcWhite}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-0" : "opacity-90"
                      }`}
                      sizes="80px"
                    />
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="80px"
                    />
                  </div>
                );
              })}
            </div>
            {/* Row 2: 3 logos */}
            <div className="flex items-center justify-center gap-6">
              {governmentLogos.slice(3, 6).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`gov-mob-r2-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className="relative flex h-12 w-20 cursor-pointer items-center justify-center"
                  >
                    <Image
                      src={logo.srcWhite}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-0" : "opacity-90"
                      }`}
                      sizes="80px"
                    />
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="80px"
                    />
                  </div>
                );
              })}
            </div>
            {/* Row 3: 2 logos */}
            <div className="flex items-center justify-center gap-6">
              {governmentLogos.slice(6).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`gov-mob-r3-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className="relative flex h-12 w-20 cursor-pointer items-center justify-center"
                  >
                    <Image
                      src={logo.srcWhite}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-0" : "opacity-90"
                      }`}
                      sizes="80px"
                    />
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="80px"
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
              {t.partners.privateTitle}
            </h3>
            <div className="hidden h-px w-full max-w-[150px] bg-linear-to-l from-transparent to-white/20 md:block md:max-w-[300px]"></div>
          </div>

          {/* Desktop view - all 6 logos in one row */}
          <div className="mx-auto mt-12 hidden max-w-[900px] items-center justify-center gap-10 md:flex">
            {privateLogos.map((logo, index) => {
              const active = isLogoActive(logo.name);
              return (
                <div
                  key={`priv-${index}`}
                  onClick={() => toggleLogo(logo.name)}
                  className="group relative flex h-16 w-28 cursor-pointer items-center justify-center"
                >
                  <Image
                    src={logo.srcWhite}
                    alt={logo.name}
                    fill
                    className={`object-contain transition-opacity duration-300 ${
                      active ? "opacity-0" : "opacity-85 group-hover:opacity-0"
                    }`}
                    sizes="96px"
                  />
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className={`object-contain transition-opacity duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    sizes="96px"
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile view */}
          <div className="mt-12 flex flex-col items-center gap-8 md:hidden">
            {/* Row 1: 3 logos */}
            <div className="flex items-center justify-center gap-6">
              {privateLogos.slice(0, 3).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`priv-mob-r1-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className="relative flex h-10 w-20 cursor-pointer items-center justify-center"
                  >
                    <Image
                      src={logo.srcWhite}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-0" : "opacity-85"
                      }`}
                      sizes="80px"
                    />
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="80px"
                    />
                  </div>
                );
              })}
            </div>
            {/* Row 2: 3 logos */}
            <div className="flex items-center justify-center gap-6">
              {privateLogos.slice(3, 6).map((logo, index) => {
                const active = isLogoActive(logo.name);
                return (
                  <div
                    key={`priv-mob-r2-${index}`}
                    onClick={() => toggleLogo(logo.name)}
                    className="relative flex h-10 w-20 cursor-pointer items-center justify-center"
                  >
                    <Image
                      src={logo.srcWhite}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-0" : "opacity-85"
                      }`}
                      sizes="80px"
                    />
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="80px"
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
