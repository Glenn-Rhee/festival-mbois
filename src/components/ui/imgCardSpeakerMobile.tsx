"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  keySpeaker: {
    title: string;
    speakers: {
      actor: string;
      title: string;
      imgUrl: string;
    }[];
  };
  index: number;
}
export default function ImgCardSpeakerMobile(props: Props) {
  const { keySpeaker, index } = props;
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const baseBasis = 100 / 4;
  const selectedMultiplier = 2;
  const selectedBasis = baseBasis * selectedMultiplier;
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!selectedKey) return;
    const el = itemRefs.current[selectedKey];
    if (!el) return;

    const timeout = setTimeout(() => {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "nearest",
      });
    }, 10);

    return () => clearTimeout(timeout);
  }, [selectedKey]);
  return (
    <div className="flex md:hidden">
      {keySpeaker.speakers.map((speaker, colIdx) => {
        const speakerIdx = speaker.actor + colIdx;
        const itemKey = `${colIdx}-${speakerIdx}`;
        const isSelected = selectedKey === itemKey;

        return (
          <div
            key={speakerIdx}
            ref={(el) => {
              itemRefs.current[itemKey] = el;
            }}
            onClick={() => setSelectedKey(isSelected ? null : itemKey)}
            className="relative z-20 h-96 shrink-0 grow-0 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              flexBasis: `${isSelected ? selectedBasis : baseBasis}%`,
              transition: "flex-basis 500ms ease-in-out",
            }}
          >
            <Image
              src={
                speaker.actor === "?" ? "/unknown-artist.jpg" : speaker.imgUrl
              }
              alt={"Photo of " + speaker.actor}
              fill
              sizes={"(min-width: 768px) 12.5vw, 25vw"}
              className="object-cover shadow-xl shadow-black/80"
            />
            <div
              className={cn(
                "absolute inset-0 flex items-end p-4 transition-all duration-500 ease-in-out",
                isSelected
                  ? "bg-transparent"
                  : index === 0
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
  );
}
