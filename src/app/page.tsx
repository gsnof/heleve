import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Specialties } from "@/components/sections/Specialties";
import { Transformations } from "@/components/sections/Transformations";
import { Differentials } from "@/components/sections/Differentials";
import { Team } from "@/components/sections/Team";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhatsAppFloating } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-950 text-warmWhite overflow-hidden relative">
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Transformations />
      <Differentials />
      <Team />
      <Process />
      <Reviews />
      <FAQ />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
