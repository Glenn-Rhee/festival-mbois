"use client";

import { Plus } from "lucide-react";
import { StarParticles } from "../ui/star-particles";
import { useLanguage } from "@/i18n/context";

export default function AgendaSection() {
  const { t } = useLanguage();

  return (
    <section id="agenda" className="relative w-full">
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

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 py-24 md:py-32 lg:px-[72px] lg:py-[200px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-widest capitalize">
            <Plus className="size-4" />
            <span>{t.agenda.label}</span>
          </div>
          <h2 className="text-neutral-off-white mt-6 text-3xl font-medium tracking-tight md:text-5xl lg:text-[64px] lg:leading-snug">
            {t.agenda.title}
          </h2>
          <p className="text-neutral-off-white mt-6 max-w-[870px] text-sm leading-relaxed lg:text-2xl">
            {t.agenda.description}
          </p>
        </div>

        {/* Coming Soon Box */}
        <div className="mx-auto mt-20 flex max-w-[700px] flex-col items-center justify-center rounded-xl border border-white/20 px-8 py-16 text-center md:mt-28 md:py-20">
          <h3 className="text-neutral-off-white text-2xl font-semibold tracking-tight md:text-3xl lg:text-[40px]">
            {t.agenda.comingSoonTitle}
          </h3>
          <p className="text-neutral-off-white/80 mt-4 text-sm md:text-base lg:text-lg">
            {t.agenda.comingSoonSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
