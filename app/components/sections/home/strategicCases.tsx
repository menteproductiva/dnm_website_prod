"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRightUp } from "../../icons/icons";

export const StrategicCases = () => {
  const t = useTranslations("home.section_estrategic_cases");

  // -------------------- Detect when element enters the screen --------------------
  // Create a reference to link to the element in question
  const sectionRef = useRef<HTMLDivElement>(null);
  // Use a State hook to store the intersection status
  const [isIntersected, setIsIntersected] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when 50% of the component is visible
        if (entry.isIntersecting) {
          setIsIntersected(true);
          // Once it triggers, we can stop observing
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.5, // 50% visibility
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  // -------------------------------------------------------------------------------

  const AnimationParameters = {
    transformOrigin: "50% 60%",
    animation: "OpacityFrames linear",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };

  return (
    <section
      className="flex flex-col gap-5 lg:gap-8 mx-auto py-10 mg:py-20 w-full overflow-hidden"
      ref={sectionRef}
    >
      {/* -------------------- Text content -------------------- */}
      <div className="flex lg:flex-row flex-col justify-center items-center gap-5 m-auto px-5 w-full text-white">
        {/* ----- Title ----- */}
        <div
          className="flex flex-col gap-2 lg:gap-5 lg:w-2/5 text-left lg:text-left"
          style={
            isIntersected
              ? { ...AnimationParameters, animationDelay: "0s" }
              : { opacity: 0 } // Keep element hidden till animation triggers
          }
        >
          <h1 className="">{t("title_prologue")}</h1>
          <h2 className="mx-auto w-3/4 lg:w-full">
            <span className="text-primary2-500">{t("title.0")}</span>
            <span className="text-white">{t("title.1")}</span>
          </h2>
        </div>
        {/* ----- Paragraph ----- */}
        <div
          className="flex flex-col gap-2 lg:gap-5 lg:w-2/5"
          style={
            isIntersected
              ? { ...AnimationParameters, animationDelay: "1s" }
              : { opacity: 0 } // Keep element hidden till animation triggers
          }
        >
          <p className="w-full text-neutral1-500 text-lg lg:text-2xl">
            <span className="">{t("subtitle.0")}</span>
            <span className="text-primary2-500">{t("subtitle.1")}</span>
            <span className="">{t("subtitle.2")}</span>
          </p>
          <p className="w-full text-white/70">{t("text")}</p>
        </div>
      </div>
      {/* -------------------- View all cases -------------------- */}
      <p
        className="group flex flex-row items-center gap-3 xl:gap-3 hover:bg-slate-200/10 ml-auto px-5 rounded text-white duration-500 cursor-pointer"
        style={
          isIntersected
            ? { ...AnimationParameters, animationDelay: "2s" }
            : { opacity: 0 } // Keep element hidden till animation triggers
        }
      >
        <span className="ml-auto group-hover:text-primary2-500 text-lg md:text-xl lg:text-xl text-right duration-500">
          {t("view_all")}
        </span>
        <ArrowRightUp
          className="my-auto w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 duration-500"
          color="var(--color-primary2-500)"
        />
      </p>

      {/* -------------------- Carousel -------------------- */}
      <div
        style={
          isIntersected
            ? { ...AnimationParameters, animationDelay: "2.5s" }
            : { opacity: 0 } // Keep element hidden till animation triggers
        }
      >
        <CarouselMobile />
        <CarouselTablet />
        <CarouselDesktop />
      </div>
    </section>
  );
};

const CarouselMobile = () => {
  const t = useTranslations("home.section_estrategic_cases.carousel_cards");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      link: "/",
      title: null,
      logo: "cases/elite_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_elite1.png",
    },
    {
      link: "/",
      title: "Luis Montes de Oca",
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_montes1.png",
    },
    {
      link: "/",
      title: null,
      logo: "cases/jgs_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_jgs1.png",
    },
    {
      link: "/",
      title: `${t(`architect`)} José Garnica`,
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_garnica1.png",
    },
  ];

  const handlePrev = () => {
    if (currentSlide < 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };
  const handleNext = () => {
    if (currentSlide > 2) {
      setCurrentSlide(3);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="md:hidden relative flex flex-col gap-5 px-5 md:px-0 lg:px-10">
      <div
        className="flex flex-row gap-5 md:gap-0 w-min md:w-full overflow-x-visible duration-500"
        style={{
          transform: `translateX(-${currentSlide * 25}%)`,
        }}
      >
        {/* -------------------- Carousel Cards --------------------  */}
        {slides.map((slide, index) => (
          <div
            key={`method-card-${index}`}
            className="relative w-[85vw] aspect-2/3 transition-transform duration-500 ease-in-out shrink-0 md:shrink"
          >
            <CarouselCard
              // Card Cover
              title={slide.title}
              logo={slide.logo}
              intro={t(`cards_intros.${index}`)}
              branding_type={slide.branding}
              background_image={slide.background_image}
              // Card Body
              subtitle={t(`card_subtitles.${index}`)}
              description={t(`card_descriptions.${index}`)}
              explore_text={t(`explore`)}
              link={slide.link}
            />
          </div>
        ))}
      </div>
      {/* -------------------- Carousel Slider --------------------  */}
      <div className="md:hidden flex flex-row justify-center gap-2 bg-green-500/0">
        <p
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
        </p>
        {slides.map((_, index) => (
          <CarouselStep
            key={`method-carousel-${index}`}
            index={index}
            step={currentSlide}
            setStep={setCurrentSlide}
          />
        ))}
        <p
          onClick={handleNext}
          className={`flex flex-row gap-2 duration-500 cursor-pointer ${currentSlide == slides.length - 1 ? "opacity-50 pointer-events-none" : ""}`}
        >
          {t("next")}
          <Image
            src={"/icons/arrow-up.svg"}
            width={15}
            height={15}
            alt="previous"
            className={`my-auto -rotate-90 `}
          />
        </p>
      </div>
    </div>
  );
};
const CarouselTablet = () => {
  const t = useTranslations("home.section_estrategic_cases.carousel_cards");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      link: "/",
      title: null,
      logo: "cases/elite_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_elite1.png",
    },
    {
      link: "/",
      title: "Luis Montes de Oca",
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_montes1.png",
    },
    {
      link: "/",
      title: null,
      logo: "cases/jgs_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_jgs1.png",
    },
    {
      link: "/",
      title: `${t(`architect`)} José Garnica`,
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_garnica1.png",
    },
  ];

  const handlePrev = () => {
    if (currentSlide < 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };
  const handleNext = () => {
    if (currentSlide > 1) {
      setCurrentSlide(2);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="hidden lg:hidden relative md:flex flex-col gap-5 px-5 md:px-0 lg:px-10">
      <div
        className="flex flex-row gap-0 w-[200vw] overflow-x-visible duration-500"
        style={{
          transform: `translateX(-${currentSlide * 50}%)`,
        }}
      >
        {/* -------------------- Carousel Cards --------------------  */}
        {slides.map((slide, index) => (
          <div
            key={`method-card-${index}`}
            className="relative w-full aspect-2/3 transition-transform duration-500 ease-in-out shrink-0 md:shrink"
          >
            <CarouselCard
              // Card Cover
              title={slide.title}
              logo={slide.logo}
              intro={t(`cards_intros.${index}`)}
              branding_type={slide.branding}
              background_image={slide.background_image}
              // Card Body
              subtitle={t(`card_subtitles.${index}`)}
              description={t(`card_descriptions.${index}`)}
              explore_text={t(`explore`)}
              link={slide.link}
            />
          </div>
        ))}
      </div>
      {/* -------------------- Carousel Slider --------------------  */}
      <div className="flex flex-row justify-center gap-2 bg-green-500/0">
        <p
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
        </p>

        <CarouselStep
          key={`method-carousel-${0}`}
          index={0}
          step={currentSlide}
          setStep={setCurrentSlide}
        />
        <CarouselStep
          key={`method-carousel-${1}`}
          index={1}
          step={currentSlide}
          setStep={setCurrentSlide}
        />
        <p
          onClick={handleNext}
          className={`flex flex-row gap-2 duration-500 cursor-pointer ${currentSlide == 2 - 1 ? "opacity-50 pointer-events-none" : ""}`}
        >
          {t("next")}
          <Image
            src={"/icons/arrow-up.svg"}
            width={15}
            height={15}
            alt="previous"
            className={`my-auto -rotate-90 `}
          />
        </p>
      </div>
    </div>
  );
};
const CarouselDesktop = () => {
  const t = useTranslations("home.section_estrategic_cases.carousel_cards");

  const slides = [
    {
      link: "/",
      title: null,
      logo: "cases/elite_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_elite1.png",
    },
    {
      link: "/",
      title: "Luis Montes de Oca",
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_montes1.png",
    },
    {
      link: "/",
      title: null,
      logo: "cases/jgs_logo.svg",
      branding: t("business_branding"),
      background_image: "cases/background_jgs1.png",
    },
    {
      link: "/",
      title: `${t(`architect`)} José Garnica`,
      logo: "",
      branding: t("personal_branding"),
      background_image: "cases/background_garnica1.png",
    },
  ];

  return (
    <div className="relative flex flex-col gap-5">
      <div className="hidden lg:flex flex-row gap-0 w-full">
        {/* -------------------- Carousel Cards --------------------  */}
        {slides.map((slide, index) => (
          <div
            key={`method-card-${index}`}
            className="relative md:w-full aspect-2/3 transition-transform duration-500 ease-in-out shrink-0 md:shrink"
          >
            <CarouselCard
              // Card Cover
              title={slide.title}
              logo={slide.logo}
              intro={t(`cards_intros.${index}`)}
              branding_type={slide.branding}
              background_image={slide.background_image}
              // Card Body
              subtitle={t(`card_subtitles.${index}`)}
              description={t(`card_descriptions.${index}`)}
              explore_text={t(`explore`)}
              link={slide.link}
            />
          </div>
        ))}
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
        src={`/${background_image}`}
        width={1000}
        height={1000}
        alt={`background-image-${link}`}
        className="top-0 absolute group-hover:blur-xs group-hover:grayscale-100 w-full h-full group-hover:scale-110 duration-500"
        style={{ objectFit: "cover" }}
      />
      {/* -------------------- Cover --------------------  */}
      <div className="top-0 relative bg-linear-to-b from-black via-transparent to-transparent group-hover:opacity-0 p-5 md:p-2 lg:p-5 h-full duration-500 pointer-events-none">
        {/* Title | Logo  */}
        <div className="flex flex-col items-start w-full h-16">
          {title && (
            <p className="flex flex-col gap-2 w-full md:text-md text-lg lg:text">
              <span className="font-bold">{title}</span>
            </p>
          )}

          {logo && (
            <Image
              src={logo}
              width={250}
              height={250}
              alt={`logo-${link}`}
              className="mr-auto w-auto h-full"
            />
          )}
        </div>
        {/* Subtitle  */}
        <div className="w-full">
          <p className="flex flex-col gap-2 w-full md:text-md text-sm">
            <span>{intro}</span>
          </p>
        </div>
      </div>

      {/* -------------------- Hover Info --------------------  */}
      <div
        className={`top-0 cursor-pointer absolute flex flex-col gap-5 group-hover:opacity-100 opacity-0 bg-black/70  p-7 w-full h-full duration-500 justify-evenly `}
      >
        {/* Branding Category  */}
        <p className="w-full text-md text-primary2-400 text-center uppercase">
          <span>{branding_type}</span>
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
        <div className="w-full">
          <p className="flex flex-col gap-2 w-full text-md text-slate-200 md:text-lg">
            <span className="w-full text-center">{subtitle}</span>
          </p>
        </div>

        <div className="w-full">
          <p className="flex flex-col gap-2 w-full text-xs md:text-sm">
            <span className="w-full text-center">{description}</span>
          </p>
        </div>

        {/* -------------------- Button --------------------  */}
        {/* <p className="group flex flex-row justify-center gap-3 bg-slate-950 hover:bg-primary2-500 px-5 lg:px-7 py-3 border-2 border-primary2-500 rounded-xl w-auto md:text-xs duration-500 cursor-pointer">
          <span className="w-auto lg:font-normal font-bold md:text-sm lg:text-sm text-lg line-clamp-1">
            {explore_text}
          </span>
          <span className="my-auto">
            <ArrowRightUp className="hidden lg:block" size={10} />
            <ArrowRightUp className="lg:hidden" size={15} />
          </span>
        </p> */}
      </div>
    </div>
  );
};
