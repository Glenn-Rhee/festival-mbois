import HeroSection from "@/components/sections/hero";
import TicketSection from "@/components/sections/ticket";
import AboutSection from "@/components/sections/about";
import EvolutionSection from "@/components/sections/evolution";
import FaqSection from "@/components/sections/faq";
import PillarSection from "@/components/sections/pillar-section";
import LineUpArtist from "@/components/sections/line-up-artist";
import KeySpeaker from "@/components/sections/key-speaker";
import YourRoleSection from "@/components/sections/your-role-section";
import RundownSection from "@/components/sections/rundown-section";
import SponsorsSection from "@/components/sections/sponsors-section";

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
      {/* <RundownSection /> */}
      <FaqSection />
      <SponsorsSection />
    </main>
  );
}
