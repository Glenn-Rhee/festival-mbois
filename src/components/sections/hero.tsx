"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
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
        className="relative flex min-h-screen w-full flex-col items-center justify-between pt-32 md:justify-center md:pt-0 lg:flex-row"
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

        <div className="absolute inset-0 z-10">
          <Image
            src={"/hero-bg.png"}
            alt="Hero Image"
            fill
            className="relative -z-10 object-cover object-[65%_0%] md:object-bottom-left"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black md:to-black/60" />
        </div>

        <div className="absolute top-40 left-1/2 -z-10 hidden size-80 rounded-full bg-[#F84AA1] blur-[180px] md:block" />
        <div className="absolute top-30 right-20 -z-10 hidden size-80 rounded-full bg-[#F84AA1] blur-[200px] md:block" />
        <div className="absolute -top-10 -left-10 -z-10 hidden size-80 rounded-full bg-[#F84AA1] blur-[200px] md:block" />

        {/* ── Content grid ── */}
        <div className="relative z-10 mx-auto flex w-full flex-col-reverse items-center justify-between pb-4 md:pt-32 lg:flex-row lg:items-center lg:px-18 lg:pb-16">
          {/* Left — text content */}
          <div className="m:mt-10 flex w-full flex-col text-left md:mt-0 lg:w-auto lg:max-w-xl lg:items-start">
            <div className="px-6 md:px-0 lg:flex lg:flex-col lg:items-start">
              <Image
                src={"/hut-ri.png"}
                alt="Hut RI Logo"
                width={140}
                height={50}
                className="-ml-6 block w-auto md:hidden"
              />
              {/* Sub-heading */}
              <p className="mt-6 mb-2 bg-[linear-gradient(to_right,#A37E9A,#FFFFFF,#A37E9A)] bg-clip-text text-xl font-semibold tracking-normal whitespace-nowrap text-transparent uppercase md:mt-0 md:text-[48px]">
                {t.hero.subtitle}
              </p>

              {/* Main heading */}
              <h1 className="mb-6 -ml-1 text-6xl leading-[0.95] font-semibold tracking-normal text-white md:text-3xl md:text-[clamp(4rem,10vw,8.5rem)] lg:mb-12 lg:-ml-2 lg:text-[118px]">
                {t.hero.title}
              </h1>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: CTA Buttons & Tagline ── */}
        <div className="relative right-0 bottom-0 left-0 z-10 mt-4 mb-8 flex w-full flex-col-reverse items-center justify-between gap-22 px-6 pb-12 md:mb-0 md:flex-row md:gap-6 lg:absolute lg:right-18 lg:bottom-6 lg:left-18 lg:w-auto lg:px-0 lg:pb-0">
          {/* CTA buttons */}
          <div
            className="animate-fade-up flex w-full flex-col items-center justify-center gap-3 sm:flex-row md:justify-start"
            style={{ animationDelay: "200ms" }}
          >
            <Link
              href="#registration"
              onClick={(e) => scrollToSection(e, "#registration")}
              className={buttonVariants({
                variant: "outline",
                className: "w-full justify-center sm:w-52",
              })}
            >
              {t.hero.cta}
            </Link>
            <Link
              href="#ticket"
              className={buttonVariants({
                variant: "primary-gradient",
                className: "w-full justify-center sm:w-52",
              })}
            >
              {t.hero.ctaTicket}
              <CircleArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Tagline */}
          <div className="flex w-full items-center gap-x-2 md:justify-end">
            <div className="text-start md:text-right">
              <p className="font-bold tracking-normal text-white uppercase lg:text-2xl">
                {t.hero.tagline}
              </p>
              <p className="mt-1 text-[12px] font-light text-white lg:text-base">
                {t.hero.dateLocation}
              </p>
            </div>
            <Image
              src={"/malang-media-art.png"}
              alt="Malang Media Art"
              width={150}
              height={50}
              className="hidden w-28 object-contain md:block"
            />
            <Image
              src={"/unesco.png"}
              alt="Unesco"
              width={150}
              height={50}
              className="hidden w-28 object-contain md:block"
            />
            <Image
              src={"/hut-ri.png"}
              alt="Hut RI Logo"
              width={150}
              height={50}
              className="hidden w-28 object-contain md:block"
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
          <div className="mt-6 grid grid-cols-4 items-center justify-center gap-4 px-6 pt-4 md:flex md:gap-12 md:px-0 md:pt-6">
            <Image
              src="/sponsors/bri.png"
              width={200}
              height={80}
              alt="BRI"
              className="h-20 w-auto object-contain md:justify-self-center"
            />
            <Image
              src="/sponsors/kemenpora.png"
              width={200}
              height={80}
              alt="Kemenpora"
              className="h-20 w-auto object-contain md:justify-self-center"
            />
            <Image
              src="/sponsors/kemenekraf.png"
              width={200}
              height={80}
              alt="Kemenekraf"
              className="h-20 w-auto object-contain md:justify-self-center"
            />
            <Image
              src="/sponsors/ukp.png"
              width={200}
              height={80}
              alt="Utusan Khusus Presiden"
              className="h-20 w-auto object-contain md:justify-self-center"
            />
          </div>
        </div>

        {/* Grid: Powered By | Partners | Collaborators | Media Partner */}
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white sm:grid-cols-2 lg:grid-cols-4">
          {/* Powered By */}
          <div className="flex flex-row items-start justify-around border-r-0 border-b border-[#BDBDBD] px-4 py-6 sm:border-r md:flex-col md:justify-start md:gap-x-0 md:border-r md:border-b-0 lg:border-r">
            <div className="flex flex-col items-center md:mx-auto">
              <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
                Powered By
              </span>
              <div className="flex flex-col flex-wrap items-center justify-center gap-4">
                <Image
                  src="/logo_mcf.svg"
                  width={60}
                  height={50}
                  alt="MCF"
                  className="h-20 w-auto md:h-22"
                />
                <Image
                  src="/logo_iccn.svg"
                  width={60}
                  height={50}
                  alt="ICCN"
                  className="h-10 w-auto md:h-12"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:hidden">
              <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
                Media Partner
              </span>
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/medias/logo_media_1.png"
                  width={60}
                  height={50}
                  alt="Media Partner 1"
                  className="h-auto w-auto"
                />
                <Image
                  src="/medias/logo_media_2.png"
                  width={60}
                  height={50}
                  alt="Media Partner 2"
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="flex flex-col items-center border-r-0 border-b border-[#BDBDBD] px-4 pb-6 sm:border-r md:border-r md:border-b-0 md:py-6 lg:border-r">
            <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
              Partners
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image
                src="/partners/logo_partner_1.png"
                width={180}
                height={50}
                alt="Kota Malang"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_2.png"
                width={180}
                height={50}
                alt="Dekopinda Kota Malang"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_3.png"
                width={180}
                height={50}
                alt="Koni Kota Malang"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_4.png"
                width={180}
                height={50}
                alt="Karang Taruna"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_5.png"
                width={180}
                height={50}
                alt="Arema Music Tribute"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_6.png"
                width={180}
                height={50}
                alt="Amazing Malang Eat"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_7.png"
                width={180}
                height={50}
                alt="AACE"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_8.png"
                width={180}
                height={50}
                alt="Multiverse"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_9.png"
                width={180}
                height={50}
                alt="MMAC"
                className="h-5 w-auto md:h-8"
              />
              <Image
                src="/partners/logo_partner_10.png"
                width={180}
                height={50}
                alt="Mbois Mart"
                className="h-5 w-auto md:h-8"
              />
            </div>
          </div>

          {/* Collaborators */}
          <div className="flex flex-col items-center border-r-0 border-b border-[#BDBDBD] px-4 pb-6 sm:border-r md:border-r md:border-b-0 md:py-6 lg:border-r">
            <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
              Collaborators
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Image
                src="/collaborators/logo_collab_1.png"
                width={180}
                height={50}
                alt="Collaborator 1"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_2.png"
                width={180}
                height={50}
                alt="Collaborator 2"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_3.png"
                width={180}
                height={50}
                alt="Collaborator 3"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_4.png"
                width={180}
                height={50}
                alt="Collaborator 4"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_5.png"
                width={180}
                height={50}
                alt="Collaborator 5"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_6.png"
                width={180}
                height={50}
                alt="Collaborator 6"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_7.png"
                width={180}
                height={50}
                alt="Collaborator 7"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_8.png"
                width={180}
                height={50}
                alt="Collaborator 8"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_9.png"
                width={180}
                height={50}
                alt="Collaborator 9"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_10.png"
                width={180}
                height={50}
                alt="Collaborator 10"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_11.png"
                width={180}
                height={50}
                alt="Collaborator 11"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_12.png"
                width={180}
                height={50}
                alt="Collaborator 12"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_13.png"
                width={180}
                height={50}
                alt="Collaborator 13"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_14.png"
                width={180}
                height={50}
                alt="Collaborator 14"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_15.png"
                width={180}
                height={50}
                alt="Collaborator 15"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_16.png"
                width={180}
                height={50}
                alt="Collaborator 16"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_17.png"
                width={180}
                height={50}
                alt="Collaborator 17"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_18.png"
                width={180}
                height={50}
                alt="Collaborator 18"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_19.png"
                width={180}
                height={50}
                alt="Collaborator 19"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_20.png"
                width={180}
                height={50}
                alt="Collaborator 20"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_21.png"
                width={180}
                height={50}
                alt="Collaborator 21"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_22.png"
                width={180}
                height={50}
                alt="Collaborator 22"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_23.png"
                width={180}
                height={50}
                alt="Collaborator 23"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_24.png"
                width={180}
                height={50}
                alt="Collaborator 24"
                className="h-5 w-auto md:h-6"
              />
              <Image
                src="/collaborators/logo_collab_25.png"
                width={180}
                height={50}
                alt="Collaborator 25"
                className="h-5 w-auto md:h-6"
              />
            </div>
          </div>

          {/* Media Partner */}
          <div className="hidden flex-col items-center border-r-0 border-b border-[#BDBDBD] px-4 pb-6 sm:border-r md:flex md:border-r md:border-b-0 md:py-6 lg:border-r">
            <span className="mb-4 text-xs font-semibold tracking-widest text-black/50 uppercase">
              Media Partner
            </span>
            <div className="flex flex-col flex-wrap items-center justify-center gap-4">
              <Image
                src="/medias/logo_media_1.png"
                width={180}
                height={50}
                alt="Media Partner 1"
                className="h-20 w-auto md:h-22"
              />
              <Image
                src="/medias/logo_media_2.png"
                width={180}
                height={50}
                alt="Media Partner 2"
                className="h-20 w-auto md:h-22"
              />
              <Image
                src="/medias/logo_media_3.png"
                width={180}
                height={50}
                alt="Media Partner 3"
                className="h-20 w-auto md:h-22"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
