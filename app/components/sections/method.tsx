"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Method = () => {
  const t = useTranslations("home.section_method");

  return (
    <section className="flex flex-col gap-5 mx-auto w-full lg:w-3/4">
      <p className="flex flex-col items-center gap-5 m-auto px-5 w-full lg:w-2/3 text-white">
        {/* Como trabajamos  */}

        <span className="w-full text-primary2-500 text-xl md:text-2xl lg:text-3xl text-center">
          {t("title-prologue")}
        </span>
        {/* ASI ESTRUCTURAMOS...  */}
        <span className="mx-auto w-3/4 lg:w-full font-semibold text-3xl md:text-3xl lg:text-4xl text-center">
          {t("title")}
        </span>
        <span className="flex flex-col text-lg">
          {/* La mayoria de las marcas...  */}
          <span className="w-full text-center">{t("intro1")}</span>
          {/* En DNM empezamos...  */}
          <span className="w-full font-bold text-center uppercase">
            {t("intro2")}
          </span>
        </span>
        {/* Nuestro metodo organiza  */}
        <span className="w-full text-center">{t("subtitle")}</span>
      </p>

      {/* Carousel  */}
      <Carousel />
    </section>
  );
};

const Carousel = () => {
  const t = useTranslations("home.section_method");
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative flex flex-col gap-5 px-5 md:px-10 lg:px-0">
      <CarouselLine step={currentSlide} index={0} />
      <div className="relative flex flex-row justify-between md:justify-evenly">
        {/* <CarouselLine step={currentSlide} index={0} /> */}
      </div>
      <div className="relative flex flex-row justify-between md:justify-evenly">
        {new Array(4).fill(null).map((_, index) => (
          <CarouselStep
            key={`method-carousel-${index}`}
            index={index}
            step={currentSlide}
            setStep={setCurrentSlide}
            title={t(`step_titles.${index}`)}
          />
        ))}
      </div>
      <div className="relative w-full h-40 lg:h-30">
        {/* -------------------- Body --------------------  */}
        {new Array(4).fill(null).map((_, index) => (
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

const CarouselLine = ({ step, index }: { step: number; index: number }) => {
  return (
    <div className="absolute flex flex-row w-full translate-y-12 md:translate-y-14">
      <svg className="w-full h-1 duration-1000">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset={`0%`} stopColor="#fff" stopOpacity="0" />
            <stop offset={`${50}%`} stopColor="var(--color-primary2-500)" />
            <stop offset={`100%`} stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="mask">
            <rect
              x="12.5%"
              y="0"
              width="75%"
              height="100%"
              fill="white"
              className="duration-1000"
            />
          </mask>
        </defs>
        <g mask="url(#mask)">
          <rect
            x="-25%"
            y="0"
            width="75%"
            height="100%"
            fill="url(#gradient)"
            className="duration-1000"
            style={{
              transform: `translateX(${step * 25}%)`,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

const CarouselStep = ({
  index,
  step,
  setStep,
  title,
}: {
  index: number;
  step: number;
  setStep: any;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      {/* Circle  */}
      <div
        className={` flex p-2 cursor-pointer duration-500  bg-black shadow-primary2-500 rounded-full h-14 w-14 md:h-20 md:w-20 
          ${step == index ? "text-primary2-500 outline-primary2-500 shadow-lg outline-4" : "text-white outline-2 outline-white"}`}
        onClick={() => {
          setStep(index);
        }}
      >
        <p className="m-auto w-min h-min font-semibold text-3xl">{index + 1}</p>
      </div>
      {/* Text  */}
      <p
        className={`duration-500 text-sm md:text-xl lg:text-2xl ${step == index ? "font-bold" : ""}`}
      >
        {title}
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
  const t = useTranslations("home.section_method");

  return (
    <div
      className={`absolute rounded-xl w-full h-fit text-white align-middle duration-500 ${step == index ? "opacity-100" : "opacity-0"}`}
      style={{
        padding: ".12rem",
        background:
          "linear-gradient(150deg,#FFF,var(--color-primary2-500),  var(--color-primary2-500), #0000",
      }}
    >
      <div className="bg-black p-5 rounded-xl w-full h-fit text-white align-middle">
        <p className="flex flex-col gap-2 w-full text-xl md:text-2xl lg:text-2xl">
          <span>{title}</span>
        </p>
      </div>
    </div>
  );
};
