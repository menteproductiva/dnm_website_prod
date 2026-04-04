"use client";
import Image from "next/image";
import { ArrowRightDown } from "../icons/icons";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("home.section_target");

  return (
    <section
      className={` relative flex overflow-visible flex-col justify-around lg:justify-between items-center py-20 md:py-40 w-full h-full `}
    >
      {/* ---------- Glow Background ----------   */}
      <svg
        className="top-0 left-0 z-0 absolute w-screen h-full object-fill overflow-visible"
        stroke="white"
        strokeWidth={0}
      >
        <defs>
          <radialGradient
            id="footerGlow"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#f9f0ea" stopOpacity=".7" />
            <stop
              offset="40%"
              stopColor="var(--color-primary2-500)"
              stopOpacity="0.5"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        <circle
          cx="50%"
          cy="50%"
          r="75%"
          fill="url(#footerGlow)"
          opacity={0.5}
          stroke="white"
          className="md:hidden"
        />
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          fill="url(#footerGlow)"
          opacity={0.5}
          className="hidden lg:hidden md:block"
          stroke="white"
        />
        <circle
          cx="50%"
          cy="50%"
          r="35%"
          fill="url(#footerGlow)"
          opacity={0.5}
          className="hidden lg:block"
          stroke="white"
        />
      </svg>

      {/* ---------- Hero Title ----------   */}
      <div className="flex flex-col gap-3 md:gap-5 w-full">
        <Image
          src="/branding/isotipo.svg"
          alt="isotipo.svg"
          height={200}
          width={200}
          className="mx-auto w-15 md:w-20 h-auto object-contain"
        />
        <p className="mx-auto w-full md:w-2/3 text-white text-lg md:text-3xl xl:text-4xl 2xl:text-5xl text-center">
          {t("title")}
        </p>
      </div>
    </section>
  );
};
