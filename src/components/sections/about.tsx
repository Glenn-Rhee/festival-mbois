"use client";

import { useState } from "react";
import { StarParticles } from "../ui/star-particles";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <section id="about" className="relative w-full py-16 lg:py-[356px]">
        <StarParticles top={0} right={5} size="small" />
        <StarParticles top={5} right={15} size="medium" />
        <StarParticles top={10} right={30} size="medium" glow={true} />
        <StarParticles top={10} left={18} size="large" />
        <StarParticles top={8} left={28} size="large" glow={true} />
        <StarParticles top={0} left={8} size="large" />
        <StarParticles top={3} left={18} size="large" glow={true} />
        <StarParticles top={3} left={8} size="large" glow={true} />
        <StarParticles top={12} left={12} size="small" />
        <div className="max-w-8xl mx-auto w-full flex-col px-6 lg:flex-row lg:px-28">
          {/* Left Content - Title */}
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-white">+</span>
            <span className="text-xs md:text-sm font-medium text-white">Tentang Kami</span>
          </div>

          <div className="flex flex-col items-start justify-between lg:flex-row">
            <h2 className="max-w-[560px] text-2xl leading-normal font-semibold tracking-normal text-wrap text-white md:text-5xl lg:text-[64px]">
              Lebih dari Sekadar Hub, Ini Perjalanan Menembus Batas.
            </h2>

            {/* Right Content - Description */}
            <div className="flex w-full max-w-[460px] flex-col justify-center pt-12 text-sm leading-normal text-[#F2F2F2] md:text-base lg:pt-0 lg:text-lg">
              <div>
                <p>
                  Festival Mbois adalah perayaan tahunan ekosistem kreatif Kota
                  Malang yang menyatukan kolaborasi hexahelix yaitu komunitas,
                  industri, akademisi, pemerintah, media, dan agregator.
                  Bergerak dengan semangat &quot;Dari komunitas untuk
                  kota,&quot; festival ini menghubungkan ide, budaya, dan
                  teknologi menjadi dampak nyata.
                </p>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out lg:pointer-events-auto lg:mt-6 lg:max-h-none lg:opacity-100 ${
                    isExpanded
                      ? "mt-6 max-h-[500px] opacity-100"
                      : "pointer-events-none mt-0 max-h-0 opacity-0"
                  }`}
                >
                  <p>
                    Memasuki edisi ke-11, Festival Mbois bertransformasi menjadi
                    Creative Impact Platform skala nasional. Merayakan status
                    Malang sebagai bagian dari UNESCO Creative Cities Network
                    untuk Media Arts, kami menyulap 100 tahun sejarah Stadion
                    Gajayana menjadi ruang agregasi inovasi masa depan.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 flex w-max cursor-pointer items-center gap-1.5 text-xs font-semibold tracking-wider text-[#FFBAEB] transition-colors hover:text-white focus:outline-none lg:hidden"
              >
                {isExpanded ? "Sembunyikan" : "Selengkapnya..."}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
