"use client";
import { useElementIntersectsScreen } from "@/app/hooks/useElementIntersectsScreen";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useEffect, useRef } from "react";

export const Method = () => {
  const t = useTranslations("home.section_method");

  // -------------------- Carousel Information -----------------------------------------------------------
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSteps = 4;
  const handleManualChange = (index: number) => {
    setCurrentSlide(index);
  };
  // -----------------------------------------------------------------------------------------------------

  // -------------------- Check when element enters the screen, trigger animations -----------------------
  const containerRef = useRef<HTMLDivElement>(null);
  const { intersecting } = useElementIntersectsScreen(containerRef);
  // -----------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (!intersecting) return;

    let intervalId: NodeJS.Timeout;
    let executionCount = 0;
    const totalTransitionsNeeded = totalSteps; // 3 transitions to get to index 3, +1 to loop back to 0

    const delayId = setTimeout(() => {
      intervalId = setInterval(() => {
        executionCount++;

        if (executionCount >= totalTransitionsNeeded) {
          setCurrentSlide(0);
          clearInterval(intervalId);
        } else {
          setCurrentSlide((prev) => prev + 1);
        }
      }, 1000);
    }, 3000);

    return () => {
      clearTimeout(delayId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [intersecting, totalSteps]);

  return (
    <section
      className="flex flex-col gap-10 mx-auto py-10 md:py-20 w-full"
      id="section-method"
      ref={containerRef}
    >
      {/* -------------------- Corner Glow -------------------- */}
      <svg
        className="top-0 left-0 absolute border-red-500 w-full h-full overflow-visible pointer-events-none ratio-square"
        stroke="white"
        strokeWidth={0}
        style={
          intersecting
            ? { ...Animation, animationDelay: `${0}s` }
            : { opacity: 0 }
        }
      >
        <defs>
          <radialGradient
            id="steps-corner-glow-gradient"
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
        <ellipse
          cx="0"
          cy="25%"
          rx="100%"
          ry="50%"
          fill="url(#steps-corner-glow-gradient)"
          opacity={0.5}
          stroke="white"
        ></ellipse>
      </svg>

      {/* -------------------- Header -------------------- */}
      <div className="relative flex flex-col items-center m-auto px-5 md:px-0 w-full lg:w-3/4 text-white">
        {/* Como trabajamos  */}
        <h1
          className="text-center"
          style={
            intersecting
              ? { ...Animation, animationDelay: `${0}s` }
              : { opacity: 0 }
          }
        >
          {t("title-prologue")}
        </h1>
        {/* ASI ESTRUCTURAMOS...  */}
        <h2
          className="flex flex-col mx-auto pt-3 lg:w-full text-neutral2-500 text-center"
          style={
            intersecting
              ? { ...Animation, animationDelay: `${0.5}s` }
              : { opacity: 0 }
          }
        >
          <span className="text-primary2-500">{t("title.0")}</span>
          <span className="">{t("title.1")}</span>{" "}
        </h2>
        <p
          className="flex flex-col pt-12 text-lg"
          style={
            intersecting
              ? { ...Animation, animationDelay: `${1}s` }
              : { opacity: 0 }
          }
        >
          <span className="w-full text-neutral2-500 text-center">
            {t("intro1")}
          </span>
        </p>
      </div>

      {/* -------------------- Carousel -------------------- */}
      <Carousel
        totalSteps={totalSteps}
        currentSlide={currentSlide}
        handleManualChange={handleManualChange}
        startAnimation={intersecting}
      />
    </section>
  );
};

const Carousel = ({
  totalSteps,
  currentSlide,
  handleManualChange,
  startAnimation,
}: {
  totalSteps: number;
  currentSlide: number;
  handleManualChange: any;
  startAnimation: boolean;
}) => {
  const t = useTranslations("home.section_method");

  return (
    <div className="relative flex flex-col px-5 md:px-0 lg:px-0">
      <div className="relative flex flex-row justify-between w-full">
        {new Array(totalSteps).fill(null).map((_, index) => (
          <CarouselStep
            key={`method-carousel-${index}`}
            index={index}
            step={currentSlide}
            setStep={handleManualChange} // Pass the wrapper function here
            title={t(`step_titles.${index}.0`)}
            subtitle={t(`step_titles.${index}.1`)}
            startAnimation={startAnimation}
          />
        ))}
      </div>
      <div
        className="relative w-full h-40 lg:h-30"
        style={
          startAnimation
            ? { ...Animation, animationDelay: `1.5s` }
            : { opacity: 0 }
        }
      >
        {new Array(totalSteps).fill(null).map((_, index) => (
          <CarouselCard
            key={`method-card-${index}`}
            index={index}
            step={currentSlide}
            title={t(`step_paragraphs.${index}`)}
          />
        ))}
      </div>
    </div>
  );
};

const CarouselStep = ({
  index,
  step,
  setStep,
  title,
  subtitle,
  startAnimation,
}: {
  index: number;
  step: number;
  setStep: any;
  title: string;
  subtitle: string;
  startAnimation: boolean;
}) => {
  return (
    <div
      className="flex flex-col items-center gap-7 w-1/4"
      style={
        startAnimation
          ? { ...Animation, animationDelay: `${index + 2}s` }
          : { opacity: 0 }
      }
    >
      {/* Circle  */}

      <div className="relative w-full h-auto cursor-pointer">
        <svg className="z-0 absolute w-full h-full overflow-visible duration-1000 pointer-events-none">
          <defs>
            <linearGradient
              id="method-step-horizontal-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset={`0%`} stopColor="#fff" stopOpacity="0" />
              <stop offset={`50%`} stopColor="var(--color-primary2-500)" />
              <stop offset={`100%`} stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="method-step-vertical-gradient"
              x1="0%"
              y1="0%"
              y2="100%"
              x2="0%"
            >
              <stop offset={`0%`} stopColor="#fff" stopOpacity="0" />
              <stop offset={`90%`} stopColor="var(--color-primary2-500)" />
            </linearGradient>

            <mask id={`mask-method-step-1`}>
              <rect x={"50%"} y="0" width="100%" height="100%" fill="white" />
            </mask>
            <mask id={`mask-method-step-4`}>
              <rect x={"-75%"} y="0" width="125%" height="100%" fill="white" />
            </mask>
          </defs>
          <g>
            <rect
              x="-50%"
              y="45%"
              width="200%"
              height="2px"
              fill="url(#method-step-horizontal-gradient)"
              opacity={step == index ? 1 : 0}
              className="duration-1000"
              mask={
                index == 0
                  ? `url(#mask-method-step-1)`
                  : index == 3
                    ? `url(#mask-method-step-4)`
                    : ""
              }
            />
          </g>
        </svg>
        <button
          className={`z-10 flex  relative p-1 cursor-pointer mx-auto  duration-500 bg-black shadow-primary2-500 rounded-full h-12 outline-2 w-12 md:h-15 md:w-15 
          ${step == index ? "text-primary2-500 outline-primary2-500 shadow-lg " : "text-neutral1-700  outline-neutral1-700"}`}
          onClick={() => {
            setStep(index);
          }}
        >
          <p className="m-auto w-min h-min font-semibold text-2xl md:text-3xl 2xl:text-3xl">
            {index + 1}
          </p>
        </button>
      </div>

      {/* Text  */}
      <p
        className={`duration-500 uppercase text-center flex flex-col scale-90 md:scale-100 text-xs md:text-xl lg:text-xl ${step == index ? "font-bold" : ""}`}
      >
        <span> {title} </span>
        <span>{subtitle}</span>
      </p>
    </div>
  );
};

const CarouselCard = ({
  index,
  step,
  title,
}: {
  index: number;
  step: number;
  title: string;
}) => {
  return (
    <div
      className={`absolute mt-7 md:mt-7 lg:mt-18  w-full h-fit  duration-500 ${step == index ? "opacity-100" : "opacity-0"}`}
    >
      {/* Vertical line  */}
      <div
        className="top-0 left-0 z-20 absolute w-1/4 h-7 xl:h-20 overflow-visible"
        style={{
          transform: `translate(${index * 100}%,0%)`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-auto w-1 h-full  overflow-visible `}
        >
          <defs>
            <linearGradient
              id="method-card-vertical-gradient"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="10%" stopColor="white" stopOpacity="0" />
              <stop
                offset="75%"
                stopColor="var(--color-primary2-500)"
                stopOpacity=".6"
              />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="-100%"
            width="100%"
            height="100%"
            fill="url(#method-card-vertical-gradient)"
          />
        </svg>
      </div>
      {/* Background and border gradient  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="top-0 left-0 z-0 absolute w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient
            id="method-card-gradient"
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
          rx="10px"
          ry="10px"
          stroke="url(#method-card-gradient)"
          strokeWidth="2"
          fill="#000D"
          style={{
            filter: "drop-shadow( 0px 0px 10px rgba(255, 255, 255, .25))",
          }}
        />
      </svg>
      <div className="relative p-5 2xl:p-7 rounded-lg w-full h-fit text-white align-middle">
        <p className="flex flex-col gap-2 w-full text-xl md:text-2xl lg:text-2xl">
          <span>{title}</span>
        </p>
      </div>
    </div>
  );
};

const Animation = {
  transformOrigin: "50% 60%",
  animation: "OpacityFrames linear",
  animationDuration: "1.5s",
  animationIterationCount: "1",
  animationFillMode: "backwards",
};

const useAutoNavigate = () => {};
