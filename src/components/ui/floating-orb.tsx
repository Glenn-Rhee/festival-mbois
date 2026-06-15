import Image from "next/image";

export function FloatingOrb() {
  return (
    <div className="relative mt-10 flex w-max items-center justify-center lg:mt-0 lg:justify-end">
      <div className="animate-float relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px]">
        {/* Inner wrapper to scale content without affecting container bounds */}
        <div className="absolute inset-0 h-full w-full scale-110 md:scale-[1.5]">
          {/* Main Orb */}
          <Image
            src="/hero_glowing_orb.png"
            alt="Glowing Energy Orb"
            fill
            sizes="(max-width: 1024px) 250px, (max-width: 1024px) 350px, (max-width: 1024px) 400px, 400px"
            className="object-contain drop-shadow-[0_0_80px_rgba(209,85,128,0.6)]"
            priority
          />

          {/* Extra Center Glow to make the middle much brighter */}
          <div className="absolute top-1/2 left-1/2 z-20 h-[15%] w-[15%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-90 blur-md" />
          <div className="absolute top-1/2 left-1/2 z-20 h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB6E8] opacity-70 blur-xl" />

          {/* Centered Union Star (Top/Main) */}
          <div className="absolute top-1/2 left-1/2 z-10 h-1/4 w-1/4 -translate-x-1/2 translate-y-[-95%]">
            <Image
              src="/union.webp"
              alt="Union Star Top"
              sizes="(max-width: 768px) 150px, 200px"
              fill
              className="object-contain"
            />
          </div>

          {/* Centered Union Star (Bottom/Secondary) */}
          <div className="absolute top-1/2 left-1/2 z-20 h-1/4 w-1/4 -translate-x-1/2 translate-y-[-95%]">
            <Image
              src="/union (1).webp"
              alt="Union Star Bottom"
              sizes="(max-width: 768px) 150px, 200px"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
