"use client";
import Image from "next/image";
import { ArrowRightDown } from "../icons/icons";
import { Modal } from "../modal";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation"; // Use 'next/navigation' for App Router
import Link from "next/link";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("home.section_hero");
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
      <div className="relative">
        {/* ACTUAL CONTENT  */}
        <div
          className="top-0 left-0 fixed px-5 lg:px-40 xl:px-80 w-screen"
          style={{ height: "98vh" }}
        >
          <section
            className={`top-0 relative flex flex-col justify-around lg:justify-between items-center py-10 md:py-20 lg:pt-30 lg:pb-20 2xl:pb-20 xl:pb-14 w-full h-full `}
          >
            {/* ---------- Glow Background ----------   */}
            <svg
              className="top-0 left-0 absolute w-screen h-screen object-fill"
              stroke="white"
              strokeWidth={0}
            >
              <defs>
                <radialGradient
                  id="heroGlow"
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
                  <stop
                    offset="100%"
                    stopColor="transparent"
                    stopOpacity="0.5"
                  />
                </radialGradient>
              </defs>

              <circle
                cx="100%"
                cy="35%"
                r="50%"
                fill="url(#heroGlow)"
                opacity={0.5}
                stroke="white"
              >
                <animate
                  attributeName="r"
                  from="0%"
                  to="50%"
                  dur="2s"
                  repeatCount="1"
                />
              </circle>
              <ellipse
                cx="100%"
                cy="35%"
                rx="120%"
                ry="60%"
                fill="url(#heroGlow)"
                opacity={0.5}
                stroke="white"
              >
                <>
                  <animate
                    attributeName="rx"
                    from="0%"
                    to="120%"
                    dur="2s"
                    repeatCount="1"
                  />
                  <animate
                    attributeName="ry"
                    from="0%"
                    to="60%"
                    dur="2.5s"
                    repeatCount="1"
                  />
                </>
              </ellipse>
            </svg>

            {/* ---------- Hero Title ----------   */}
            <div className="flex flex-col gap-10 w-full">
              <p
                className="flex flex-row gap-5 w-full align-middle >h-5"
                style={{
                  transformOrigin: "50% 60%",
                  animation: "OpacityFrames linear",
                  animationDuration: "2s",
                  animationIterationCount: "1",
                  animationDelay: "1s",
                  animationFillMode: "backwards",
                }}
              >
                <Image
                  src="/branding/isotipo.svg"
                  alt="isotipo.svg"
                  height={200}
                  width={200}
                  className="opacity-20 w-2/5 lg:w-1/3 object-contain duration-1000"
                />
                <Image
                  src="/branding/name_logo2.svg"
                  alt="isotipo.svg"
                  height={300}
                  width={300}
                  className="opacity-20 my-auto w-2/5 lg:w-1/3 object-contain"
                />
              </p>
              <p className="text-white text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase">
                {t("subtitle")}
              </p>
            </div>

            {/* ----------  Introduction ----------   */}
            <div className="flex lg:flex-row flex-col gap-10 w-full h-fit md:h-1/3 lg:h-fit text-white">
              {/* PERSONAL  */}
              <Link
                href="#section-branding"
                className="flex flex-col gap-2 md:gap-6 w-full"
              >
                <p className="flex flex-col w-full">
                  <span className="w-full font-semibold text-xl">
                    {t("sections_title.0")}
                  </span>
                  <span className="opacity-80 w-full text-lg">
                    {t("sections_subtitle.0")}
                  </span>
                </p>
                <div className="flex flex-row gap-3 w-full">
                  <p className="text-md md:text-lg">
                    <span className="font-semibold text-primary2-500">
                      {t("sections_description1.0")}{" "}
                    </span>
                    <span className="opacity-80 w-full">
                      {t("sections_description2.0")}
                    </span>
                  </p>
                  {/* <ArrowRightDown
                    color="#9f6637"
                    size={20}
                    className="my-auto"
                    strokeWidth={6}
                  /> */}
                </div>
              </Link>
              {/* BUSINESS  */}
              <Link
                href="#section-branding"
                className="flex flex-col gap-2 md:gap-6 w-full"
              >
                <p className="flex flex-col w-full">
                  <span className="w-full font-semibold text-xl">
                    {t("sections_title.1")}
                  </span>
                  <span className="opacity-80 w-full text-lg">
                    {t("sections_subtitle.1")}
                  </span>
                </p>
                <div className="flex flex-row gap-3 w-full">
                  <p className="text-md md:text-lg">
                    <span className="font-semibold text-primary2-500">
                      {t("sections_description1.1")}{" "}
                    </span>
                    <span className="opacity-80 w-full">
                      {t("sections_description2.1")}
                    </span>
                  </p>
                  {/* <ArrowRightDown
                    color="#9f6637"
                    className="my-auto"
                    strokeWidth={6}
                  /> */}
                </div>
              </Link>
            </div>
          </section>
        </div>
        {/* FILLER  */}
        <div className="relative" style={{ height: "98vh" }}></div>
      </div>
    </>
  );
};
