import HeroSection from "@/components/sections/hero";
import TicketSection from "@/components/sections/ticket";
import AboutSection from "@/components/sections/about";
import EvolutionSection from "@/components/sections/evolution";
import FaqSection from "@/components/sections/faq";
import PillarSection from "@/components/sections/pillar-section";
import LineUpArtist from "@/components/sections/line-up-artist";
import KeySpeaker from "@/components/sections/key-speaker";
import YourRoleSection from "@/components/sections/your-role-section";

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col overflow-x-hidden">
      <div className="relative isolate w-full overflow-hidden">
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
    </main>
  );
}
