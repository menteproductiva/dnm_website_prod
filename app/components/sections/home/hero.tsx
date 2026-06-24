"use client";
import Image from "next/image";
import { Modal } from "../../modal";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation"; // Use 'next/navigation' for App Router
import Link from "next/link";
import NoiseBackground from "../../noiseBackground";
import GlowBackground from "../../glowBackground";
import { ArrowRightUp } from "../../icons/icons";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("home.section_hero");
  const searchParams = useSearchParams();

  const AnimationA = {
    transformOrigin: "50% 60%",
    animation: "OpacityFrames linear",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };

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
      <div className="relative">
        {/* -------------------- FILLER --------------------  */}
        <div className="relative h-[92svh] pointer-events-none" />
        {/* -------------------- ACTUAL CONTENT -------------------- */}
        <div className="top-0 left-0 fixed lg:px-0 w-screen h-[92svh]">
          <section
            className={`top-0  px-4 lg:px-0 lg:w-3/4  relative flex flex-col justify-around  items-center py-10 md:py-20 lg:pt-20 lg:pb-10 xl:pb-5 mx-auto h-full `}
          >
            {/*  Noise Background */}
            <div className="top-0 absolute w-screen h-screen object-fill">
              <NoiseBackground />
            </div>

            {/*  Glow Background*/}
            <div className="top-0 left-0 absolute w-screen h-screen object-fill">
              <GlowBackground />
            </div>

            {/*  Content */}
            <div className="relative flex flex-col 2xl:gap-7 w-full">
              {/* Isotype  */}
              <div
                style={{
                  ...AnimationA,
                  animationDelay: "1s",
                }}
              >
                <Image
                  src="/branding/isotipo.svg"
                  alt="isotipo.svg"
                  height={200}
                  width={200}
                  className="opacity-50 w-2/5 lg:w-1/4 h-auto object-contain duration-1000"
                  priority
                />
              </div>

              {/* Title  */}
              <h2
                className="flex flex-col mt-20 lg:font-semibold text-white uppercase 2xl:leading-18 xl:leading-15"
                style={{
                  ...AnimationA,
                  animationDelay: "2s",
                }}
              >
                <span className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {t("title.0")}
                </span>
                <span className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {t("title.1")}
                </span>
              </h2>

              {/* Subtitle  */}
              <div
                className="flex flex-col gap-4 mt-2 w-full"
                style={{
                  ...AnimationA,
                  animationDelay: "3s",
                }}
              >
                <h1 style={{ textTransform: "none" }}>
                  <span className="text-xl">{t("subtitle")}</span>
                </h1>

                <p>{t("text")}</p>
              </div>

              {/* Buttons  */}
              <div
                className="flex flex-row gap-5 mt-18 w-full items center"
                style={{
                  ...AnimationA,
                  animationDelay: "4s",
                }}
              >
                <Link
                  href="#section-contact-form"
                  className="group flex flex-row items-center gap-2 bg-primary2-500 px-5 py-2 rounded-xl uppercase"
                >
                  {t("buttons.0")}
                  <ArrowRightUp
                    size={10}
                    className="my-auto group-hover:-translate-y-1 group-hover:translate-x-1 duration-500"
                    strokeWidth={5}
                  />
                </Link>
                <Link
                  href="#section-method"
                  className="flex flex-row items-center gap-2 hover:bg-primary2-500 px-5 py-2 border border-primary2-500 rounded-xl uppercase duration-500"
                >
                  {t("buttons.1")}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
