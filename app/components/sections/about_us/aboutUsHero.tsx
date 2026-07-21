"use client";
import Image from "next/image";
import { ArrowRightDown, ArrowSimpleDown, LongArrow } from "../../icons/icons";
import { Modal } from "../../modal";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation"; // Use 'next/navigation' for App Router
import Link from "next/link";
import NoiseBackground from "../../noiseBackground";
import GlowBackground from "../../glowBackground";
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";
import { PiArrowRightThin } from "react-icons/pi";

export const AboutUsHero = () => {
  const t = useTranslations("about_us.section_hero");
  const locale = useLocale();
  const leadershipLink = `/${locale}/about_us#section-leadership`;
  const whoWeAreLink = `/${locale}/about_us#section-who-we-are`;

  // -------------------- Check if the link comes from a conference url --------------------
  const [showModal, setShowModal] = useState(false); // If it comes from a conference url, show the modal
  const searchParams = useSearchParams();
  useEffect(() => {
    // Check if the specific query param exists
    const conferenceId = searchParams.get("conference-id");

    if (conferenceId) {
      setShowModal(true);
    }
  }, [searchParams]);

  // -------------------- Check if the link comes from a conference url --------------------
  const FadeInAnimation = {
    animation: "OpacityFrames linear",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };
  return (
    <>
      <Modal isVisible={showModal} setIsVisible={setShowModal} />
      <section className="flex flex-col justify-around items-center lg:px-0 py-10 md:py-20 lg:pt-20 2xl:pt-30 lg:pb-10 xl:pb-5 w-screen h-[98svh]">
        {/* ---------- Backgrounds ----------   */}
        <>
          <div className="top-0 absolute w-screen h-screen object-fill overflow-visible">
            <NoiseBackground />
          </div>

          <div className="top-0 left-0 absolute w-screen h-screen object-fill">
            <GlowBackground left />
          </div>
        </>

        {/* ---------- Content ----------   */}
        <div className="relative flex md:flex-row flex-col-reverse justify-center md:justify-between gap-5 md:gap-0 md:mx-auto p-5 md:px-0 md:w-11/12 lg:w-3/4 h-full">
          {/* Text */}
          <div className="flex flex-col justify-center w-full md:w-6/12">
            <div
              className="mb-3 md:mb-4 w-fit"
              style={{
                ...FadeInAnimation,
                animationDelay: ".6s",
              }}
            >
              <h1 className="flex flex-row gap-3 bg-black/30 px-5 py-2 border border-primary2-500 rounded-full w-fit">
                <span className="bg-primary2-500 my-auto rounded-full w-3 h-3" />
                <span className="text-white">{t("pre-title")}</span>
              </h1>
            </div>
            <h2
              className="mb-6 md:mb-8"
              style={{
                ...FadeInAnimation,
                animationDelay: ".7s",
              }}
            >
              <span className="font-normal text-white text-5xl md:text-7xl">
                {t("title.0")}
              </span>
              <span className="font-normal text-primary2-500 text-5xl md:text-7xl">
                {t("title.1")}
              </span>
            </h2>
            {/* Body */}
            <p
              className="mb-7 md:mb-10"
              style={{
                ...FadeInAnimation,
                animationDelay: ".8s",
              }}
            >
              {t("text")}
            </p>
            {/* Buttons  */}
            <div
              className="flex flex-row gap-5"
              style={{
                ...FadeInAnimation,
                animationDelay: ".9s",
              }}
            >
              <Link
                href="/"
                className="group flex flex-row justify-center items-center gap-2 bg-primary2-500 p-2 md:p-3 rounded-xl w-full text-center uppercase duration-500"
              >
                <span className="text-sm md:text-lg">{t("buttons.0")}</span>
                <LongArrow className="my-auto rotate-90 group-hover:translate-x-2 duration-500" />
              </Link>
              <Link
                href={leadershipLink}
                className="group flex flex-row justify-center items-center gap-2 bg-black hover:bg-primary2-500 p-2 md:p-3 border border-primary2-500 rounded-xl w-full text-center uppercase duration-500"
              >
                <span className="text-sm md:text-lg">{t("buttons.1")}</span>
                <LongArrow className="my-auto rotate-90 group-hover:translate-x-2 duration-500" />
              </Link>
            </div>
          </div>
          {/* Icon */}
          <div
            className="flex mx-auto md:mx-0 p-1 w-3/4 md:w-5/12"
            style={{
              ...FadeInAnimation,
              animationDelay: ".5s",
            }}
          >
            <div className="relative mx-auto my-auto w-2/3 aspect-square">
              {/* Glow Effect */}
              <svg
                className="z-0 absolute inset-0 opacity-50 w-full h-full overflow-visible pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="heroGlow">
                    <stop offset="0%" stopColor="#f9f0ea" stopOpacity="0.7" />
                    <stop
                      offset="40%"
                      stopColor="var(--color-primary2-500, #3b82f6)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="transparent"
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>

                <circle
                  cx={`50%`}
                  cy={`50%`}
                  r="60%"
                  fill="url(#heroGlow)"
                  className="transition-all ease-out"
                />
              </svg>
              {/* Inner, center image */}
              <Image
                src="/branding/circular_logo.svg"
                alt="hero"
                width={1000}
                height={1000}
                className="absolute"
                style={{
                  maskImage:
                    "radial-gradient(circle, black 50%, transparent 30%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, black 50%, transparent 30%)",
                }}
              />
              {/* Spinning, outer image */}
              <Image
                src="/branding/circular_logo.svg"
                alt="hero"
                width={1000}
                height={1000}
                className="absolute animate-spin"
                style={{
                  maskImage:
                    "radial-gradient(circle, transparent 50%, black 30%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, transparent 50%, black 30%)",
                  animationDuration: "60s",
                  transformOrigin: "center",
                }}
              />
            </div>
          </div>
        </div>

        {/* ---------- Footer ----------   */}
        <div className="bg-white/20 my-5 w-11/12 lg:w-3/4 h-0.5" />
        <div className="flex flex-row justify-between md:p-0 px-5 w-full md:w-11/12 lg:w-3/4 text-neutral2-500">
          <Link
            href={whoWeAreLink}
            className="group z-10 flex flex-row gap-2 my-auto"
          >
            <span>{t("footer.meet_us")}</span>
            <ArrowSimpleDown
              className="my-auto w-4 h-4 group-hover:animate-bounce duration-1000"
              color="var(--color-primary2-500)"
            />
          </Link>
          <div className="flex md:flex-row flex-col gap-0 md:gap-7">
            <p className="text-center">{t("footer.personal_branding")}</p>
            <p className="hidden md:block bg-neutral2-500 my-auto rounded-full w-1 h-1" />
            <p className="text-center">{t("footer.business_branding")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

//
