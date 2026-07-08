"use client";

import { Plus, Link2, Lightbulb, Target, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";

const pillarIcons = [Link2, Lightbulb, Target, Sparkles];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full py-16 lg:py-32">
      <div className="max-w-8xl mx-auto w-full px-6 lg:px-[72px]">
        {/* Main Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10 lg:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* Left Content */}
            <div className="flex flex-1 flex-col">
              {/* Label */}
              <div className="mb-6 flex items-center gap-2">
                <Plus className="size-4 text-white" />
                <span className="text-sm font-semibold tracking-wider text-white">
                  {t.about.label}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[40px] lg:leading-snug">
                {t.about.title}
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[500px] text-sm leading-relaxed text-white/80 md:text-base">
                {t.about.description}
              </p>

              {/* Pillars */}
              <div className="mt-8 flex flex-wrap gap-3 rounded-xl border border-white/10 p-4 sm:gap-0 sm:divide-x sm:divide-white/10">
                {t.about.pillars.map((pillar, index) => {
                  const Icon = pillarIcons[index];
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 px-4 py-2 text-center sm:flex-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-[11px] leading-tight font-medium text-white/80 md:text-xs">
                        {pillar}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Video/Image Card */}
            <div className="relative flex w-full items-center justify-center lg:w-[45%]">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src="/thumbnail.webp"
                  alt="Festival Mbois 11"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <div className="ml-1 h-0 w-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-white" />
                  </div>
                </div>
                {/* Bottom overlay with branding */}
                <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo_festival_mbois_yellow.svg"
                      alt="Logo"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-semibold text-white">
                      Festival Mbois 11
                    </span>
                  </div>
                  <span className="text-xs font-medium text-white/80">
                    Malang Menyala
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-xl md:px-10 md:py-10">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
            {t.about.stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 sm:flex-1 sm:justify-center sm:px-6"
              >
                <Users className="h-6 w-6 shrink-0 text-white/50" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-white/60 md:text-xs">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
