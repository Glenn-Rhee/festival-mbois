"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  lineupArtist: {
    artist: string;
    imgUrl: string;
  }[];
}

export default function LineupCarousel(props: Props) {
  const { lineupArtist } = props;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const [isPointerDown, setIsPointerDown] = useState<boolean>(false);

  const updateCardTransforms = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = cardCenter - containerCenter;

      const normalized = Math.max(
        -1,
        Math.min(1, distance / (containerRect.width / 2)),
      );

      const rotateY = normalized * -45;
      const scale = 1 - Math.abs(normalized) * 0.25;
      const translateZ = -Math.abs(normalized) * 150;
      const opacity = 1 - Math.abs(normalized) * 0.35;

      card.style.transform = `rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`;
      card.style.opacity = String(Math.max(0.4, opacity));
      card.style.zIndex = String(100 - Math.round(Math.abs(normalized) * 100));
    });

    rafId.current = null;
  }, []);

  const requestUpdate = useCallback(() => {
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(updateCardTransforms);
  }, [updateCardTransforms]);

  useEffect(() => {
    updateCardTransforms();
    window.addEventListener("resize", requestUpdate);
    return () => window.removeEventListener("resize", requestUpdate);
  }, [updateCardTransforms, requestUpdate]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    setIsPointerDown(true);
    dragStartX.current = e.pageX;
    scrollStartX.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const delta = e.pageX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartX.current - delta;
    requestUpdate();
  };

  const stopDragging = () => {
    isDragging.current = false;
    setIsPointerDown(false);
  };

  return (
    <div className="relative left-1/2 my-10 mb-12 w-screen -translate-x-1/2">
      <div className="bg-background absolute -top-78 left-1/2 z-10 hidden h-90 w-[150%] -translate-x-1/2 rounded-[45%] md:block md:rounded-[100%]" />
      <div className="bg-background absolute -bottom-78 left-1/2 z-10 hidden h-90 w-[150%] -translate-x-1/2 rounded-[45%] md:block md:rounded-[100%]" />

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onScroll={requestUpdate}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className={cn(
          "flex scrollbar-none gap-x-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] perspective-[1000px] [&::-webkit-scrollbar]:hidden",
          isPointerDown ? "cursor-grabbing select-none" : "cursor-grab",
        )}
      >
        {lineupArtist.map((item, i) => (
          <div
            key={item.artist + i}
            className="relative h-96 w-56 shrink-0 md:h-120 md:w-90"
          >
            <Image
              src={item.artist === "?" ? "/unknown-artist.jpg" : item.imgUrl}
              alt={"Image of " + item.artist}
              fill
              sizes="360px"
              className={cn(
                "object-cover",
                item.artist === "?" ? "blur-md" : "",
              )}
            />
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center rounded-lg",
                i % 2 === 0 ? "bg-[#f91e8b96]" : "bg-[#2EC4F296]",
              )}
            >
              <h6
                className={cn(
                  "text-center font-bold text-white uppercase [text-shadow:0px_0px_6px_#FFFFFF9E]",
                  item.artist === "?" ? "text-9xl" : "text-3xl",
                )}
              >
                {item.artist}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
