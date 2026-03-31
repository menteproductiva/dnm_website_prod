"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Modal = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef<HTMLElement>(null);
  const t = useTranslations("home.welcome_window");

  // ---- When Modal is open, disable scroll ----
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset"; // Cleanup on unmount
    };
  }, [isVisible]);

  // ---- Close Modal when "Esc" key is pressed ----
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVisible(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ---- Do not return anything if Modal is not open ----
  if (!isVisible) return null;

  // ---- Close Modal if user clicks outside of it ----
  const handleBackdropClick = (e: React.MouseEvent) => {
    // If the click is on the backdrop (not the <section> or its children)
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  return (
    <div
      className="top-0 z-50 fixed flex bg-black/20 w-screen h-screen"
      onClick={handleBackdropClick}
    >
      <section
        className="relative flex flex-col gap-5 m-auto px-2 md:px-10 xl:px-14 py-10 md:py-10 xl:py-14 w-5/6 md:w-fit h-fit text-white align-middle"
        ref={modalRef}
      >
        {/* Background and border gradient  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="top-0 left-0 z-0 absolute w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient
              id="modalGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="white" stopOpacity=".5" />
              <stop offset="25%" stopColor="var(--color-primary2-500)" />
              <stop offset="75%" stopColor="var(--color-primary2-500)" />
              <stop offset="100%" stopColor="black" />
            </linearGradient>
          </defs>

          <rect
            x="0.25%"
            y=".5%"
            width="99.5%"
            height="99%"
            // className="rounded-2xl"
            rx="3vh"
            ry="3vh"
            stroke="url(#modalGradient)"
            strokeWidth=".3%"
            fill="#000D"
            style={{
              filter: "drop-shadow( 0px 0px 10px rgba(255, 255, 255, .25))",
            }}
          />
        </svg>
        {/* TOP IMAGES  */}
        <p className="relative flex flex-row justify-center gap-5 h-20 -10">
          <Image
            src="/branding/isotipo.svg"
            alt="isotipo.svg"
            height={200}
            width={200}
            className="w-1/4 lg:w-auto h-auto lg:h-full"
          />
        </p>

        <p className="relative w-full font-bold text-center">{t("title")}</p>

        <p className="relative flex flex-col gap-2">
          <span className="w-full text-center">
            <span> {t("paragraph1.text1")}</span>
            <span> {t("paragraph1.text2")}</span>
            <span> {t("paragraph1.text3")}</span>
          </span>
          <span className="w-full text-center">
            <span> {t("paragraph2.text1")}</span>
            <span> {t("paragraph2.text2")}</span>
            <span> {t("paragraph2.text3")}</span>
            <br />
            <span className="text-primary2-500">{t("link")} </span>
          </span>

          <span className="w-full text-center">
            <span> {t("paragraph3.text1")}</span>
            <span> {t("paragraph3.text2")}</span>
            <span> {t("paragraph3.text3")}</span>
          </span>
        </p>

        <p className="relative flex md:flex-row flex-col justify-center md:justify-around items-center gap-5 md:gap-0 w-full text-sm md:text-lg">
          <Link
            href="/"
            className="bg-primary2-500 md:mt-auto px-5 md:px-6 py-2 md:py-3 border-2 border-primary2-500 rounded-xl w-3/5 md:w-2/5 text-center"
          >
            {t("btn_gift")}
          </Link>
          <span
            onClick={() => {
              setIsVisible(false);
            }}
            className="px-5 md:px-6 py-2 md:py-3 border-2 border-primary2-500 rounded-xl w-3/5 md:w-2/5 text-center cursor-pointer"
          >
            {t("btn_explore")}
          </span>
        </p>
      </section>
    </div>
  );
};
