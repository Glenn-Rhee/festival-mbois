import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#322130]">
      {/* Background Grid & Ornaments */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        {/* Ornaments */}
        <img
          src="/vector4.webp"
          alt="Ornament Left"
          className="absolute top-0 left-0 w-[300px] object-contain opacity-80 mix-blend-screen md:w-[500px] lg:w-[700px]"
        />
        <img
          src="/vector3.webp"
          alt="Ornament Right"
          className="absolute top-[20%] right-0 w-[300px] object-contain opacity-80 mix-blend-screen md:w-[500px] lg:w-[700px]"
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(190,80,255,0.3)_0%,rgba(208,84,127,0.2)_40%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full">
        {/* --- CTA SECTION --- */}
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center md:py-32 lg:px-8">
          <h2 className="mx-auto max-w-4xl text-2xl leading-tight font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Saatnya Bikin Malang Menyala Bareng Karya Terbaikmu!
          </h2>
          <Button variant={"primary-gradient"} className="mt-6 rounded-lg sm:rounded-xl px-5 py-3 text-xs sm:text-sm sm:px-7 sm:py-4 h-11 sm:h-12" asChild>
            <Link href="#kemitraan" className="flex items-center gap-2.5">
              Kolaborasi Kemitraan
              <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white text-[#c94fa2] shrink-0">
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
            </Link>
          </Button>
        </div>

        {/* --- BRAND SECTION --- */}
        <div className="border-t border-white/20">
          <div className="flex flex-col md:flex-row">
            {/* Logo & Name */}
            <div className="flex flex-1 flex-col md:flex-row items-center gap-4 px-6 py-12 md:gap-8 md:px-16 lg:gap-8 lg:pl-24 text-center md:text-left justify-center md:justify-start">
              <Image
                src={"/logo_festival_mbois.svg"}
                alt="Logo"
                width={80}
                height={80}
                className="h-20 w-20 md:h-16 md:w-16 lg:h-[80px] lg:w-[80px]"
              />
              <span className="text-3xl leading-none font-semibold tracking-tight text-white md:text-6xl lg:text-8xl">
                Festival Mbois 11
              </span>
            </div>

            {/* Tagline */}
            <div className="flex items-center justify-center border-t border-white/20 px-6 py-8 md:border-t-0 md:border-l md:px-16 lg:px-24">
              <span className="text-xl leading-tight font-medium text-white md:text-3xl lg:text-[40px] text-center md:text-left">
                Malang <br className="hidden md:inline" /> Menyala
              </span>
            </div>
          </div>
        </div>

        {/* --- BOTTOM LINKS SECTION --- */}
        <div className="border-t border-white/20">
          <div className="flex flex-col md:flex-row">
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 px-6 py-8 md:px-16 lg:px-24 w-full md:w-auto">
              <a
                href="https://instagram.com/festivalmbois"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://youtube.com/@festivalmbois"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="YouTube"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </a>
              <a
                href="https://tiktok.com/@festivalmbois"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="TikTok"
              >
                <Image
                  src="/tiktok.svg"
                  alt="TikTok"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </a>
            </div>

            {/* Links & Copyright */}
            <div className="flex flex-1 flex-col items-center text-center justify-center gap-4 border-t border-white/20 px-6 py-8 sm:flex-row sm:items-center md:justify-end md:text-left md:border-t-0 md:border-l md:px-16">
              <Link
                href="#privacy"
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                Privacy Policy
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                Contact Us
              </Link>
              <p className="text-sm font-medium text-white">
                © 2026 Festival Mbois Malang
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
