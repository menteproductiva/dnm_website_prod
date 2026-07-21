"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionSeparator } from "../../sectionSeparator";
import Link from "next/link";
import {
  ArrowRightUp,
  Email,
  Instagram,
  Tiktok,
  WhatsApp,
} from "../../icons/icons";
import { currentYear, WhatsAppLink } from "@/app/constants/constants";

export const Footer = () => {
  const [visiblePercentage, setVisiblePercentage] = useState(0);
  const footerRef = useRef(null);

  const buttonsDesign =
    "flex flex-row group justify-center duration-500 items-center gap-2 py-5 px-13 rounded-xl w-full lg:w-auto ";

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
  const socialsClassname = `p-2 duration-500 rounded-full relative overflow-hidden group `;

  const t = useTranslations("layout.section_footer");
  return (
    <div
      className="z-0 relative flex flex-col items-center bg-black w-full overflow-hidden"
      ref={footerRef}
    >
      {/* -------------------- CONTENT  -------------------- */}
      <div className="z-10 relative flex flex-col gap-10 px-5 py-20 w-full lg:w-3/5 text-white">
        {/* Title  */}
        <div className="flex flex-col justify-between items-center gap-5 text-center">
          <Image
            src="/branding/isotipo.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <h2 className="">
            <span className="text-6xl">{t("title.0")} </span>
            <span className="text-primary2-500 text-6xl">{t("title.1")} </span>
            <span className="text-6xl">{t("title.2")}</span>
          </h2>

          <p className="text-neutral2-500 md:text-xl">{t("text")}</p>
        </div>
        {/*  BUTTONS   */}
        <div className="flex lg:flex-row flex-col justify-around gap-2 uppercase">
          <Link
            // href={strategicCasesLink}
            href={WhatsAppLink}
            className={buttonsDesign + " bg-green-500 hover:bg-green-600 "}
          >
            <WhatsApp className="group-hover:-translate-y-2 duration-500" />
            <span className="ml-2">{t("buttons.0")}</span>
          </Link>

          <Link
            href="/#section-cases"
            className={
              buttonsDesign +
              " border-2 border-primary2-500 hover:bg-primary2-500 "
            }
          >
            <span className="ml-2">{t("buttons.1")}</span>

            <ArrowRightUp
              size={15}
              strokeWidth={4}
              className="group-hover:-translate-y-2 group-hover:translate-x-2 duration-500"
            />
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

          <div className="flex flex-row gap-7">
            <Link
              className={socialsClassname + " "}
              href="https://www.instagram.com/dnm.mx/"
            >
              <div className="top-0 left-0 absolute bg-linear-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />
              <Instagram
                color="#fff"
                size={20}
                strokeWidth={0.5}
                className="relative"
              />
            </Link>
            <Link className={socialsClassname + ""} href={WhatsAppLink}>
              <div className="top-0 left-0 absolute bg-linear-to-b from-green-400 to-green-700 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />

              <WhatsApp
                color="#fff"
                size={20}
                strokeWidth={0.5}
                className="relative"
              />
            </Link>
            <Link
              className={socialsClassname + " "}
              href="https://www.tiktok.com/@dnm.mx?_r=1&_t=ZS-97oZc3ViYcR"
            >
              <div className="top-0 left-0 absolute bg-linear-to-b from-cyan-500 to-red-500 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />
              <Tiktok
                color="#fff"
                size={20}
                strokeWidth={5}
                className="relative"
              />
            </Link>

            <Link
              className={socialsClassname + " "}
              href="mailto:contacto@agenciadnm.com"
            >
              <div className="top-0 left-0 absolute bg-linear-to-b from-primary2-400 to-primary2-700 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />
              <Email color="#fff" size={20} className="relative" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
