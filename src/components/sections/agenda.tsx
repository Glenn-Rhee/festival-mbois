"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { StarParticles } from "../ui/star-particles";
import { Plus } from "lucide-react";

const agendaData = [
  {
    day: 1,
    title: "Day 1",
    date: "21 Aug 2026",
    subtitle: "The Opening : From Heritage to Future",
    eventTitle: "Emotional Sportaiment Opening Night",
    headlineArtist: "Sal Priadi",
    image: "/artist_1.webp",
    schedules: [
      {
        time: "10.00 - 17.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Pembukaan Zona Bisnis & Creative Economy Opening Talk.",
          "IP Pitching Session 1 & Komersialisasi Creative Brand Market.",
          "Aktivasi Experience Zone: Eksplorasi AR/VR, AI Playground, dan instalasi digital interaktif.",
        ],
      },
      {
        time: "17.00 - 19.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Sunset Activation, pertunjukan seni jalanan (street performance), dan pembukaan pusat kuliner (food market).",
        ],
      },
      {
        time: "19.00 - 22.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Upacara pembukaan kolosal yang memadukan pertunjukan orkestra, Stadium Projection Mapping, Drone Show, dan Light Show Performance.",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Day 2",
    date: "22 Aug 2026",
    subtitle: "The Experience : Crowd & Transaction Peak",
    eventTitle: "Community Sportainment Night",
    headlineArtist: "Maliq & D'Essentials", // Guessing or placeholder
    image: "/artist_2.webp",
    schedules: [
      {
        time: "10.00 - 17.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Pembukaan Zona Bisnis & Creative Economy Opening Talk.",
          "IP Pitching Session 1 & Komersialisasi Creative Brand Market.",
          "Aktivasi Experience Zone: Eksplorasi AR/VR, AI Playground, dan instalasi digital interaktif.",
        ],
      },
      {
        time: "17.00 - 19.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Sunset Activation, pertunjukan seni jalanan (street performance), dan pembukaan pusat kuliner (food market).",
        ],
      },
      {
        time: "19.00 - 22.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Upacara pembukaan kolosal yang memadukan pertunjukan orkestra, Stadium Projection Mapping, Drone Show, dan Light Show Performance.",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "Day 3",
    date: "23 Aug 2026",
    subtitle: "The Impact : Legacy & Memory",
    eventTitle: "Grand Closing Sportainment Night",
    headlineArtist: "Tulus",
    image: "/artist_3.webp",
    schedules: [
      {
        time: "10.00 - 17.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Pembukaan Zona Bisnis & Creative Economy Opening Talk.",
          "IP Pitching Session 1 & Komersialisasi Creative Brand Market.",
          "Aktivasi Experience Zone: Eksplorasi AR/VR, AI Playground, dan instalasi digital interaktif.",
        ],
      },
      {
        time: "17.00 - 19.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Sunset Activation, pertunjukan seni jalanan (street performance), dan pembukaan pusat kuliner (food market).",
        ],
      },
      {
        time: "19.00 - 22.00 WIB",
        category: "B2B & Tech Exploration",
        items: [
          "Upacara pembukaan kolosal yang memadukan pertunjukan orkestra, Stadium Projection Mapping, Drone Show, dan Light Show Performance.",
        ],
      },
    ],
  },
];

export default function AgendaSection() {
  const [expandedDay, setExpandedDay] = useState<number>(1);

  const toggleDay = (day: number) => {
    if (expandedDay === day) {
      setExpandedDay(0);
    } else {
      setExpandedDay(day);
    }
  };

  return (
    <section id="agenda" className="bg-brand-navy relative w-full">
      <StarParticles top={2} left={12} size="medium" glow={true} />
      <StarParticles top={5} right={10} size="large" glow={true} />
      <StarParticles top={8} left={5} size="small" />
      <StarParticles top={12} left={40} size="small" glow={true} />
      <StarParticles top={15} right={25} size="medium" />
      <StarParticles top={18} left={15} size="large" glow={true} />
      <StarParticles top={22} right={5} size="small" glow={true} />
      <StarParticles top={25} right={15} size="medium" />
      <StarParticles top={28} left={8} size="small" glow={true} />
      <StarParticles top={32} right={45} size="small" />
      <StarParticles top={35} right={8} size="large" glow={true} />
      <StarParticles top={38} left={20} size="medium" />
      <StarParticles top={42} left={5} size="small" glow={true} />
      <StarParticles top={45} right={20} size="small" />
      <StarParticles top={48} left={10} size="large" glow={true} />
      <StarParticles top={52} left={35} size="medium" glow={true} />
      <StarParticles top={55} right={12} size="small" />
      <StarParticles top={58} left={18} size="small" glow={true} />
      <StarParticles top={62} right={5} size="large" glow={true} />
      <StarParticles top={65} right={25} size="medium" />
      <StarParticles top={68} left={5} size="small" glow={true} />
      <StarParticles top={72} right={38} size="small" />
      <StarParticles top={75} right={8} size="large" glow={true} />
      <StarParticles top={78} left={12} size="medium" />
      <StarParticles top={82} left={8} size="small" glow={true} />
      <StarParticles top={85} right={18} size="small" glow={true} />
      <StarParticles top={88} left={25} size="large" glow={true} />
      <StarParticles top={92} left={42} size="medium" />
      <StarParticles top={95} left={15} size="small" glow={true} />
      <StarParticles top={98} right={10} size="large" glow={true} />
      <StarParticles bottom={5} right={18} size="small" glow={true} />
      <StarParticles bottom={8} left={25} size="large" glow={true} />
      <StarParticles bottom={2} left={42} size="medium" />
      <StarParticles bottom={1} left={15} size="small" glow={true} />
      <StarParticles bottom={8} right={10} size="large" glow={true} />
      {/* Background Glow */}
      <div className="absolute -top-1/2 left-0 z-20 h-[250px] w-[250px] -translate-x-3/5 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(227,136,204,0.5)_15%,rgba(227,136,204,0.2)_40%,transparent_70%)] blur-2xl md:h-[900px] md:w-[900px] md:blur-[120px]" />
      <div className="absolute -top-1/2 right-0 z-20 h-[250px] w-[250px] translate-x-3/5 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(227,136,204,0.5)_15%,rgba(227,136,204,0.2)_40%,transparent_70%)] blur-2xl md:h-[900px] md:w-[900px] md:blur-[120px]" />
      <div className="absolute top-1/5 left-1/3 h-[250px] w-[250px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(227,136,204,0.5)_15%,rgba(227,136,204,0.2)_35%,transparent_60%)] blur-2xl md:h-[800px] md:w-[800px] md:blur-[120px]" />

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-widest capitalize">
            <Plus className="size-4" />
            <span>Agenda</span>
          </div>
          <h2 className="text-neutral-off-white mt-6 text-3xl font-medium tracking-tight md:text-5xl lg:text-[64px] lg:leading-snug">
            Saat Kultur Bertemu Teknologi Terdepan.
          </h2>
          <p className="text-neutral-off-white mt-6 max-w-[870px] text-sm leading-relaxed lg:text-2xl">
            Satu stadion, ribu ide, juta karya, satu gerakan. Simak ringkasan
            agenda kolaborasi, eksibisi bisnis, hingga panggung sportainment
            spektakuler Festival Mbois 11.
          </p>
        </div>

        {/* Agenda Table/Grid */}
        <div className="mx-auto mt-20 overflow-hidden rounded-xl border border-white/10">
          {agendaData.map((agenda, index) => {
            const isExpanded = expandedDay === agenda.day;
            const isLast = index === agendaData.length - 1;

            return (
              <div
                key={agenda.day}
                className={`grid grid-cols-1 md:grid-cols-[1fr_2.5fr] ${
                  !isLast ? "border-b border-white/10" : ""
                }`}
              >
                {/* Left Column (Date & Summary) */}
                <div className="flex flex-col items-start border-b border-white/10 p-8 md:border-r md:border-b-0 lg:p-12">
                  <h3 className="text-neutral-off-white text-2xl font-semibold">
                    {agenda.title}
                  </h3>
                  <p className="text-neutral-off-white my-1.5 font-semibold">
                    {agenda.date}
                  </p>
                  <p className="text-neutral-off-white max-w-[200px] text-sm leading-relaxed">
                    {agenda.subtitle}
                  </p>

                  <Button variant={"outline"} className="mt-4 w-full">
                    Get a Ticket
                  </Button>
                </div>

                {/* Right Column (Details) */}
                <div className="bg-transparent p-8 lg:p-12">
                  <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => toggleDay(agenda.day)}
                  >
                    <h4 className="text-neutral-off-white text-lg font-medium lg:text-2xl">
                      {agenda.eventTitle}
                    </h4>
                  </div>

                  <div className="relative mt-8 aspect-21/9 w-full overflow-hidden rounded-xl">
                    <img
                      src={agenda.image}
                      alt={agenda.headlineArtist}
                      className="h-full w-full object-cover object-top opacity-80"
                    />
                  </div>

                  <div className="mt-8">
                    <p className="text-neutral-off-white text-[10px] font-medium capitalize lg:text-xl">
                      Headline Artist
                    </p>
                    <h3 className="text-neutral-off-white mt-2 text-3xl font-medium lg:text-5xl">
                      {agenda.headlineArtist}
                    </h3>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Timeline Items */}
                      {agenda.schedules && agenda.schedules.length > 0 && (
                        <div className="mt-8 mb-4 flex flex-col gap-10">
                          {agenda.schedules.map((schedule, i) => (
                            <div key={i}>
                              <h5 className="text-neutral-off-white text-sm font-semibold lg:text-xl">
                                {schedule.time}
                              </h5>
                              <p className="text-neutral-off-white my-4 text-sm font-semibold lg:text-xl">
                                {schedule.category}
                              </p>
                              <ul className="text-neutral-off-white marker:text-neutral-off-white list-disc space-y-2 pl-5 text-sm leading-relaxed font-light lg:text-base">
                                {schedule.items.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    variant={"outline"}
                    className="mt-6 w-full"
                    onClick={() => toggleDay(agenda.day)}
                  >
                    {isExpanded ? "Less Detail -" : "See Detail +"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
