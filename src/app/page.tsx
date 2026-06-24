import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import EvolutionSection from "@/components/sections/evolution";
import StatistikSection from "@/components/sections/statistic";
import FestivalVideoSection from "@/components/sections/festival-video";
import RegistrationSection from "@/components/sections/registration";
import PartnersSection from "@/components/sections/partners";
import ProgramSection from "@/components/sections/program";
import AgendaSection from "@/components/sections/agenda";
import FaqSection from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-brand-navy">
      <div className="relative w-full overflow-hidden isolate">
        {/* ── Background ── */}
        <div
          className="bg-background absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 175vw 0vh, white 0%, transparent 20%),
              radial-gradient(circle at 100vw 0vh, rgba(208, 84, 127, 0.8) 10%, rgba(208, 84, 127, 0.2) 30%, transparent 70%),
              radial-gradient(circle at 100vw 0vh, rgba(190, 80, 255, 0.4) 5%, transparent 20%)
            `,
          }}
        />

        <HeroSection />
        <AboutSection />
      </div>
      <EvolutionSection />
      <StatistikSection />
      <FestivalVideoSection />
      <ProgramSection />
      <AgendaSection />
      <RegistrationSection />
      <PartnersSection />
      <FaqSection />
    </main>
  );
}
