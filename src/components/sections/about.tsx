"use client";

import { Plus, PlayIcon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";
import LinkIcon from "../icon/LinkIcon";
import UserIcon from "../icon/UserIcon";
import Idea from "../icon/Idea";
import Creative from "../icon/Creative";
import User from "../icon/User";

const pillarIcons = [LinkIcon, UserIcon, Idea, Creative];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full py-16 lg:py-32">
      <div className="max-w-8xl mx-auto w-full px-6 lg:px-18">
        {/* Main Card */}
        <div className="rounded-2xl border border-white bg-[#EEEEEE14] p-6 backdrop-blur-xl md:p-10 lg:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* Left Content */}
            <div className="flex flex-1 flex-col">
              {/* Label */}
              <div className="mb-6 flex items-center gap-2">
                <Plus className="size-4 text-white" />
                <span className="font-semibold tracking-wider text-[#F2F2F2]">
                  {t.about.label}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[40px] lg:leading-snug">
                {t.about.title}
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-150 text-sm leading-relaxed text-[#F2F2F2] md:text-base">
                {t.about.description}
              </p>

              {/* Pillars */}
              <div className="mt-8 flex flex-wrap gap-3 rounded-xl border border-white p-4 sm:gap-0 sm:divide-x sm:divide-white">
                {t.about.pillars.map((pillar, index) => {
                  const Icon = pillarIcons[index];
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 px-4 py-2 text-center sm:flex-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                        <Icon />
                      </div>
                      <span className="text-center text-[12px] leading-tight font-medium text-[#FFEAED] md:text-xs lg:max-w-30">
                        {pillar}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Video/Image Card */}
            <div className="relative flex w-full items-center justify-center lg:w-[45%]">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#7BAEFA]">
                <Image
                  src="/thumbnail.webp"
                  alt="Festival Mbois 11"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {/* Play button overlay */}
                <div className="bg-brand-blue-dark/60 absolute inset-0 flex items-center justify-center">
                  <div className="flex size-25 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <PlayIcon className="size-8" fill="white" />
                  </div>
                </div>
                {/* Bottom overlay with branding */}
                <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between px-12 py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/img-about.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                    <span className="text-2xl font-semibold text-white md:text-3xl">
                      Festival Mbois 11
                    </span>
                  </div>
                  <span className="max-w-10 font-medium text-white">
                    Malang Menyala
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-8 rounded-2xl border border-white bg-[#EEEEEE14] px-6 py-8 backdrop-blur-xl md:px-10 md:py-10">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-0">
            {t.about.stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-4 sm:flex-1 sm:justify-center sm:px-6"
              >
                <User />
                <div className="flex flex-col">
                  <span className="text-xl font-semibold tracking-tight text-[#FDFDFD] md:text-2xl lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text[#FDFDFD] md:text-sm">
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
