"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function TicketSection() {
  const { t } = useLanguage();

  return (
    <section
      id="ticket"
      className="relative w-full overflow-hidden mt-20"
      style={{ boxShadow: "9px 6px 74px 1px rgba(234, 94, 167, 0.10)" }}
    >
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-[#251524] opacity-[0.92]" />

      {/* Grid pattern (same as evolution section) */}
      <div className="pointer-events-none absolute inset-0 bg-[#0B1030] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* Glow - right side (purple) */}
      <div
        className="absolute top-[250px] left-[55%] h-[644px] w-[1153px]"
        style={{ background: "#23367A", filter: "blur(147.5px)" }}
      />

      {/* Glow - left side (pink) */}
      <div
        className="absolute top-[120px] -left-[59px] w-[459.02px] h-151.75"
        style={{ background: "#68114A", filter: "blur(171px)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex flex-col items-center px-6 py-[72px] text-center md:px-10">
        <h2 className="font-onest max-w-[966px] text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-[70px] lg:leading-[105px]" style={{ textShadow: "0px 0px 8px rgba(255, 255, 255, 0.32)" }}>
          {t.ticket.title}
        </h2>
        <p className="font-onest mt-4 max-w-[698px] text-sm leading-relaxed font-normal text-[#F2F2F2] md:text-lg lg:text-2xl lg:leading-9">
          {t.ticket.description}
        </p>
        <Link
          href="https://festivalmbois.mcf.or.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          <Button className="text-lg shadow-[0px_0px_13.9px_0px_#F12B8E]" variant={"primary-gradient"}>
            {t.ticket.cta}
            <CircleArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
