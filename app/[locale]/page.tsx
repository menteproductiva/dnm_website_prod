import { Hero } from "../components/sections/hero";
import { SectionSeparator } from "../components/sectionSeparator";
import { Introduction } from "../components/sections/introduction";
import { Solutions } from "../components/sections/solutions";
import { Branding } from "../components/sections/branding";

export default function Home() {
  return (
    <main className="relative justify-center items-center bg-zinc-50 dark:bg-black font-sans">
      <Hero />

      <div className="relative bg-black px-2 lg:px-40">
        <SectionSeparator />
        <Introduction />
        <Solutions />
        <Branding />
      </div>
    </main>
  );
}
