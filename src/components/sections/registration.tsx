"use client";

import Link from "next/link";
import React from "react";
import { StarParticles } from "../ui/star-particles";
import { Button } from "../ui/button";

const registrationRoles = [
  {
    id: "publik",
    title: "Publik",
    description:
      "Akses penuh menuju area stadion untuk menikmati seluruh rangkaian eksibisi seni imersif, creative brand market, instalasi teknologi interaktif, hingga panggung konser musik utama.",
    buttons: [
      {
        label: "Regular Pass",
        variant: "outline",
        href: "#",
      },
      {
        label: "3 Days Pass",
        variant: "gradient",
        href: "#",
      },
    ],
  },
  {
    id: "b2b",
    title: "B2B",
    description:
      "Gerbang eksklusif untuk mendaftarkan startup Anda di Pitching Stage, memesan slot di Investor Meeting Room, serta mengakses sesi diskusi strategis bersama para pemimpin industri digital.",
    buttons: [
      {
        label: "Get Space",
        variant: "outline",
        href: "#",
      },
    ],
  },
  {
    id: "umkm",
    title: "Brand & UMKM",
    description:
      "Formulir resmi pendaftaran kurasi tenant kreatif khusus subsektor Fashion, Kriya, dan Kuliner. Tempatkan produk terbaik Anda di hadapan puluhan ribu pengunjung aktif harian.",
    buttons: [
      {
        label: "Get Space",
        variant: "outline",
        href: "#",
      },
    ],
  },
];

export default function RegistrationSection() {
  return (
    <section
      id="registration"
      className="relative w-full overflow-hidden bg-[#111B26] py-24 md:py-32 lg:py-[256px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 z-0 h-[250px] w-[250px] md:h-[800px] md:w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,93,181,0.15)_0%,transparent_65%)] blur-2xl md:blur-[120px]" />

      {/* star ornaments */}
      <StarParticles top={2} left={12} size="medium" glow={true} />
      <StarParticles top={5} right={10} size="large" glow={true} />
      <StarParticles top={8} left={5} size="small" />
      <StarParticles top={12} left={40} size="small" glow={true} />
      <StarParticles top={15} right={25} size="medium" />
      <StarParticles top={18} left={15} size="large" glow={true} />
      <StarParticles top={22} right={5} size="small" glow={true} />

      {/* glow ornaments */}
      <div className="absolute top-0 right-1/4 h-[300px] w-[300px] md:h-[800px] md:w-[800px] translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(227,136,204,0.5)_15%,rgba(227,136,204,0.2)_35%,transparent_60%)] blur-[50px] md:blur-[120px]" />

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-[#F2F2F2] capitalize md:text-base">
            <span>+</span>
            <span>Gerbang Ekosistem</span>
          </div>
          <h2 className="mt-6 text-4xl font-medium tracking-tight text-[#F2F2F2] md:text-5xl lg:text-6xl lg:leading-snug">
            Pilih Peranmu Sekarang
          </h2>
          <p className="mt-6 max-w-[870px] text-sm leading-relaxed text-[#F2F2F2] lg:text-2xl">
            Amankan tiket festival, daftarkan startup-mu ke sesi pitching, atau
            ajukan kurasi brand lokalmu untuk ikut menggerakkan ekosistem
            kreatif tahun ini.
          </p>
        </div>

        {/* Roles Table */}
        <div className="mx-auto mt-20 flex max-w-[1100px] flex-col border-t border-white/10">
          {registrationRoles.map((role) => (
            <div
              key={role.id}
              className="flex flex-col gap-6 border-b border-white/10 pt-6 pb-16 md:flex-row md:items-start md:justify-between"
            >
              {/* Title */}
              <div className="md:w-[25%] lg:w-[20%]">
                <h3 className="text-2xl font-medium text-white lg:text-[32px]">
                  {role.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:w-[50%] lg:w-[55%]">
                <p className="text-sm leading-relaxed text-[#F2F2F2] lg:text-xl">
                  {role.description}
                </p>
              </div>

              {/* Buttons */}
              <div
                className={`w-full md:w-[25%] lg:w-[25%] md:flex md:justify-end gap-4 ${
                  role.buttons.length === 2
                    ? "grid grid-cols-2"
                    : "flex flex-col"
                }`}
              >
                {role.buttons.map((btn, idx) => (
                  <Button
                    key={idx}
                    asChild
                    variant={
                      btn.variant === "gradient"
                        ? "primary-gradient"
                        : undefined
                    }
                    className={`w-full md:w-auto rounded-xl px-6 py-4 text-xs font-semibold transition-all ${
                      btn.variant === "gradient"
                        ? ""
                        : "border border-[#FFBBEC] bg-transparent text-[#FFBBEC] hover:bg-white/10"
                    }`}
                  >
                    <Link href={btn.href} className="w-full text-center">
                      {btn.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
