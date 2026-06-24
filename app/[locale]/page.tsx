import { Hero } from "../components/sections/home/hero";
import { SectionSeparator } from "../components/sectionSeparator";
import { Introduction } from "../components/sections/home/introduction";
import { Solutions } from "../components/sections/home/solutions";
import { Branding } from "../components/sections/home/branding";
import { Method } from "../components/sections/home/method";
import { AboutUs } from "../components/sections/home/aboutUs";
import { AboutUsOld } from "../components/sections/home/aboutUsOld";
import { StrategicCases } from "../components/sections/home/strategicCases";
import { ContactForm } from "../components/sections/home/contactForm";
import { BannerGlow } from "../components/sections/home/footerGlow";
import { MediaQueryIndicator } from "../components/mediaQueryIndicator";
import { SquareBanner } from "../components/sections/home/squareBanner";

export default function Home() {
  return (
    <main className="relative justify-center items-center bg-black dark:bg-black font-sans">
      {/* <MediaQueryIndicator /> */}
      <Hero />

      <div className="relative flex flex-col gap-10 bg-black overflow-x-hidden">
        <div className="px-2 lg:px-0">
          <SectionSeparator />
        </div>
        {/* ----- Section 02 - Introduction ----- */}
        <div className="px-2 lg:px-0 w-full snap-center">
          <div className="lg:mx-auto lg:w-3/4">
            <Introduction />
          </div>
        </div>
        {/* ----- Section 03 ----- */}
        {/* <div className="px-2 lg:px-0">
          <div className="lg:mx-auto lg:w-3/4">
            <Solutions />
            <Branding />
          </div>
        </div> */}
        {/* ----- Section 04 - Steps ----- */}
        <div className="relative px-2 lg:px-0">
          <div className="lg:mx-auto lg:w-3/4">
            <Method />
          </div>
        </div>
        {/* ----- Section 05 - Banner ----- */}
        {/* <div className="px-2 lg:px-0">
          <div className="hidden xl:px-[100px]">
            <AboutUsOld />
          </div>
        </div> */}

        <div className="px-2 lg:px-0">
          <SquareBanner />
        </div>

        <div className="">
          <div className="">
            <AboutUs />
          </div>
        </div>
        {/* ----- Section 06 - Carousel ----- */}
        <div className="px-2 lg:px-0" id="section-cases">
          <div className="xl:px-[100px]">
            <StrategicCases />
          </div>
        </div>

        {/* ----- Section 07 - Banner2 ----- */}
        <div className="px-2 lg:px-0">
          <div className="lg:mx-auto lg:w-3/4">
            <BannerGlow />
          </div>
        </div>

        {/* ----- Section 08 - Form ----- */}
        <div className="" id="section-contact-form">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
