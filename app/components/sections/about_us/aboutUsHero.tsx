"use client";
import Image from "next/image";
import { ArrowRightDown, LongArrow } from "../../icons/icons";
import { Modal } from "../../modal";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation"; // Use 'next/navigation' for App Router
import Link from "next/link";
import NoiseBackground from "../../noiseBackground";
import GlowBackground from "../../glowBackground";
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";
import { PiArrowRightThin } from "react-icons/pi";

export const AboutUsHero = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("about_us.section_hero");
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if the specific query param exists
    const conferenceId = searchParams.get("conference-id");

    if (conferenceId) {
      setShowModal(true);
    }
  }, [searchParams]);

  return (
    <>
      <Modal isVisible={showModal} setIsVisible={setShowModal} />
      <section className="flex flex-col justify-around items-center lg:px-0 py-10 md:py-20 lg:pt-30 lg:pb-10 xl:pb-5 w-screen h-[98svh]">
        {/* ---------- Backgrounds ----------   */}
        <div className="top-0 absolute w-screen h-screen object-fill overflow-visible">
          <NoiseBackground />
        </div>

        <div className="top-0 left-0 absolute w-screen h-screen object-fill">
          <GlowBackground left />
        </div>

        {/* ---------- Content ----------   */}
        <div className="relative flex flex-row justify-between lg:mx-auto px-2 lg:px-0 border-white/20 border-b lg:w-3/4 h-full">
          <div className="flex flex-col justify-around w-6/12">
            <div className="w-fit">
              <h1 className="flex flex-row gap-3 bg-black/30 px-5 py-2 border border-primary2-500 rounded-full w-fit">
                <span className="bg-primary2-500 my-auto rounded-full w-3 h-3" />
                <span className="text-white">{t("pre-title")}</span>
              </h1>
            </div>
            <h2 className="">
              <span className="font-normal text-white text-7xl">
                {t("title.0")}
              </span>
              <span className="font-normal text-primary2-500 text-7xl">
                {t("title.1")}
              </span>
            </h2>
            <p>{t("text")}</p>

            <div className="flex flex-row gap-5">
              <Link
                href="/"
                className="flex flex-row justify-center items-center gap-2 bg-primary2-500 p-3 rounded-xl w-full text-center uppercase"
              >
                <span className="">{t("buttons.0")}</span>
                <LongArrow className="my-auto rotate-90" />
              </Link>
              <Link
                href="/"
                className="flex flex-row justify-center items-center gap-2 bg-black p-3 border border-primary2-500 rounded-xl w-full text-center uppercase"
              >
                <span>{t("buttons.1")}</span>
                <LongArrow className="my-auto rotate-90" />
              </Link>
            </div>
          </div>

          <div className="flex p-1 w-5/12">
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
      </section>
    </>
  );
};

//
