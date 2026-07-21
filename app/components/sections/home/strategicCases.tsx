"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRightUp } from "../../icons/icons";
import { useElementIntersectsScreen } from "@/app/hooks/useElementIntersectsScreen";
import { useBreakpoint } from "@/app/hooks/useMediaQuery";

export const StrategicCases = () => {
  const t = useTranslations("home.section_estrategic_cases");

  // -------------------- Animation when element enters the screen --------------------
  const sectionRef = useRef<HTMLDivElement>(null);
  const { intersecting } = useElementIntersectsScreen(sectionRef);

  const AnimationParameters = {
    transformOrigin: "50% 60%",
    animation: "OpacityFrames linear",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };
  // -------------------------------------------------------------------------------

  return (
    <section
      className="flex flex-col gap-5 lg:gap-12 mx-auto py-10 md:py-20 w-full overflow-hidden"
      ref={sectionRef}
    >
      {/* -------------------- Text content -------------------- */}
      <div className="flex flex-col justify-center items-center gap-5 m-auto px-5 w-full text-white">
        {/*  Title Prologue  */}
        <div className="w-full lg:w-4/5">
          <h1 className="w-full lg:w-4/5">{t("title_prologue")}</h1>
        </div>
        <div
          className="flex flex-row gap-2 lg:gap-5 w-full lg:w-4/5 text-left lg:text-left"
          style={
            intersecting
              ? { ...AnimationParameters, animationDelay: "0s" }
              : { opacity: 0 } // Keep element hidden till animation triggers
          }
        >
          <h2 className="p-0 w-3/4 lg:w-full h-min">
            <p className="p-0 h-min text-primary2-500">{t("title.0")}</p>
            <p className="h-min text-white">{t("title.1")}</p>
          </h2>
          {/* ----- Paragraph ----- */}
          <div
            className="flex flex-col gap-2 lg:gap-5 pt-2 lg:w-4/5"
            style={
              intersecting
                ? { ...AnimationParameters, animationDelay: ".5s" }
                : { opacity: 0 } // Keep element hidden till animation triggers
            }
          >
            <p className="w-full text-neutral1-500 text-lg lg:text-2xl">
              <span className="">{t("subtitle.0")}</span>
              <span className="text-primary2-500">{t("subtitle.1")}</span>
              <span className="">{t("subtitle.2")}</span>
            </p>
            <p className="w-full text-neutral2-500 lg:text-xl">{t("text")}</p>
          </div>
        </div>
      </div>

      {/* -------------------- Carousel -------------------- */}
      <div
        className="w-full -red-500"
        style={
          intersecting
            ? { ...AnimationParameters, animationDelay: "1s" }
            : { opacity: 0 } // Keep element hidden till animation triggers
        }
      >
        <Carousel />
      </div>
    </section>
  );
};

// Not scrollable
const Carousel = () => {
  // -------------------- Manage current langauge --------------------
  const t = useTranslations("home.section_estrategic_cases.carousel_cards");
  // -------------------------------------------------------------------------------

  // -------------------- List of Carousel Cards Content --------------------
  const carouselCards = [
    {
      link: "/",
      title: `${t(`architect`)} José Garnica`,
      logo: null,
      branding: t("personal_branding"),
      background_image: "/cases/background_garnica1.png",
      intro: t("card_intros.pepe"),
      subtitle: t("card_subtitles.pepe"),
      description: t("card_descriptions.pepe"),
    },
    {
      link: "/",
      title: null,
      logo: "cases/logo_jgs.svg",
      branding: t("business_branding"),
      background_image: "/cases/background_jgs1.png",
      intro: t("card_intros.jgs"),
      subtitle: t("card_subtitles.jgs"),
      description: t("card_descriptions.jgs"),
    },

    {
      link: "/",
      title: `Gabriela Torres`,
      logo: null,
      branding: t("personal_branding"),
      background_image: "/cases/background_gaby.png",
      intro: t("card_intros.gaby"),
      subtitle: t("card_subtitles.gaby"),
      description: t("card_descriptions.gaby"),
    },

    {
      link: "/",
      title: null,
      logo: "/cases/logo_elite.svg",
      background_image: "/cases/background_elite1.png",
      branding: t("business_branding"),
      intro: t("card_intros.elite"),
      subtitle: t("card_subtitles.elite"),
      description: t("card_descriptions.elite"),
    },
    {
      link: "/",
      title: "Luis Montes de Oca",
      logo: null,
      branding: t("personal_branding"),
      background_image: "/cases/background_montes1.png",
      intro: t("card_intros.montes_oca"),
      subtitle: t("card_subtitles.montes_oca"),
      description: t("card_descriptions.montes_oca"),
    },
    {
      link: "/",
      title: `Sophia Sheridan`,
      logo: null,
      branding: t("personal_branding"),
      background_image: "/cases/background_sophia.png",
      intro: t("card_intros.sophia"),
      subtitle: t("card_subtitles.sophia"),
      description: t("card_descriptions.sophia"),
    },
    {
      link: "/",
      title: `David Elias`,
      logo: null,
      branding: t("personal_branding"),
      background_image: "/cases/background_david.png",
      intro: t("card_intros.david"),
      subtitle: t("card_subtitles.david"),
      description: t("card_descriptions.david"),
    },
  ];
  // -------------------------------------------------------------------------------

  // -------------------- Handle Carousel Navigation --------------------
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    if (currentSlide < 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };
  const handleNext = () => {
    if (size === "sm" && currentSlide > carouselCards.length - 1) {
      setCurrentSlide(carouselCards.length - 1);
      return;
    } else if (size === "md" && currentSlide > carouselCards.length - 3) {
      return;
    } else if (size === "lg" && currentSlide > carouselCards.length - 5) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // -------------------------------------------------------------------------------

  // -------------------- Handle Carousel Responsiveness --------------------
  const size = useBreakpoint();
  let blockButtonNext = false;
  if (size === "sm" && currentSlide >= carouselCards.length - 1) {
    blockButtonNext = true;
  } else if (size === "md" && currentSlide >= carouselCards.length - 2) {
    blockButtonNext = true;
  } else if (size === "lg" && currentSlide >= carouselCards.length - 4) {
    blockButtonNext = true;
  }
  // -------------------------------------------------------------------------------

  return (
    <div className="relative flex flex-col gap-5 w-full overflow-hidden -blue-500">
      <div
        className={`flex flex-row gap-0  overflow-x-visible duration-500 w-[700%] md:w-[350%] lg:w-[175%]`}
        style={{
          transform: `translateX(-${currentSlide * (100 / carouselCards.length)}%)`,
        }}
      >
        {/* -------------------- Carousel Cards --------------------  */}
        {carouselCards.map((slide, index) => (
          <div
            key={`method-card-${index}`}
            className={`relative aspect-2/4 transition-transform duration-500 ease-in-out `}
            style={{ width: `${100 / carouselCards.length}%` }}
          >
            <CarouselCard
              // Card Cover
              title={slide.title}
              logo={slide.logo}
              intro={slide.intro}
              branding_type={slide.branding}
              background_image={slide.background_image}
              // Card Body
              subtitle={slide.subtitle}
              description={slide.description}
              explore_text={t(`explore`)}
              link={slide.link}
            />
          </div>
        ))}
      </div>
      {/* -------------------- Carousel Slider --------------------  */}
      <div className="flex flex-row justify-center gap-2 bg-green-500/0">
        <button
          onClick={handlePrev}
          className={`flex flex-row gap-2 duration-500 cursor-pointer ${currentSlide == 0 ? "opacity-50 pointer-events-none" : ""}`}
        >
          <Image
            src={"/icons/arrow-up.svg"}
            width={15}
            height={15}
            alt="previous"
            className="my-auto rotate-90"
          />
          <span>{t("prev")} </span>
        </button>

        <div className="flex flex-row justify-center gap-1 bg-green-500/0">
          {carouselCards.map((_, index) => (
            <CarouselStep
              key={`method-carousel-${index}`}
              index={index}
              step={currentSlide}
              setStep={setCurrentSlide}
              size={size}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`flex flex-row gap-2 duration-500 cursor-pointer ${blockButtonNext ? "opacity-50 pointer-events-none" : ""}`}
        >
          {t("next")}
          <Image
            src={"/icons/arrow-up.svg"}
            width={15}
            height={15}
            alt="previous"
            className={`my-auto -rotate-90 `}
          />
        </button>
      </div>
    </div>
  );
};

const CarouselStep = ({
  index,
  step,
  setStep,
  size,
}: {
  index: number;
  step: number;
  setStep: any;
  size: string;
}) => {
  let isActive = false;
  if (size === "sm" && step == index) {
    isActive = true;
  } else if (size === "md" && (step === index || index === step + 1)) {
    isActive = true;
  } else if (
    size === "lg" &&
    (step === index ||
      index === step + 1 ||
      index === step + 2 ||
      index === step + 3)
  ) {
    isActive = true;
  }
  return (
    <div
      onClick={() => {
        setStep(index);
      }}
      className={`rounded-full h-1.5 my-auto duration-500 ${isActive ? "w-10 bg-primary2-500 " : "w-5 bg-slate-500/40  "}`}
    />
  );
};

const CarouselCard = ({
  // Card Cover
  title,
  logo,
  intro,
  branding_type,
  background_image,
  // Card Body
  subtitle,
  description,
  explore_text,
  link,
}: {
  title: string | null;
  logo: string | null;
  intro: string;
  branding_type: string;
  background_image: string;

  subtitle: string;
  description: string;
  explore_text: string;
  link: string;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="group relative w-full h-full overflow-hidden text-white align-middle">
      {/* -------------------- Background Image --------------------  */}
      <Image
        src={`${background_image}`}
        width={1000}
        height={1000}
        alt={`background-image-${link}`}
        className="top-0 absolute group-hover:blur-xs group-hover:brightness-[.35] group-hover:grayscale-100 w-full h-full group-hover:scale-110 duration-500"
        style={{ objectFit: "cover" }}
      />
      {/* -------------------- Cover --------------------  */}
      <div className="top-0 relative bg-linear-to-b from-black via-transparent to-transparent group-hover:opacity-0 p-5 md:p-2 lg:p-5 h-full duration-500 pointer-events-none">
        {/* Black Gradient  */}
        <div className="top-0 left-0 absolute bg-linear-to-b from-black via-black to-transparent w-full h-20" />

        {/* Title | Logo  */}
        <div className="relative flex flex-col items-start mb-2 w-full h-16">
          {title && (
            <p className="flex flex-col gap-2 my-auto w-full md:text-md text-lg lg:text">
              <span className="font-bold">{title}</span>
            </p>
          )}

          {logo && (
            <Image
              src={logo}
              width={250}
              height={250}
              alt={`logo-${logo}`}
              className="mr-auto p-2 w-auto h-full"
            />
          )}
        </div>
        {/* Subtitle  */}
        <div className="relative w-full">
          <p className="flex flex-col gap-2 w-full text-sm">
            <span>{intro}</span>
          </p>
        </div>
      </div>

      {/* -------------------- Hover Info --------------------  */}
      <div
        className={`top-0 text-neutral2-500 cursor-pointer absolute flex flex-col gap-10 group-hover:opacity-100 opacity-0  p-7 py-20 my-auto h-full duration-500 justify-center `}
      >
        {/* Branding Category  */}
        <p className="w-full text-primary2-500 text-2xl text-center uppercase">
          <span>{branding_type}</span>
        </p>

        <div className="flex flex-col gap-3">
          {/* Title | Logo  */}
          <div className="flex mx-auto w-4/5">
            {title && (
              <p className="flex flex-col gap-2 my-auto w-full font-bold text-lg md:text-3xl text-center">
                <span>{title}</span>
              </p>
            )}

            {logo && (
              <Image
                src={logo}
                width={250}
                height={250}
                alt={`logo-${logo}`}
                className="my-auto h-20"
                style={{ objectFit: "contain" }}
              />
            )}
          </div>
          {/* Subtitle  */}
          <div className="w-full">
            <p className="flex flex-col gap-2 w-full text-md md:text-lg">
              <span className="w-full text-center">{subtitle}</span>
            </p>
          </div>
        </div>

        <div className="w-full">
          <p className="flex flex-col gap-2 w-full text-xs md:text-sm">
            <span className="w-full text-center">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
