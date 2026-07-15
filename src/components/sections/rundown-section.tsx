"use client";
import { useLanguage } from "@/i18n/context";
import { cn } from "@/lib/cn";
import { Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function RundownSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("");

  return (
    <section
      id="rundown"
      className="relative w-full overflow-hidden px-8 py-14 md:px-16 md:py-18"
    >
      <div className="relative z-20 flex flex-col items-center gap-y-6 text-[#F2F2F2]">
        <span className="block text-center font-semibold">
          {t.rundown.label}
        </span>
        <h2 className="text-3xl leading-tight font-medium sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[90.19px]">
          {t.rundown.title}
        </h2>
        <p className="w-full max-w-xl text-center text-base text-[#F2F2F2]/80 sm:text-lg md:max-w-3xl md:text-2xl lg:max-w-4xl">
          {t.rundown.description}
        </p>
      </div>

      <div className="mt-8 flex w-full flex-col gap-y-6">
        {t.rundown.items.map((item, i) => {
          const isActive = active === item.label;

          return (
            <div key={item.label + i}>
              <button
                onClick={() => setActive(isActive ? "" : item.label)}
                className="h-48 w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-white bg-white/10 px-10 py-6 shadow-xl backdrop-blur-md"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.imgUrl}
                    alt={"Image of " + item.label}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#f61d8a8c]">
                    <span className="text-5xl font-bold tracking-[-2.74px] text-[#FFFFFF] uppercase text-shadow-2xs">
                      {item.label}
                    </span>
                  </div>
                </div>
              </button>

              {/* Wrapper animasi: grid-rows 0fr <-> 1fr */}
              <div
                className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                {/* Wajib overflow-hidden + min-h-0 di child langsung grid */}
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-2 grid w-full grid-cols-[25rem_1fr] rounded-2xl border-2 border-white bg-white/10 px-8 shadow-xl backdrop-blur-md">
                    <div className="flex h-full flex-col gap-y-4 border-r border-white py-8 ps-4 pe-8 text-start text-[#F2F2F2]">
                      <span className="text-3xl font-semibold">
                        {item.label}
                      </span>
                      <div className="flex flex-col gap-y-1">
                        <span className="text-2xl font-semibold">
                          {item.date}
                        </span>
                        <p className="text-xl font-medium">{item.title}</p>
                      </div>
                      <a href="https://malang-creative-fusion.eventopia.my/festival-mbois-11-malang-menyala" className="mt-8 w-full rounded-xl border border-[#FFBBEC] py-4 text-[#FFBAEB] text-center">
                        {item.actionTicket}
                      </a>
                    </div>
                    <div className="flex h-full flex-col gap-y-8 py-8 ps-8 pe-2 text-[#F2F2F2]">
                      <h6 className="text-2xl font-medium">
                        {item.titleDetail}
                      </h6>
                      <div className="flex flex-col gap-y-3">
                        <span className="text-xl font-medium">
                          Headline Artist
                        </span>
                        <h6 className="text-5xl font-medium">
                          {item.headlineArtist}
                        </h6>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {item.times.map((time) => (
                          <div
                            className="flex flex-col gap-y-3"
                            key={time.time}
                          >
                            <span className="text-xl font-semibold">
                              {time.time}
                            </span>
                            <span className="text-xl font-semibold">
                              {time.title}
                            </span>
                            <ul className="flex flex-col gap-y-3">
                              {time.toDo.map((td) => (
                                <li className="font-light" key={td}>
                                  • {td}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setActive("")}
                        className="flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-xl border border-[#FFBBEC] py-4 text-center text-lg font-medium text-[#FFBAEB] hover:bg-white hover:text-black"
                      >
                        {t.rundown.actionToggle} <Minus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
