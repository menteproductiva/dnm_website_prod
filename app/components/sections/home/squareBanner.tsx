"use client";
import { useElementIntersectsScreen } from "@/app/hooks/useElementIntersectsScreen";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export const SquareBanner = () => {
  const t = useTranslations("home.section_square_banner");

  // -------------------- Check when element enters the screen, trigger animations ------------------------------
  const containerRef = useRef<HTMLDivElement>(null);
  const { intersecting } = useElementIntersectsScreen(containerRef);

  return (
    <section id="section-about-us" ref={containerRef}>
      <div
        className={`relative my-10 mx-auto h-fit text-white align-middle duration-500 w-full lg:w-1/2  `}
      >
        {/* ------------------  Banner background and decorative corners ------------------- */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="top-0 left-0 z-0 absolute w-full h-full overflow-visible"
        >
          <defs>
            {/* Mask for corner glow */}
            <mask id="banner-about-us-glow-mask">
              {/* // Background  */}
              <rect
                id="banner-about-us-gradient-border-rect-template"
                y="-10%"
                x="-10%"
                width="120%"
                height="120%"
                strokeWidth="5"
                fill="white"
                stroke="none"
              />
              {/* Horizontal Cut  */}
              <rect
                id="banner-about-us-gradient-border-rect-template"
                x="-10%"
                y={intersecting ? "30%" : "50%"}
                width="120%"
                height={intersecting ? "40%" : "0%"}
                strokeWidth="5"
                fill="black"
                stroke="none"
                className="duration-1000 delay-500"
              />
              {/* vertical cut  */}
              <rect
                id="banner-about-us-gradient-border-rect-template"
                y="-10%"
                x={intersecting ? "10%" : "50%"}
                width={intersecting ? "80%" : "0%"}
                height="120%"
                strokeWidth="5"
                fill="black"
                stroke="none"
                className="duration-1000 delay-500"
              />
            </mask>
          </defs>

          {/* thin  border */}
          <rect
            id="banner-about-us-gradient-border-rect-template"
            x="0.25%"
            y=".5%"
            width="99.5%"
            height="99%"
            strokeWidth="1"
            fill="#000D"
            stroke="var(--color-primary2-500)"
          />
          {/* thick, corner borders  */}
          <rect
            id="banner-about-us-gradient-border-rect-template"
            x="0.25%"
            y=".5%"
            width="99.5%"
            height="99%"
            strokeWidth="5"
            fill="#000D"
            stroke="var(--color-primary2-500)"
            mask="url(#banner-about-us-glow-mask)"
          />
        </svg>
        {/* ------------------- Content ------------------- */}
        <div className="relative flex flex-col gap-5 md:px-20 py-10 rounded-2xl w-full h-full">
          <h1
            className="w-full text-center duration-1000 delay-500"
            style={
              intersecting
                ? {
                    opacity: 1,
                  }
                : { opacity: 0 }
            }
          >
            {t("title-prologue")}
          </h1>
          <h2
            className="w-full text-center uppercase duration-1000 delay-700"
            style={{
              textTransform: "initial",
              opacity: intersecting ? 1 : 0,
            }}
          >
            {t("title")}
          </h2>
        </div>
      </div>
    </section>
  );
};
