import { useTranslations } from "next-intl";
import { Button } from "../../button";

export const AboutUsOld = () => {
  return (
    <section id="section-about-us">
      <ContentDesktop />
    </section>
  );
};

const ContentDesktop = () => {
  const t = useTranslations("home.section_about_us");

  return (
    <div
      className={`relative   my-10  mx-auto   h-fit text-white align-middle duration-500 w-full  `}
    >
      {/* ------------------  - Banner Background and GradientBorder and Glow ------------------- */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="top-0 left-0 z-0 absolute w-full h-full overflow-visible"
      >
        <defs>
          {/* Rectangle template for window shape */}
          <rect
            id="banner-about-us-gradient-border-rect-template"
            x="0.25%"
            y=".5%"
            width="99.5%"
            height="99%"
            rx="3vh"
            ry="3vh"
            strokeWidth="2"
          />

          {/* Border stroke gradient for outline  */}
          <linearGradient
            id="about-us-banner-vertical-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="20%" stopColor="black" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity=".25" />
            <stop offset="45%" stopColor="var(--color-primary2-500)" />
            <stop offset="55%" stopColor="var(--color-primary2-500)" />
            <stop offset="70%" stopColor="white" stopOpacity=".25" />
            <stop offset="80%" stopColor="black" stopOpacity="0" />
          </linearGradient>
          {/* Glow gradient for corner glow */}
          <radialGradient id="banner-about-us-glow">
            <stop offset="0%" stopColor="#f9f0ea" stopOpacity="0.7" />
            <stop
              offset="40%"
              stopColor="var(--color-primary2-500, #3b82f6)"
              stopOpacity="0.3"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          {/* Mask for corner glow */}
          <mask id="banner-about-us-glow-mask">
            <use
              href="#banner-about-us-gradient-border-rect-template"
              fill="white"
              stroke="white"
              opacity={1}
            />
          </mask>
        </defs>

        {/* Background and GradientBorder */}
        <use
          fill="#000D"
          stroke="url(#about-us-banner-vertical-gradient)"
          href="#banner-about-us-gradient-border-rect-template"
          style={{
            filter: "drop-shadow( 0px 0px 10px rgba(255, 255, 255, .25))",
          }}
        />

        {/* Corner Glow element  */}
        <circle
          cx={`0`}
          cy={`0`}
          r="100%"
          fill="url(#banner-about-us-glow)"
          className="transition-all ease-out"
          mask="url(#banner-about-us-glow-mask)"
          opacity={0.25}
        />
      </svg>
      {/* ------------------- Content ------------------- */}
      <div className="relative flex flex-col gap-5 md:gap-7 lg:gap-10 md:px-20 py-10 rounded-2xl w-full h-full">
        <h2 className="relative p-3 w-full text-center">
          <span className=""> {t("title.0")} </span>
          <span className="text-primary2-500"> {t("title.1")} </span>
        </h2>

        {/* <div className="flex md:flex-row flex-col justify-around items-center gap-5 mx-auto px-5 w-full text-white">
          <Button link="/" text={t("btn")} />
        </div> */}
      </div>
    </div>
  );
};
