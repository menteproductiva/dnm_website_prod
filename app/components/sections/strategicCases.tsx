"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useRef } from "react";
import { ArrowRightUp } from "../icons/icons";

export const StrategicCases = () => {
  const t = useTranslations("home.section_estrategic_causes");

  return (
    <section
      className="flex flex-col gap-5 mx-auto py-10 md:py-20 w-full lg:w-3/4"
      id="section-cases"
    >
      <p className="flex flex-col items-center gap-5 m-auto px-5 w-full lg:w-2/3 text-white">
        <span className="w-full text-primary2-500 text-xl md:text-2xl lg:text-3xl text-center">
          {/* Casos estrategicos  */}
          {t("title_prologue")}
        </span>
        {/* Cuando la estrategia define...  */}
        <span className="mx-auto w-3/4 lg:w-full font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
          {t("title")}
        </span>
        <span className="flex flex-col text-lg">
          {/* La mayoria de las marcas...  */}
          <span className="w-full text-center">{t("subtitle1")}</span>
          <span className="w-full text-center">{t("subtitle2")}</span>
        </span>
        {/* Nuestro metodo organiza  */}
        <span className="w-full text-white/70 text-center">{t("text")}</span>
      </p>
      {/* <p className="flex flex-col items-center gap-5 m-auto px-5 w-full lg:w-2/3 text-white">
        <span className="w-full text-primary2-500 text-xl md:text-2xl lg:text-3xl text-center">
          
          {t("view_all")} 
        </span>
      </p> */}

      {/* Carousel  */}
      <Carousel />
    </section>
  );
};

const Carousel = () => {
  const t = useTranslations("home.section_estrategic_causes");
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      link: "/elite",
      title: null,
      logo: "cases/elite_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_elite.png",
    },
    {
      link: "/montes",
      title: "Luis Montes de Oca",
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_montes.png",
    },
    {
      link: "/jgs",
      title: null,
      logo: "cases/jgs_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_jgs.png",
    },
    {
      link: "/garnica",
      title: `${t(`architect`)} José Garnica`,
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_garnica.png",
    },
  ];

  const handlePrev = () => {
    if (scrollRef.current) {
      const cardEl = scrollRef.current.firstElementChild as HTMLElement;
      if (cardEl) {
        scrollRef.current.scrollBy({ left: -(cardEl.clientWidth + 20), behavior: "smooth" });
      }
    }
  };
  const handleNext = () => {
    if (scrollRef.current) {
      const cardEl = scrollRef.current.firstElementChild as HTMLElement;
      if (cardEl) {
        scrollRef.current.scrollBy({ left: cardEl.clientWidth + 20, behavior: "smooth" });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardEl = scrollRef.current.firstElementChild as HTMLElement;
      if (cardEl) {
        const index = Math.round(scrollRef.current.scrollLeft / (cardEl.clientWidth + 20));
        setCurrentSlide(index);
      }
    }
  };

  const setStep = (index: number) => {
    if (scrollRef.current) {
      const cardEl = scrollRef.current.firstElementChild as HTMLElement;
      if (cardEl) {
        scrollRef.current.scrollTo({ left: (cardEl.clientWidth + 20) * index, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative flex flex-col gap-5 lg:px-0 overflow-hidden w-full max-w-[100vw]">
      {/* -------------------- Carousel wrapper --------------------  */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth w-full px-5 md:px-10 lg:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* -------------------- Carousel Cards --------------------  */}
        {slides.map((slide, index) => (
          <div
            key={`method-card-${index}`}
            className="relative w-full sm:w-[85%] md:w-[60%] lg:w-[45%] xl:w-[30%] shrink-0 snap-center mr-5 last:mr-0 h-96 transition-transform duration-500 ease-in-out"
          >
            <CarouselCard
              title={slide.title}
              logo={slide.logo}
              branding={slide.branding}
              link={slide.link}
              subtitle={t(`cases_subtitles.${index}`)}
              description={t(`cases_descriptions.${index}`)}
              background_image={slide.background_image}
            />
          </div>
        ))}
      </div>
      {/* -------------------- Carousel Slider --------------------  */}
      <div className="flex flex-row justify-center gap-2 mt-4 text-white hover:text-white">
        <p onClick={handlePrev} className="flex flex-row gap-2 cursor-pointer items-center mr-2">
          <Image
            src={"/icons/arrow-up.svg"}
            width={15}
            height={15}
            alt="previous"
            className="my-auto rotate-90"
          />
          <span className="hidden sm:block">{t("prev")} </span>
        </p>
        
        {slides.map((_, index) => (
          <CarouselStep
            key={`method-carousel-${index}`}
            index={index}
            step={currentSlide}
            setStep={setStep}
          />
        ))}

        <p onClick={handleNext} className="flex flex-row gap-2 cursor-pointer items-center ml-2">
          <span className="hidden sm:block">{t("next")}</span>
          <Image
            src={"/icons/arrow-up.svg"}
            width={15}
            height={15}
            alt="next"
            className="my-auto -rotate-90"
          />
        </p>
      </div>
    </div>
  );
};

const CarouselStep = ({
  index,
  step,
  setStep,
}: {
  index: number;
  step: number;
  setStep: any;
}) => {
  return (
    <div
      onClick={() => {
        setStep(index);
      }}
      className={`rounded-full h-1.5 my-auto duration-500 ${step == index ? "w-20 bg-primary2-500 " : "w-10 bg-slate-500/40  "}`}
    />
  );
};

const CarouselCard = ({
  title,
  logo,
  branding,
  link,
  subtitle,
  description,
  background_image,
}: {
  title: string | null;
  logo: string | null;
  branding: string;
  link: string;
  subtitle: string;
  description: string;
  background_image: string;
}) => {
  const t = useTranslations("home.section_estrategic_causes");
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative p-5 w-full h-full text-white align-middle">
      {/* -------------------- Background --------------------  */}
      <Image
        src={`/${background_image}`}
        width={1000}
        height={1000}
        alt={`background-image-${link}`}
        className="top-0 absolute w-full h-full"
        style={{ objectFit: "cover" }}
      />
      {/* -------------------- Body --------------------  */}
      <div className="top-0 relative h-full pointer-events-none">
        {/* Title | Logo  */}
        <div className="p-5 pt-10 w-4/5 h-30">
          {title && (
            <p className="flex flex-col gap-2 w-full text-lg md:text-xl">
              <span>{title}</span>
            </p>
          )}

          {logo && (
            <div className="w-full h-10">
              <Image src={logo} width={250} height={250} alt={`logo-${link}`} />
            </div>
          )}
        </div>
        {/* Subtitle  */}
        <div className="px-5 w-full">
          <p className="flex flex-col gap-2 w-full md:text-md text-sm">
            <span>{subtitle}</span>
          </p>
        </div>
        {/* Branding Category  */}
        <p className="bottom-16 -left-16 absolute w-40 font-bold text-sm uppercase -rotate-90">
          <span>{branding}</span>
        </p>
      </div>
      {/* -------------------- Button --------------------  */}
      <div
        className="bottom-1 lg:bottom-5 absolute px-5 lg:px-7 w-full md:text-xs cursor-pointer"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        <div className="flex flex-row justify-end lg:justify-center gap-2 md:bg-black/50 md:backdrop-blur-xs py-2 lg:border border-primary2-500 rounded-xl text-center">
          <span className="w-auto lg:font-normal font-bold md:text-sm lg:text-sm text-lg line-clamp-1">
            {t("explore")}
          </span>
          <div className="my-auto">
            <ArrowRightUp className="hidden lg:block" size={10} />
            <ArrowRightUp className="lg:hidden" size={15} />
          </div>
        </div>
      </div>
      {/* -------------------- Info --------------------  */}
      <div
        className={`top-0 cursor-pointer absolute md:flex flex-col gap-5 bg-black/70 backdrop-blur-md p-7 w-full h-full duration-500 ${showInfo ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        {/* Branding Category  */}
        <p className="w-full text-md text-primary2-400 text-center uppercase">
          <span>{branding}</span>
        </p>
        {/* Title | Logo  */}
        <div className="flex mx-auto w-4/5 h-20">
          {title && (
            <p className="flex flex-col gap-2 my-auto w-full font-bold text-lg md:text-xl text-center">
              <span>{title}</span>
            </p>
          )}

          {logo && (
            <Image
              src={logo}
              width={250}
              height={250}
              alt={`logo-${link}`}
              className="my-auto h-20"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
        {/* Subtitle  */}
        <div className="px-5 w-full">
          <p className="flex flex-col gap-2 w-full md:text-md text-sm">
            <span className="w-full text-center">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
