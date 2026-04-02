import { Hero } from "../components/sections/hero";
import { SectionSeparator } from "../components/sectionSeparator";
import { Introduction } from "../components/sections/introduction";
import { Solutions } from "../components/sections/solutions";
import { Branding } from "../components/sections/branding";
import { Method } from "../components/sections/method";
import { AboutUs } from "../components/sections/aboutUs";
import { StrategicCases } from "../components/sections/strategicCases";
import { Footer } from "../components/sections/footer";

export default function Home() {
  return (
    <main className="relative justify-center items-center bg-black dark:bg-black font-sans">
      <Hero />

      <div className="relative bg-black px-2 lg:px-40">
        <SectionSeparator />
        <Introduction />
        <Solutions />
        <Branding />
        <Method />
        <AboutUs />
        <StrategicCases />
        <Footer />
      </div>
    </main>
  );
}
