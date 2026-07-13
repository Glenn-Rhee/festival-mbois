"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "@/i18n/context";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Grid & Ornaments */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="absolute top-5 -left-5 size-80 rounded-full bg-[#68114A] blur-[90px]" />
        <div className="absolute -right-5 bottom-5 size-80 rounded-full bg-[#23367A] blur-[90px]" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(190,80,255,0.3)_0%,rgba(208,84,127,0.2)_40%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full">
        {/* --- CTA SECTION --- */}
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center md:py-32 lg:px-8">
          <h2 className="mx-auto max-w-4xl text-2xl leading-tight font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
            {t.footer.cta}
          </h2>
          <Button
            variant={"primary-gradient"}
            className="mt-12 shadow-[0px_0px_17px_0px_#F61D89E5]"
            asChild
          >
            <Link
              href="#registration"
              onClick={(e) => scrollToSection(e, "#registration")}
              className="flex items-center gap-2.5"
            >
              {t.footer.ctaButton}
              <div className="text-brand-magenta-dark flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white sm:h-5 sm:w-5">
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
            </Link>
          </Button>
        </div>

        {/* --- BRAND SECTION --- */}
        <div className="border-t border-white/20">
          <div className="flex flex-col md:flex-row">
            {/* Logo & Name */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-12 text-center md:flex-row md:justify-start md:gap-8 md:px-16 md:text-left lg:gap-8 lg:pl-24">
              <span className="text-3xl leading-none font-semibold tracking-tight text-white md:text-6xl lg:text-8xl">
                {t.footer.brandName}
              </span>
            </div>

            {/* Tagline */}
            <div className="flex items-center justify-center border-t border-white/20 px-6 py-8 md:border-t-0 md:border-l md:px-16 lg:px-24">
              <span className="text-center text-xl leading-tight font-medium text-white md:text-left md:text-3xl lg:text-[40px]">
                {t.footer.tagline}
              </span>
            </div>
          </div>
        </div>

        {/* --- BOTTOM LINKS SECTION --- */}
        <div className="border-t border-white/20">
          <div className="flex flex-col md:flex-row">
            {/* Social Icons */}
            <div className="flex w-full items-center justify-center gap-6 px-6 py-8 md:w-auto md:px-16 lg:px-24">
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
                href="https://www.threads.com/@festivalmbois"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Threads"
              >
                <Image
                  src="/threads.svg"
                  alt="Threads"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </a>
            </div>

            {/* Links & Copyright */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4 border-t border-white/20 px-6 py-8 text-center sm:flex-row sm:items-center md:justify-end md:border-t-0 md:border-l md:px-16 md:text-left">
              <Link
                href="#privacy"
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                {t.footer.contact}
              </Link>
              <p className="text-sm font-medium text-white">
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
