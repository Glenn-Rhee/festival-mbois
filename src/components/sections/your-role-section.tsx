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
import { buttonVariants } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const icons = [Creative, UserIcon, Idea, LinkIcon, Idea, LinkIcon];

export default function YourRoleSection() {
  const { t } = useLanguage();
  const dataItems = t.yourRole.items.map((item, i) => ({
    ...item,
    icon: icons[i],
  }));
  const [page, setPage] = useState<number>(0);
  const [dataActive, setDataActive] = useState<(typeof dataItems)[number]>(
    dataItems[page],
  );

  return (
    <section
      id="registration"
      className="relative w-full overflow-hidden px-8 py-16 sm:px-8 md:px-16 lg:py-32"
    >
      <div className="relative z-30 flex flex-col items-center gap-y-2 text-[#F2F2F2] md:gap-y-6">
        <span className="block text-center text-sm font-medium md:text-base md:font-semibold">
          {t.yourRole.label}
        </span>
        <h2 className="text-2xl leading-tight font-semibold sm:text-4xl md:text-5xl md:font-medium lg:text-6xl lg:leading-[90.19px]">
          {t.yourRole.title}
        </h2>
        <p className="w-full max-w-96 text-center text-sm text-[#F2F2F2]/80 sm:text-lg md:max-w-3xl md:text-2xl lg:max-w-4xl">
          {t.yourRole.description}
        </p>
      </div>

      <div className="relative mt-8 w-full rounded-2xl border border-white bg-white/10 px-6 py-6 shadow-xl backdrop-blur-md sm:mt-12 sm:px-10 sm:py-8">
        <div className="grid grid-cols-1 gap-6 lg:min-h-96 lg:grid-cols-2 lg:gap-x-8">
          <div className="flex flex-col items-stretch justify-center gap-y-4 md:justify-between md:gap-y-0">
            <h6 className="text-2xl font-semibold text-[#F2F2F2] sm:text-3xl md:text-4xl">
              {dataActive.title}
            </h6>
            <p className="max-w-2xl text-base leading-relaxed text-[#F2F2F2] sm:text-lg md:text-xl md:leading-11.25">
              {dataActive.description}
            </p>
            <Link
              href={dataActive.actionUrl}
              className={buttonVariants({
                variant: "primary-gradient",
                className: "shadow-[0px_7.77px_29.12px_0px_#F12B8E73]",
              })}
            >
              <span className="bg-linear-to-b from-[#25CFEF] to-[#5693FD] bg-clip-text">
                {t.yourRole.actionItem}
              </span>
            </Link>
          </div>
          <div className="relative order-first h-56 w-full overflow-hidden rounded-2xl border-2 border-[#259DC2] sm:h-72 md:h-64 lg:order-last lg:h-full">
            <Image
              src={dataActive.imgUrl}
              alt={dataActive.title + " image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Button left */}
        <button
          onClick={() => {
            if (page === 0) return;
            setPage((prev) => prev - 1);
            setDataActive(dataItems[page]);
          }}
          disabled={page === 0}
          className={cn(
            "broder-white absolute top-1/2 -left-5 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border bg-[#EC1B82] text-white lg:hidden",
            page === 0 && "bg-gray-800",
          )}
        >
          <ChevronLeft className="size-5" />
        </button>
        {/* Button right */}
        <button
          onClick={() => {
            if (page === dataItems.length - 1) return;
            setPage((prev) => prev + 1);
            setDataActive(dataItems[page]);
          }}
          disabled={page === dataItems.length}
          className={cn(
            "broder-white absolute top-1/2 -right-5 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border bg-[#EC1B82] text-white lg:hidden",
            page === dataItems.length - 1 && "bg-gray-800",
          )}
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Baris tombol icon: grid wrap di mobile, tetap satu baris di desktop */}
        <div className="mt-8 hidden gap-2 sm:grid-cols-3 md:mt-12 md:w-full md:items-center md:justify-around md:gap-0 lg:flex">
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
