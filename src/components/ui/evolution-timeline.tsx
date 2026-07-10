import { useState, useRef, useLayoutEffect, useCallback } from "react";

interface TimelineItem {
  year: string;
  label: string;
}

interface EvolutionTimelineProps {
  onChange: (index: number) => void;
  active: number;
}

const TIMELINE_ITEMS: TimelineItem[] = [
  { year: "2016 - 2019", label: "Panggung Komunitas" },
  { year: "2020 - 2021", label: "Adaptasi Digital" },
  { year: "2022 - 2025", label: "Hub Ekosistem" },
  { year: "2026", label: "From Event to System" },
];

export default function EvolutionTimeline({ onChange, active }: EvolutionTimelineProps) {
  const [fillWidth, setFillWidth] = useState<number>(0);

  const lineRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const measure = useCallback(() => {
    const line = lineRef.current;
    const dot = dotRefs.current[active];
    if (!line || !dot) return;

    const lineRect = line.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    const dotCenter = dotRect.left + dotRect.width / 2 - lineRect.left;

    setFillWidth(dotCenter);
  }, [active]);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const handleSelect = (index: number): void => {
    onChange(index);
  };

  return (
    <div className="relative mx-auto w-full px-2">
      {/* Label tahun */}
      <div className="mb-4 flex justify-around">
        {TIMELINE_ITEMS.map((item, i) => (
          <span
            key={item.year}
            className={`text-sm transition-all duration-500 ${
              i === active
                ? "font-medium text-white"
                : "font-normal text-white/70"
            }`}
          >
            {item.year}
          </span>
        ))}
      </div>

      {/* Garis dasar */}
      <div ref={lineRef} className="relative h-0.5 rounded-full bg-white/20">
        {/* Garis fill, panjangnya = posisi asli dot aktif (px), diukur dari DOM */}
        <div
          className="absolute top-0 left-0 h-0.5 rounded-full bg-white transition-all duration-700 ease-in-out"
          style={{ width: `${fillWidth}px` }}
        />

        {/* Dot */}
        <div className="absolute inset-0 flex items-center justify-around">
          {TIMELINE_ITEMS.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.year}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                type="button"
                onClick={() => handleSelect(i)}
                aria-label={item.year}
                aria-current={isActive}
                className="group relative flex h-6 w-6 cursor-pointer items-center justify-center focus:outline-none"
              >
                {/* Glow ring saat aktif */}
                <span
                  className={`absolute rounded-full transition-all duration-500 ${
                    isActive
                      ? "h-5 w-5 bg-white/30"
                      : "h-0 w-0 bg-transparent"
                  }`}
                />
                {/* Dot inti */}
                <span
                  className={`relative rounded-full transition-all duration-500 ${
                    isActive
                      ? "h-3 w-3 bg-white"
                      : "h-2 w-2 bg-white/50 group-hover:bg-white/80"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}