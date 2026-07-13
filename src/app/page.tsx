import HeroSection from "@/components/sections/hero";
import TicketSection from "@/components/sections/ticket";
import AboutSection from "@/components/sections/about";
import EvolutionSection from "@/components/sections/evolution";
import StatistikSection from "@/components/sections/statistic";
import FestivalVideoSection from "@/components/sections/festival-video";
import RegistrationSection from "@/components/sections/registration";
import PartnersSection from "@/components/sections/partners";
import ProgramSection from "@/components/sections/program";
import AgendaSection from "@/components/sections/agenda";
import FaqSection from "@/components/sections/faq";
import PillarSection from "@/components/sections/pillar-section";
import LineUpArtist from "@/components/sections/line-up-artist";
import KeySpeaker from "@/components/sections/key-speaker";
import YourRoleSection from "@/components/sections/your-role-section";
import RundownSection from "@/components/sections/rundown-section";

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col overflow-x-hidden">
      <div className="relative isolate w-full overflow-hidden">
        {/* ── Background ── */}
        <div
          className="bg-background pointer-events-none absolute inset-0 -z-10 mt-0.5"
          style={{
            background: `
    radial-gradient(circle at 175vw 40vh, white 0%, transparent 20%),
    radial-gradient(circle at 100vw 40vh, rgba(246, 29, 137, 0.5) 10%, rgba(246, 29, 137, 0.2) 30%, transparent 70%),
    radial-gradient(circle at 100vw 40vh, rgba(248, 74, 161, 0.4) 5%, transparent 20%)
  `,
          }}
        />

        <HeroSection />
        <TicketSection />
        <AboutSection />
      </div>
      <EvolutionSection />
      <PillarSection />
      <LineUpArtist />
      <KeySpeaker />
      <YourRoleSection />
      <RundownSection />
      <StatistikSection />
      <FestivalVideoSection />
      {/* Unified background wrapper for Program → FAQ */}
      <div className="bg-brand-navy relative w-full overflow-hidden">
        {/* Single smooth glow that spans the entire group */}
        <div className="pointer-events-none absolute top-0 right-0 z-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(227,136,204,0.25)_0%,rgba(227,136,204,0.1)_30%,transparent_65%)] blur-[80px] md:h-[1200px] md:w-[1200px] md:blur-[150px]" />
        <div className="pointer-events-none absolute top-[15%] left-0 z-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(100,40,180,0.12)_0%,rgba(100,40,180,0.05)_35%,transparent_65%)] blur-[80px] md:h-[1000px] md:w-[1000px] md:blur-[130px]" />
        <div className="pointer-events-none absolute top-[40%] left-1/2 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(227,136,204,0.1)_0%,transparent_60%)] blur-[60px] md:h-[900px] md:w-[900px] md:blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-[20%] z-0 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-[radial-gradient(circle,rgba(208,84,127,0.15)_0%,rgba(208,84,127,0.05)_35%,transparent_60%)] blur-[80px] md:h-[1000px] md:w-[1000px] md:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[5%] left-0 z-0 h-[400px] w-[400px] -translate-x-1/4 rounded-full bg-[radial-gradient(circle,rgba(227,136,204,0.12)_0%,transparent_55%)] blur-[60px] md:h-[800px] md:w-[800px] md:blur-[120px]" />

        <ProgramSection />
        <AgendaSection />
        <RegistrationSection />
        <PartnersSection />
        <FaqSection />
      </div>
    </main>
  );
}
