"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionSeparator } from "../../sectionSeparator";
import Link from "next/link";
import { ArrowRightUp, Instagram, WhatsApp } from "../../icons/icons";

export const Footer = () => {
  const [visiblePercentage, setVisiblePercentage] = useState(0);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const buttonsDesign =
    "flex flex-row justify-center items-center gap-2 px-5 py-2 rounded-xl w-full lg:w-2/5 ";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisiblePercentage(entry.intersectionRatio * 100);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  const t = useTranslations("layout.section_footer");
  return (
    <div
      className="z-0 relative flex flex-col items-center bg-black w-full overflow-hidden"
      ref={footerRef}
    >
      {/* -------------------- CONTENT  -------------------- */}
      <div className="z-10 relative flex flex-col gap-10 px-5 py-20 w-full lg:w-2/4 text-white">
        {/* Title  */}
        <div className="flex flex-col justify-between items-center gap-5 text-center">
          <Image
            src="/branding/isotipo.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <h2>
            {t("title.0")}
            <span className="text-primary2-500">{t("title.1")} </span>
            {t("title.2")}
          </h2>

          <p>{t("text")}</p>
        </div>
        {/*  BUTTONS   */}
        <div className="flex lg:flex-row flex-col justify-around gap-2 uppercase">
          <Link href="/" className={buttonsDesign + " bg-green-500 "}>
            <WhatsApp />
            <span className="ml-2">Explorar caso</span>
          </Link>

          <Link
            href="/#section-cases"
            className={buttonsDesign + " border-2 border-primary2-500"}
          >
            <span className="ml-2">Casos estrategicos</span>
            <ArrowRightUp size={15} strokeWidth={4} />
          </Link>
        </div>
      </div>
      {/* -------------------- DECORATIONS  -------------------- */}
      {/* Animated Glow  */}
      <svg className="z-0 mx-auto w-2/3 h-1 object-fill overflow-visible">
        <defs>
          <radialGradient
            id="radialGlowFooter"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity=".4" />
            <stop offset="50%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#9f6637" stopOpacity="0.0" />
          </radialGradient>
        </defs>

        <ellipse
          cx="50%"
          cy="100%"
          ry="50vh"
          rx={`${visiblePercentage >= 10 ? visiblePercentage : 0}%`} // ternary used to prevent radius from going into negative values
          // fill="red"
          fill="url(#radialGlowFooter)"
          stroke="white"
          strokeWidth={0}
          opacity={0.8}
          className="duration-500"
        />
      </svg>
      {/* Gradient decorator */}
      <div
        className={` bg-linear-to-r from-black via-primary2-500 to-black  h-1 w-full `}
      />
      {/* -------------------- Footer's footer  -------------------- */}
      <div className="relative bg-black py-5 w-full">
        <div className="flex flex-row justify-between items-center gap-5 mx-auto w-2/3">
          <p className="text-center">
            &copy; {currentYear} DNM. {t("copyright")}
          </p>

          <Link
            href="/"
            className="flex flex-row justify-end items-center gap-2 text-center"
          >
            <Instagram />
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};
