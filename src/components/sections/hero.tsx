"use client";

import Image from "next/image";
import Link from "next/link";
import { FloatingOrb } from "../ui/floating-orb";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { StarParticles } from "../ui/star-particles";
import { useLanguage } from "@/i18n/context";

export default function HeroSection() {
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
    <>
      <section
        id="home"
        className="relative flex min-h-screen w-full flex-col items-center justify-center lg:flex-row"
      >
        <StarParticles top={20} left={8} size="large" glow={true} />
        <StarParticles top={22} left={6} size="large" glow={true} />
        <StarParticles top={25} left={8} size="small" glow={true} />
        <StarParticles bottom={15} left={9} size="large" glow={true} />
        <StarParticles bottom={17} left={7} size="large" glow={true} />
        <StarParticles bottom={20} left={9} size="small" glow={true} />
        <StarParticles top={18} left={18} size="large" />
        <StarParticles top={21} left={28} size="large" glow={true} />
        <StarParticles top={28} right={5} size="small" />
        <StarParticles top={20} right={20} size="medium" />
        <StarParticles top={40} right={18} size="medium" glow={true} />
        <StarParticles bottom={25} right={10} size="small" />
        <StarParticles top={27} left={60} size="medium" />
        <StarParticles top={40} left={60} size="medium" glow={true} />
        <StarParticles top={50} left={46} size="large" />
        <StarParticles top={18} left={40} size="small" />
        <StarParticles top={40} left={38} size="small" />
        <StarParticles top={18} right={45} size="medium" />
        <StarParticles top={50} right={48} size="small" />
        <StarParticles top={75} right={44} size="medium" glow={true} />
        <StarParticles top={35} right={46} size="small" />
        <StarParticles top={25} right={10} size="large" glow={true} />
        <StarParticles top={62} right={8} size="small" />
        <StarParticles bottom={12} left={22} size="medium" />
        <StarParticles bottom={18} left={29} size="small" />
        <StarParticles bottom={8} left={40} size="small" />
        <StarParticles bottom={22} right={30} size="medium" />
        <StarParticles bottom={12} right={45} size="small" />
        <StarParticles bottom={5} right={20} size="small" />

        <StarParticles top={38} left={5} size="small" />
        <StarParticles top={48} left={12} size="small" />
        <StarParticles top={30} left={22} size="medium" />

        {/* ── Content grid ── */}
        <div className="relative z-10 mx-auto flex w-full flex-col-reverse items-center justify-between px-6 pt-32 pb-4 lg:flex-row lg:items-center lg:px-[72px] lg:pt-40 lg:pb-16">
          {/* Left — text content */}
          <div className="mt-10 flex w-full flex-col items-center text-center md:mt-0 lg:w-auto lg:max-w-xl lg:items-start lg:text-left">
            <div className="lg:flex lg:flex-col lg:items-start">
              {/* Sub-heading */}
              <p className="mb-2 text-xl font-semibold tracking-normal whitespace-nowrap uppercase md:text-[48px]">
                {t.hero.subtitle}
              </p>

              {/* Main heading */}
              <h1 className="mb-6 -ml-1 text-3xl leading-[0.95] font-semibold tracking-normal text-white md:text-[clamp(4rem,10vw,8.5rem)] lg:mb-12 lg:-ml-2 lg:text-[118px]">
                {t.hero.title}
              </h1>
            </div>
          </div>

          {/* Right — glowing orb */}
          <FloatingOrb />
        </div>

        {/* ── Bottom Bar: CTA Buttons & Tagline ── */}
        <div className="relative right-0 bottom-0 left-0 z-10 mt-4 flex w-full flex-col-reverse items-center justify-between gap-6 px-6 pb-12 md:flex-row lg:absolute lg:right-[72px] lg:bottom-6 lg:left-[72px] lg:w-auto lg:px-0 lg:pb-0">
          {/* CTA buttons */}
          <div
            className="animate-fade-up flex w-full items-center justify-center gap-3 md:justify-start"
            style={{ animationDelay: "200ms" }}
          >
            <Link href="#ticket" onClick={(e) => scrollToSection(e, "#ticket")}>
              <Button variant={"outline"}>{t.hero.ctaTicket}</Button>
            </Link>
            <Link
              href="#registration"
              onClick={(e) => scrollToSection(e, "#registration")}
            >
              <Button variant={"primary-gradient"}>
                {t.hero.cta}
                <CircleArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Tagline */}
          <div className="text-center md:w-full md:text-right">
            <p className="text-[15px] tracking-normal text-white uppercase lg:text-2xl">
              {t.hero.tagline}
            </p>
            <p className="mt-1 text-[12px] font-light text-white lg:text-base">
              {t.hero.dateLocation}
            </p>
          </div>
        </div>
      </section>

      {/* ── Supported By Section ── */}
      <section className="relative z-10 w-full px-6 pb-16 lg:px-[72px]">
        <p className="py-6 text-center text-2xl font-semibold tracking-widest text-white/70 uppercase">
          {t.hero.supportedBy}
        </p>
        <div className="rounded-2xl bg-white px-8 py-8 lg:px-12 lg:py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-20">
            <Image
              src={"/logo_mcf.svg"}
              width={80}
              height={60}
              alt="MCF"
              style={{ width: "auto", height: "70px" }}
            />
            <Image
              src={"/logo_iccn.svg"}
              width={80}
              height={60}
              alt="ICCN"
              style={{ width: "auto", height: "70px" }}
            />
            <Image
              src={"/logo_kota_malang.svg"}
              width={80}
              height={60}
              alt="Kota Malang"
              style={{ width: "auto", height: "70px" }}
            />
            <Image
              src={"/logo_dekopinda.svg"}
              width={80}
              height={60}
              alt="Dekopinda"
              style={{ width: "auto", height: "70px" }}
            />
            <Image
              src={"/logo_amazing_malang.svg"}
              width={80}
              height={60}
              alt="Amazing Malang"
              style={{ width: "auto", height: "70px" }}
            />
            <Image
              src={"/logo_malang_arts.svg"}
              width={80}
              height={60}
              alt="Malang Arts"
              style={{ width: "auto", height: "70px" }}
            />
            <Image
              src={"/logo_unesco.svg"}
              width={100}
              height={30}
              alt="UNESCO"
              style={{ width: "auto", height: "70px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
