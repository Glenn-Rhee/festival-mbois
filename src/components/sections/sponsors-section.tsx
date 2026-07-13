"use client";

import { useLanguage } from "@/i18n/context";
import Image from "next/image";

export default function SponsorsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="sponsor"
      className="relative w-full overflow-hidden px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-18"
    >
      <div className="relative z-20 flex flex-col items-center gap-y-4 text-[#F2F2F2] sm:gap-y-6">
        <span className="block text-center text-sm font-semibold sm:text-base">
          {t.sponsors.label}
        </span>
        <h2 className="text-2xl leading-tight font-medium sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[90.19px]">
          {t.sponsors.title}
        </h2>
        <p className="w-full max-w-xl text-center text-sm text-[#F2F2F2]/80 sm:text-lg md:max-w-3xl md:text-2xl lg:max-w-4xl">
          {t.sponsors.description}
        </p>
      </div>

      <div className="mt-16 flex w-full flex-col gap-y-8 sm:mt-24 md:mt-32">
        <div className="flex flex-col gap-y-4">
          <div className="mx-auto flex w-full max-w-full items-center justify-center gap-x-2 sm:gap-x-4">
            <div className="h-1 w-[25%] bg-linear-to-r from-[#00000000] to-[#FFFFFF33] sm:w-[40%]" />
            <span className="shrink-0 text-center text-xs font-semibold text-white/60 sm:text-sm">
              Instansi Pemerintah & Kementerian
            </span>
            <div className="h-1 w-[25%] bg-linear-to-l from-[#00000000] to-[#FFFFFF33] sm:w-[40%]" />
          </div>

          <div className="w-full rounded-2xl border border-white bg-white px-6 py-6 sm:px-12 sm:py-4">
            <div className="mx-auto flex w-full max-w-360 flex-wrap items-center justify-center gap-6 sm:justify-evenly sm:gap-8">
              {t.sponsors.item.govermentsUrl.map((url) => (
                <Image
                  src={url}
                  alt={"Profile partner"}
                  key={url}
                  width={150}
                  height={150}
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 110px, 150px"
                  className="h-auto w-20 object-contain sm:w-28 md:w-36 lg:w-37.5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-y-6 sm:mt-16 sm:gap-y-8 md:mt-22">
          <div className="mx-auto flex w-full max-w-full items-center justify-center gap-x-2 sm:gap-x-4">
            <div className="h-1 w-[25%] bg-linear-to-r from-[#00000000] to-[#FFFFFF33] sm:w-[40%]" />
            <span className="shrink-0 text-center text-xs font-semibold text-white/60 sm:text-sm">
              Instansi Pemerintah & Kementerian
            </span>
            <div className="h-1 w-[25%] bg-linear-to-l from-[#00000000] to-[#FFFFFF33] sm:w-[40%]" />
          </div>

          <div className="w-full rounded-2xl border border-white bg-white px-6 py-6 sm:px-12 sm:py-4">
            <div className="mx-auto flex w-full max-w-360 flex-wrap items-center justify-center gap-6 sm:justify-evenly sm:gap-8">
              {t.sponsors.item.privateSectorsUrl.map((url) => (
                <Image
                  src={url}
                  alt={"Profile partner"}
                  key={url}
                  width={150}
                  height={150}
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 110px, 150px"
                  className="h-auto w-20 object-contain sm:w-28 md:w-36 lg:w-37.5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
