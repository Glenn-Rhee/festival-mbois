"use client";

import Image from "next/image";
import Link from "next/link";
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

        <Image
          src={"/hero-bg.png"}
          alt="Hero Image"
          fill
          className="object-cover opacity-75"
        />

        <div className="absolute top-40 left-1/2 blur-[180px] -z-10 size-80 rounded-full bg-[#F84AA1]" />

        {/* ── Content grid ── */}
        <div className="relative z-10 mx-auto flex w-full flex-col-reverse items-center justify-between px-6 pt-32 pb-4 lg:flex-row lg:items-center lg:px-18 lg:pt-40 lg:pb-16">
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
        </div>

        {/* ── Bottom Bar: CTA Buttons & Tagline ── */}
        <div className="relative right-0 bottom-0 left-0 z-10 mt-4 flex w-full flex-col-reverse items-center justify-between gap-6 px-6 pb-12 md:flex-row lg:absolute lg:right-18 lg:bottom-6 lg:left-18 lg:w-auto lg:px-0 lg:pb-0">
          {/* CTA buttons */}
          <div
            className="animate-fade-up flex w-full flex-col items-center justify-center gap-3 sm:flex-row md:justify-start"
            style={{ animationDelay: "200ms" }}
          >
            <Link
              href="#registration"
              onClick={(e) => scrollToSection(e, "#registration")}
              className="w-full sm:w-auto"
            >
              <Button variant={"outline"} className="w-full sm:w-auto">
                {t.hero.cta}
              </Button>
            </Link>
            <Link
              href="https://malang-creative-fusion.eventopia.my/festival-mbois-11-malang-menyala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant={"primary-gradient"} className="w-full sm:w-auto">
                {t.hero.ctaTicket}
                <CircleArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-end gap-x-2 md:w-full">
            <div className="text-center md:text-right">
              <p className="text-[15px] tracking-normal text-white uppercase lg:text-2xl">
                {t.hero.tagline}
              </p>
              <p className="mt-1 text-[12px] font-light text-white lg:text-base">
                {t.hero.dateLocation}
              </p>
            </div>
            <Image
              src={"/hut-ri.png"}
              alt="Hut RI Logo"
              width={150}
              height={50}
            />
          </div>
        </div>
      </section>

      {/* ── Sponsors & Partners Section ── */}
      <section className="relative z-10 w-full bg-white">
        {/* Sponsored By - Top */}
        <div className="w-full border-b border-[#BDBDBD] py-10">
          <span className="block text-center text-lg font-bold tracking-widest text-black uppercase">
            Stakeholder Partners
          </span>
          <div className="mt-6 flex items-center justify-center gap-10">
            <Image
              src="/sponsors/bri.png"
              width={200}
              height={80}
              alt="BRI"
              style={{ width: "auto", height: "80px" }}
            />
            <Image
              src="/sponsors/kemenpora.png"
              width={200}
              height={80}
              alt="Kemenpora"
              style={{ width: "auto", height: "80px" }}
            />
            <Image
              src="/sponsors/kemenekraf.png"
              width={200}
              height={80}
              alt="Kemenekraf"
              style={{ width: "auto", height: "80px" }}
            />
            <Image
              src="/sponsors/ukp.png"
              width={200}
              height={80}
              alt="Utusan Khusus Presiden"
              style={{ width: "auto", height: "80px" }}
            />
          </div>
        </div>

        {/* Grid: Powered By | Partners | Collaborators | Media Partner */}
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white sm:grid-cols-2 lg:grid-cols-4">
          {/* Powered By */}
          <div className="flex flex-col items-center border-r border-[#BDBDBD] px-4 py-6 sm:border-r lg:border-r">
            <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
              Powered By
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image
                src="/logo_mcf.svg"
                width={80}
                height={60}
                alt="MCF"
                style={{ width: "auto", height: "150px" }}
              />
              <Image
                src="/logo_iccn.svg"
                width={80}
                height={60}
                alt="ICCN"
                style={{ width: "auto", height: "70px" }}
              />
            </div>
          </div>

          {/* Partners */}
          <div className="flex flex-col items-center border-r border-[#BDBDBD] px-4 py-6 lg:border-r">
            <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
              Partners
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image
                src="/partners/logo_partner_1.png"
                width={50}
                height={50}
                alt="Kota Malang"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_2.png"
                width={50}
                height={50}
                alt="Dekopinda Kota Malang"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_3.png"
                width={50}
                height={50}
                alt="Koni Kota Malang"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_4.png"
                width={50}
                height={50}
                alt="Arema Music Tribute"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_5.png"
                width={50}
                height={50}
                alt="Mbois Mart"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_6.png"
                width={50}
                height={50}
                alt="Amazing Malang Eat"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_7.png"
                width={50}
                height={50}
                alt="AACE"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_8.png"
                width={50}
                height={50}
                alt="Multiverse"
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/partners/logo_partner_9.png"
                width={50}
                height={50}
                alt="MMAC"
                style={{ width: "auto", height: "40px" }}
              />
            </div>
          </div>

          {/* Collaborators */}
          <div className="flex flex-col items-center border-r border-[#BDBDBD] px-4 py-6 sm:border-r lg:border-r">
            <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
              Collaborators
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Image
                src="/collaborators/logo_collab_1.png"
                width={40}
                height={40}
                alt="Collaborator 1"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_2.png"
                width={40}
                height={40}
                alt="Collaborator 2"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_3.png"
                width={40}
                height={40}
                alt="Collaborator 3"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_4.png"
                width={40}
                height={40}
                alt="Collaborator 4"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_5.png"
                width={40}
                height={40}
                alt="Collaborator 5"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_6.png"
                width={40}
                height={40}
                alt="Collaborator 6"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_7.png"
                width={40}
                height={40}
                alt="Collaborator 7"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_8.png"
                width={40}
                height={40}
                alt="Collaborator 8"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_9.png"
                width={40}
                height={40}
                alt="Collaborator 9"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_10.png"
                width={40}
                height={40}
                alt="Collaborator 10"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_11.png"
                width={40}
                height={40}
                alt="Collaborator 11"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_12.png"
                width={40}
                height={40}
                alt="Collaborator 12"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_13.png"
                width={40}
                height={40}
                alt="Collaborator 13"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_14.png"
                width={40}
                height={40}
                alt="Collaborator 14"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_15.png"
                width={40}
                height={40}
                alt="Collaborator 15"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_16.png"
                width={40}
                height={40}
                alt="Collaborator 16"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_17.png"
                width={40}
                height={40}
                alt="Collaborator 17"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_18.png"
                width={40}
                height={40}
                alt="Collaborator 18"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_19.png"
                width={40}
                height={40}
                alt="Collaborator 19"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_20.png"
                width={40}
                height={40}
                alt="Collaborator 20"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_21.png"
                width={40}
                height={40}
                alt="Collaborator 21"
                style={{ width: "auto", height: "32px" }}
              />
              <Image
                src="/collaborators/logo_collab_22.png"
                width={40}
                height={40}
                alt="Collaborator 22"
                style={{ width: "auto", height: "32px" }}
              />
            </div>
          </div>

          {/* Media Partner */}
          <div className="flex flex-col items-center px-4 py-6">
            <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
              Media Partner
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image
                src="/medias/logo_media_1.png"
                width={60}
                height={50}
                alt="Media Partner 1"
                style={{ width: "auto", height: "100px" }}
              />
              <Image
                src="/medias/logo_media_2.png"
                width={60}
                height={50}
                alt="Media Partner 2"
                style={{ width: "auto", height: "140px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
