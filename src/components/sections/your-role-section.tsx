"use client";

import { useLanguage } from "@/i18n/context";
import Creative from "../icon/Creative";
import Idea from "../icon/Idea";
import LinkIcon from "../icon/LinkIcon";
import UserIcon from "../icon/UserIcon";
import { useState } from "react";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";

const icons = [Creative, UserIcon, Idea, LinkIcon, Idea, LinkIcon];

export default function YourRoleSection() {
  const { t } = useLanguage();
  const dataItems = t.yourRole.items.map((item, i) => ({
    ...item,
    icon: icons[i],
  }));
  const [dataActive, setDataActive] = useState<(typeof dataItems)[number]>(
    dataItems[0],
  );

  return (
    <section
      id="registration"
      className="relative w-full overflow-hidden px-4 py-16 sm:px-8 md:px-16 lg:py-32"
    >
      <div className="relative z-20 flex flex-col items-center gap-y-4 text-[#F2F2F2] sm:gap-y-6">
        <span className="block text-center font-semibold">
          {t.yourRole.label}
        </span>
        <h2 className="text-2xl leading-tight font-medium sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[90.19px]">
          {t.yourRole.title}
        </h2>
        <p className="w-full max-w-xl text-center text-sm text-[#F2F2F2]/80 sm:text-lg md:max-w-3xl md:text-2xl lg:max-w-4xl">
          {t.yourRole.description}
        </p>
      </div>

      <div className="mt-8 w-full rounded-2xl border border-white bg-white/10 px-4 py-6 shadow-xl backdrop-blur-md sm:mt-12 sm:px-10 sm:py-8">
        {/* Konten utama: stack di mobile, side-by-side di desktop */}
        <div className="grid grid-cols-1 gap-6 md:h-96 md:grid-cols-2 md:gap-x-8">
          <div className="flex flex-col items-stretch justify-center gap-y-4 md:justify-between md:gap-y-0">
            <h6 className="text-2xl font-semibold text-[#F2F2F2] sm:text-3xl md:text-4xl">
              {dataActive.title}
            </h6>
            <p className="max-w-2xl text-base leading-relaxed text-[#F2F2F2] sm:text-lg md:text-xl md:leading-11.25">
              {dataActive.description}
            </p>
            <Link
              href={dataActive.actionUrl}
              className="flex w-full max-w-64 items-center justify-center rounded-xl border border-[#5693FD] px-2 py-2.5 text-base font-medium text-transparent hover:bg-white sm:text-lg"
            >
              <span className="bg-linear-to-b from-[#25CFEF] to-[#5693FD] bg-clip-text">
                {t.yourRole.actionItem}
              </span>
            </Link>
          </div>

          <div className="relative order-first h-56 w-full overflow-hidden rounded-2xl border-2 border-[#259DC2] sm:h-72 md:order-last md:h-full">
            <Image
              src={dataActive.imgUrl}
              alt={dataActive.title + " image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Baris tombol icon: grid wrap di mobile, tetap satu baris di desktop */}
        <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-3 md:mt-12 md:flex md:w-full md:items-center md:justify-around md:gap-0">
          {dataItems.map((item, i) => (
            <button
              onClick={() => setDataActive(item)}
              key={item.title}
              className={cn(
                "flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl transition-all duration-300 ease-in-out sm:h-24 md:h-32 md:gap-y-4 md:rounded-none",
                i === 0 && "md:rounded-bl-3xl",
                i === dataItems.length - 1 && "md:rounded-br-3xl",
                dataActive.title === item.title
                  ? "bg-transparent"
                  : "bg-linear-to-b from-[#25CFEF] to-[#5693FD]",
              )}
            >
              <item.icon className="size-5 sm:size-6 md:size-10" />
              <span className="block max-w-[90%] text-center text-[10px] font-medium text-[#FFEAED] sm:text-xs md:max-w-46 md:text-sm">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
