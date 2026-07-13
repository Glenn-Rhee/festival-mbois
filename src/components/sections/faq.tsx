"use client";

import { Accordion } from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex w-full flex-col items-center bg-transparent px-8 py-14 md:px-16 md:py-18">
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-32 flex w-full flex-col items-center text-center">
          <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-widest capitalize">
            <Plus className="size-4" />
            <span>{t.faq.label}</span>
          </div>
          <h2 className="text-neutral-off-white mt-6 text-3xl font-medium tracking-tight md:text-5xl lg:text-6xl lg:leading-snug">
            {t.faq.title}
          </h2>
          <p className="text-neutral-off-white mt-6 max-w-222.5 text-sm leading-relaxed lg:text-2xl">
            {t.faq.description}
          </p>
        </div>

        <Accordion items={t.faq.items} />
      </div>
    </section>
  );
}
