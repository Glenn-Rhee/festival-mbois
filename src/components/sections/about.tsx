"use client";

import { useState } from "react";
import { StarParticles } from "../ui/star-particles";
import { Plus } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section id="about" className="relative w-full py-16 lg:py-80">
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
            <Plus className="size-4" />
            <span className="font-medium text-white">{t.about.label}</span>
          </div>

          <div className="flex flex-col items-start justify-between lg:flex-row">
            <h2 className="w-full max-w-[560px] text-[32px] leading-normal font-semibold tracking-normal text-wrap text-white md:text-5xl lg:text-[64px]">
              {t.about.title}
            </h2>

            {/* Right Content - Description */}
            <div className="text-neutral-off-white flex w-full max-w-[460px] flex-col justify-center pt-12 text-sm leading-normal md:text-base lg:pt-0 lg:text-lg">
              <div>
                <p>
                  {t.about.description1}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out lg:pointer-events-auto lg:mt-6 lg:max-h-none lg:opacity-100 ${
                    isExpanded
                      ? "mt-6 max-h-[500px] opacity-100"
                      : "pointer-events-none mt-0 max-h-0 opacity-0"
                  }`}
                >
                  <p>
                    {t.about.description2}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-brand-pink-pastel mt-6 flex w-max cursor-pointer items-center gap-1.5 text-xs font-semibold tracking-wider transition-colors hover:text-white focus:outline-none lg:hidden"
              >
                {isExpanded ? t.about.showLess : t.about.showMore}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
