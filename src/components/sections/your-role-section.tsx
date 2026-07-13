"use client";

import { useLanguage } from "@/i18n/context";
import Creative from "../icon/Creative";
import Idea from "../icon/Idea";
import LinkIcon from "../icon/LinkIcon";
import UserIcon from "../icon/UserIcon";
import { useState } from "react";
import { cn } from "@/lib/cn";
import Image from "next/image";

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
      id="your-role"
      className="relative w-full overflow-hidden px-8 py-14 md:px-16 md:py-18"
    >
      <div className="relative z-20 flex flex-col items-center gap-y-6 text-[#F2F2F2]">
        <span className="block text-center font-semibold">
          {t.yourRole.label}
        </span>
        <h2 className="text-3xl leading-tight font-medium sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[90.19px]">
          {t.yourRole.title}
        </h2>
        <p className="w-full max-w-xl text-center text-base text-[#F2F2F2]/80 sm:text-lg md:max-w-3xl md:text-2xl lg:max-w-4xl">
          {t.yourRole.description}
        </p>
      </div>
      <div className="mt-12 w-full rounded-2xl border border-white bg-white/10 px-10 py-8 shadow-xl backdrop-blur-md">
        <div className="grid h-96 grid-cols-2 gap-x-8">
          <div className="flex flex-col items-stretch justify-evenly">
            <h6 className="text-4xl font-semibold text-[#F2F2F2]">
              {dataActive.title}
            </h6>
            <p className="text-xl leading-[33.31px] text-[#F2F2F2]">
              {dataActive.description}
            </p>
            <button className="max-w-64 rounded-xl border border-[#5693FD] px-2 py-2.5 text-lg font-medium text-transparent hover:bg-white">
              <span className="bg-linear-to-b from-[#25CFEF] to-[#5693FD] bg-clip-text">
                {t.yourRole.actionItem}
              </span>
            </button>
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#259DC2]">
            <Image
              src={dataActive.imgUrl}
              alt={dataActive.title + " image"}
              fill
              sizes="(max-width: 1024px) 50vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 flex w-full items-center justify-around">
          {dataItems.map((item, i) => (
            <button
              onClick={() => setDataActive(item)}
              key={item.title}
              className={cn(
                "flex h-32 w-full cursor-pointer flex-col items-center justify-center gap-y-4 transition-all duration-300 ease-in-out",
                i === 0 && "rounded-bl-3xl",
                i === dataItems.length - 1 && "rounded-br-3xl",
                dataActive.title === item.title
                  ? "bg-transparent"
                  : "bg-linear-to-b from-[#25CFEF] to-[#5693FD]",
              )}
            >
              <item.icon />
              <span className="block max-w-46 text-center text-sm font-medium text-[#FFEAED]">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
