"use client";

import { Accordion } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/context";

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex w-full flex-col items-center bg-transparent px-4 py-14 md:px-16 md:py-18">
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-y-2 text-[#F2F2F2] md:gap-y-4">
          <span className="block text-center text-xs font-medium md:text-base md:font-semibold">
            {t.faq.label}
          </span>
          <h2 className="text-2xl leading-tight font-semibold sm:text-4xl md:text-5xl md:font-medium lg:text-6xl lg:leading-[90.19px]">
            {t.faq.title}
          </h2>
          <p className="w-full max-w-88 text-center text-sm text-[#F2F2F2]/80 sm:text-lg md:max-w-4xl md:text-2xl">
            {t.faq.description}
          </p>
        </div>

        <Accordion items={t.faq.items} />
      </div>
    </section>
  );
}
