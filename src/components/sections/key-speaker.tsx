"use client";
import { useLanguage } from "@/i18n/context";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StarParticles } from "../ui/star-particles";
import { chunkArray } from "@/helper/chunkSpeakers";
import { useIsMobile } from "@/hooks/useIsMobile";
import ImgCardSpeakerMobile from "../ui/imgCardSpeakerMobile";

export default function KeySpeaker() {
  const { t } = useLanguage();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const [colsPicture, setColsPicture] = useState<number>(isMobile ? 4 : 8);
  const baseBasis = 100 / colsPicture;
  const selectedMultiplier = 2;
  const selectedBasis = baseBasis * selectedMultiplier;

  useEffect(() => {
    if (isMobile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setColsPicture(4);
    } else {
      setColsPicture(8);
    }
  }, [isMobile]);
  return (
    <section
      id="key-speaker"
      className="relative w-full overflow-hidden py-14 md:py-18"
    >
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
        <StarParticles top={5} left={8} size="small" />
        <StarParticles top={8} left={35} size="small" />
        <StarParticles top={12} left={20} glow size="large" />
        <StarParticles top={15} left={65} glow size="medium" />
        <StarParticles top={18} left={88} size="small" />

        <StarParticles top={32} left={4} glow size="medium" />
        <StarParticles top={40} left={94} size="small" />
        <StarParticles top={48} left={15} size="small" />
        <StarParticles top={52} left={82} glow size="large" />
        <StarParticles top={60} left={48} glow size="medium" />

        <StarParticles top={78} left={7} glow size="large" />
        <StarParticles top={82} left={30} size="small" />
        <StarParticles top={88} left={55} size="small" />
        <StarParticles top={92} left={76} glow size="medium" />
        <StarParticles top={95} left={92} size="small" />
      </div>

      <div className="relative z-30 flex flex-col items-center gap-y-6 text-[#F2F2F2]">
        <span className="block text-center text-sm font-medium md:text-base md:font-semibold">
          {t.keySpeaker.label}
        </span>
        <h2 className="text-2xl leading-tight font-semibold sm:text-4xl md:text-5xl md:font-medium lg:text-6xl lg:leading-[90.19px]">
          {t.keySpeaker.title}
        </h2>
        <p className="w-full max-w-96 text-center text-sm text-[#F2F2F2]/80 sm:text-lg md:max-w-3xl md:text-2xl lg:max-w-4xl">
          {t.keySpeaker.description}
        </p>
      </div>

      <div className="relative z-20 my-8 mt-8 flex flex-col gap-y-32 md:mt-22">
        <div className="absolute -top-30 -right-40 size-80 rounded-full bg-[#23367A] blur-[100px]" />
        {t.keySpeaker.items.map((ks, i) => (
          <div className="flex w-full flex-col gap-y-6" key={ks.title}>
            <div className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-center gap-4">
              <div className="h-px flex-1 bg-[#FDFDFD]" />
              <h6 className="text-xl font-semibold tracking-wide whitespace-nowrap text-[#FDFDFD] uppercase md:text-4xl">
                {ks.title}
              </h6>
              <div className="h-px flex-1 bg-[#FDFDFD]" />
            </div>

            <div className="relative w-full scrollbar-none overflow-x-auto overflow-y-hidden md:overflow-x-hidden">
              <div className="hidden flex-col gap-0 md:flex">
                {chunkArray(ks.speakers, colsPicture).map(
                  (rowSpeakers, rowIdx) => (
                    <div key={rowIdx} className="flex">
                      {rowSpeakers.map((speaker, colIdx) => {
                        const speakerIdx = rowIdx * colsPicture + colIdx;
                        const itemKey = `${i}-${speakerIdx}`;
                        const isSelected = selectedKey === itemKey;

                        return (
                          <div
                            key={speaker.actor + speakerIdx}
                            onClick={() =>
                              setSelectedKey(isSelected ? null : itemKey)
                            }
                            className="relative z-20 h-96 shrink grow-0 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out"
                            style={{
                              flexBasis: `${isSelected ? selectedBasis : baseBasis}%`,
                              transition: "flex-basis 500ms ease-in-out",
                            }}
                          >
                            <Image
                              src={
                                speaker.actor === "?"
                                  ? "/unknown-artist.jpg"
                                  : speaker.imgUrl
                              }
                              alt={"Photo of " + speaker.actor}
                              fill
                              sizes={"(min-width: 768px) 12.5vw, 100vw"}
                              className="object-cover shadow-xl shadow-black/80"
                            />
                            <div
                              className={cn(
                                "absolute inset-0 flex items-end p-4 transition-all duration-500 ease-in-out",
                                isSelected
                                  ? "bg-transparent"
                                  : i === 0
                                    ? "bg-[#f91e8b7e]"
                                    : "bg-[#259dc2ad]",
                              )}
                            >
                              <div
                                className={cn(
                                  "flex w-full flex-col items-center justify-center gap-y-1 rounded-lg border border-white/20 bg-[#352233B8] p-4 shadow-xl backdrop-blur-md transition-all duration-500 ease-in-out",
                                  isSelected ? "opacity-100" : "opacity-0",
                                )}
                              >
                                <h6 className="text-center text-lg font-medium text-white md:text-2xl md:font-semibold">
                                  {speaker.actor}
                                </h6>
                                <span className="text-center text-xs font-medium text-white uppercase md:text-xl md:font-light">
                                  {speaker.actor === "?" ? "-" : speaker.title}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ),
                )}
              </div>
              <ImgCardSpeakerMobile index={i} keySpeaker={ks} />

              <div
                className={cn(
                  "absolute rounded-full",
                  i === 0
                    ? "-bottom-30 -left-40 z-10 size-80 bg-[#68114A] blur-[80px]"
                    : "-bottom-40 left-1/2 size-96 -translate-x-1/2 bg-[#23367A] blur-[100px]",
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 mx-auto mt-8 w-full max-w-80 text-center text-sm text-[#FDFDFD] md:max-w-4xl md:text-xl lg:max-w-6xl">
        {t.keySpeaker.subItems.map((si, i) => (
          <span key={si + i}>
            {si} {i === t.keySpeaker.subItems.length - 1 ? "" : "• "}
          </span>
        ))}
      </div>
    </section>
  );
}
