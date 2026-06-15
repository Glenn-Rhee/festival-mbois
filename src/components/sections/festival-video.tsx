"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function FestivalVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full bg-[#111B26]">
      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Video Container Frame */}
        <div className="group relative mx-auto aspect-16/8 w-full rounded-2xl border-[3px] border-[#7baefa] bg-[#161821] p-1.5 shadow-2xl backdrop-blur-sm transition-transform hover:scale-[1.01] md:aspect-1316/633 md:rounded-[36px] md:border-[5px] md:p-3">
          <div className="relative h-full w-full overflow-hidden rounded-[10px] md:rounded-[24px]">
            {!isPlaying ? (
              <div
                className="absolute inset-0 h-full w-full cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/thumbnail.webp"
                    alt="Festival Mbois Video Thumbnail"
                    className="h-full w-full rounded-[10px] md:rounded-[24px] object-cover"
                  />
                </div>

                {/* Foreground Overlay Elements */}
                <div className="absolute inset-0 z-10">
                  {/* Center Play Button - Glassmorphism */}
                  <div className="absolute top-1/2 left-1/2 z-30 flex h-10 w-10 xs:h-12 xs:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 md:h-28 md:w-28 lg:h-32 lg:w-32">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5 h-4 w-4 text-white/90 md:ml-2 md:h-14 md:w-14 lg:h-16 lg:w-16"
                    >
                      <path d="M5.5 3.5v17l14-8.5-14-8.5z" />
                    </svg>
                  </div>

                  {/* Text Overlay Layer */}
                  <div className="absolute top-1/2 right-0 left-0 flex -translate-y-1/2 items-center justify-between px-3 xs:px-4 md:px-12 lg:px-24">
                    {/* Left Side text */}
                    <div className="flex items-center gap-1.5 xs:gap-2 md:gap-4 lg:gap-5">
                      <img
                        src="/logo_festival_mbois.svg"
                        alt="Logo Festival Mbois"
                        className="w-5 h-auto xs:w-6 md:w-16 lg:w-[75px]"
                      />
                      <h2 className="relative z-20 text-[13px] xs:text-base sm:text-lg md:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-none">
                        Festival Mbois 11
                      </h2>
                    </div>

                    {/* Right Side Text */}
                    <div className="relative z-20 ml-auto flex flex-col pl-2 text-left md:pl-0">
                      <span className="text-[9px] xs:text-[10px] sm:text-xs leading-[1.1] font-medium text-white md:text-3xl lg:text-4xl">
                        Malang
                      </span>
                      <span className="text-[9px] xs:text-[10px] sm:text-xs leading-[1.1] font-medium text-white md:text-3xl lg:text-4xl">
                        Menyala
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
                title="Festival Mbois Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
