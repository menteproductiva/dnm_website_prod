import { MediaQueryIndicator } from "@/app/components/mediaQueryIndicator";
import { Footer } from "@/app/components/sections/layout/footer";
import { AboutUsHero } from "@/app/components/sections/about_us/aboutUsHero";
import { OurClientsBanner } from "@/app/components/sections/about_us/ourClientsBanner";
import { OurLeadership } from "@/app/components/sections/about_us/ourLeadership";
import { OurPhilosophy } from "@/app/components/sections/about_us/ourPhilosophy";
import { WhoAreWe } from "@/app/components/sections/about_us/whoAreWe";
import { Method } from "@/app/components/sections/home/method";
import { SectionSeparator } from "@/app/components/sectionSeparator";

export default function Home() {
  return (
    <main className="justify-center items-center bg-black dark:bg-black font-sans">
      {/* <MediaQueryIndicator /> */}
      <AboutUsHero />

      <SectionSeparator />

      {/* ----- Section 0 ----- */}
      <div className="px-2 lg:px-0 w-full snap-center">
        <div className="lg:mx-auto lg:w-2/3">
          <WhoAreWe />
        </div>
      </div>

      {/* ----- Section ----- */}
      <div className="px-2 lg:px-0">
        <div className="lg:mx-auto lg:w-2/3">
          <OurPhilosophy />
        </div>
      </div>
      {/* ----- Section  ----- */}
      <div className="relative px-2 lg:px-0">
        <div className="lg:mx-auto lg:w-2/3">
          <OurLeadership />
        </div>
      </div>

      {/* ----- Section  ----- */}
      <div className="relative px-2 lg:px-0">
        <div className="lg:mx-auto lg:w-2/3">
          <Method />
        </div>
      </div>

      {/* ----- Section 07 - Banner2 ----- */}
      <OurClientsBanner />

      <Footer />
    </main>
  );
}
