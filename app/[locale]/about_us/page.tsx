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

      {/* -------------------- Section 0 -------------------- */}
      <section
        id="section-who-we-are"
        className="px-2 lg:px-0 w-full snap-center"
      >
        <div className="lg:mx-auto lg:w-3/4">
          <WhoAreWe />
        </div>
      </section>

      {/* -------------------- Section -------------------- */}
      <section className="px-2 lg:px-0" id="section-our-philosophy">
        <div className="lg:mx-auto lg:w-3/4">
          <OurPhilosophy />
        </div>
      </section>
      {/* -------------------- Section  -------------------- */}
      <section className="relative px-2 lg:px-0" id="section-leadership">
        <div className="lg:mx-auto lg:w-3/4">
          <OurLeadership />
        </div>
      </section>

      {/* -------------------- Section  -------------------- */}
      <section className="relative px-2 lg:px-0" id="section-method">
        <div className="lg:mx-auto lg:w-3/4">
          <Method />
        </div>
      </section>

      {/* -------------------- Section 07 - Banner2 -------------------- */}
      <div id="section-our-clients">
        <OurClientsBanner />
      </div>

      <Footer />
    </main>
  );
}
