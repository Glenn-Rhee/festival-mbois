"use client";

import Link from "next/link";
import { StarParticles } from "../ui/star-particles";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const registrationLinks = [
  "https://docs.google.com/forms/d/e/1FAIpQLSdMTq4E3p2Rx9HDGKoOzNVoOPOLJOlAkYIyMVtRDAmqlxGcLg/viewform?usp=send_form",
  "https://docs.google.com/forms/d/e/1FAIpQLSf0vD7vxkJ6mTx23C6Ic81ekpyfituSA-pMx90iRVK_UOl88g/viewform",
];

export default function RegistrationSection() {
  const { t } = useLanguage();
  return (
    <section
      id="registration"
      className="relative w-full py-24 md:py-32 lg:py-[256px]"
    >
      {/* star ornaments */}
      <StarParticles top={2} left={12} size="medium" glow={true} />
      <StarParticles top={5} right={10} size="large" glow={true} />
      <StarParticles top={8} left={5} size="small" />
      <StarParticles top={12} left={40} size="small" glow={true} />
      <StarParticles top={15} right={25} size="medium" />
      <StarParticles top={18} left={15} size="large" glow={true} />
      <StarParticles top={22} right={5} size="small" glow={true} />

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-widest capitalize">
            <Plus className="size-4" />
            <span>{t.registration.label}</span>
          </div>
          <h2 className="text-neutral-off-white mt-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-[64px] lg:leading-snug">
            {t.registration.title}
          </h2>
          <p className="text-neutral-off-white mt-6 max-w-[870px] text-sm leading-relaxed lg:text-2xl">
            {t.registration.description}
          </p>
        </div>

        {/* Roles Table */}
        <div className="mx-auto mt-20 flex flex-col border-t border-white/10">
          {t.registration.roles.map((role, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border-b border-white/10 pt-6 pb-16 md:flex-row md:items-start md:justify-between"
            >
              {/* Title */}
              <div className="md:w-[25%] lg:w-[25%]">
                <h3 className="text-2xl font-medium text-white lg:text-[32px]">
                  {role.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:w-[40%] lg:w-[35%]">
                <p className="text-neutral-off-white text-sm leading-relaxed lg:text-xl">
                  {role.description}
                </p>
              </div>

              {/* Button */}
              <div className="flex w-full flex-col gap-3 md:w-[25%]">
                <Link
                  href={registrationLinks[index]}
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary-gradient"
                    className="w-full"
                  >
                    {role.buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
