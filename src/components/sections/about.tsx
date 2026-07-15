"use client";

import { Plus, PlayIcon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";
import LinkIcon from "../icon/LinkIcon";
import UserIcon from "../icon/UserIcon";
import Idea from "../icon/Idea";
import Creative from "../icon/Creative";
import User from "../icon/User";
import { StarParticles } from "../ui/star-particles";
import { useState } from "react";

const pillarIcons = [LinkIcon, UserIcon, Idea, Creative];
const YOUTUBE_VIDEO_ID = "Cw3eAvi8pn4";

export default function AboutSection() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section id="about" className="relative w-full py-16 lg:py-32">
      <div className="max-w-8xl relative z-20 mx-auto w-full px-6 lg:px-18">
        {/* Main Card */}
        <div className="rounded-2xl border border-white bg-[#EEEEEE14] p-6 backdrop-blur-xl md:p-10 lg:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* Left Content */}
            <div className="flex flex-1 flex-col justify-between">
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
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#7BAEFA] p-3">
                {isPlaying ? (
                  <iframe
                    className="h-full w-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&si=i0FnwmiIITIzK0Lk`}
                    title="Festival Mbois 11"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src="/thumbnail.webp"
                      alt="Festival Mbois 11"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    {/* Play button overlay */}
                    <div className="bg-brand-blue-dark/80 absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="flex size-25 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                      >
                        <PlayIcon className="size-8" fill="white" />
                      </button>
                    </div>
                    {/* Bottom overlay with branding */}
                    <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between px-4 pb-3 pt-12 sm:px-8 sm:pb-4 md:px-12">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/img-about.png"
                          alt="Logo"
                          width={40}
                          height={40}
                          className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                        />
                        <span className="text-sm font-semibold leading-tight text-white sm:text-lg md:text-2xl lg:text-[30px]">
                          Festival Mbois 11
                        </span>
                      </div>
                      <span className="max-w-12 text-right text-[10px] font-medium text-white sm:text-xs md:max-w-none md:text-sm">
                        Malang Menyala
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-8 overflow-x-auto rounded-2xl border border-white bg-[#EEEEEE14] px-4 py-6 backdrop-blur-xl sm:px-6 sm:py-8 md:px-10 md:py-10">
          <div className="flex min-w-max items-center justify-between gap-4 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-6">
            {t.about.stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-2 sm:flex-1 sm:justify-center sm:gap-4 sm:px-4"
              >
                <User className="shrink-0" />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold tracking-tight text-[#FDFDFD] sm:text-xl md:text-2xl lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-[#FDFDFD] sm:text-xs md:text-sm">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-13 -left-20 size-100 rounded-full bg-[#2ec4f298] blur-[200px]" />
      {/* Kiri */}
      <StarParticles bottom={10} left={20} glow size="large" />
      <StarParticles bottom={20} left={2} glow size="medium" />
      <StarParticles bottom={5} left={8} size="small" />
      <StarParticles bottom={15} left={35} size="small" />
      <StarParticles bottom={25} left={45} glow size="medium" />
      {/* Tengah */}
      <StarParticles bottom={8} left={55} size="small" />
      <StarParticles bottom={18} left={62} glow size="large" />
      <StarParticles bottom={3} left={70} size="small" />
      <StarParticles bottom={22} left={78} size="medium" />
      {/* Kanan */}
      <StarParticles bottom={12} left={85} glow size="medium" />
      <StarParticles bottom={6} left={92} size="small" />
      <StarParticles bottom={28} left={95} glow size="large" />{" "}
    </section>
  );
}
