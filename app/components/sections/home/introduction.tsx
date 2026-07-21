"use client";
import { useTranslations } from "next-intl";
import { Compass } from "../../icons/icons";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const Introduction = () => {
  const t = useTranslations("home.section_introduction");
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const AnimationA = {
    transformOrigin: "50% 60%",
    animation: "OpacityFrames linear",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };

  const AnimationB = {
    transformOrigin: "50% 60%",
    animation: "GrowInHorizontal linear",
    animationDuration: "1.5s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };

  const bulletPoints = [
    { icon: <Compass strokeWidth={0.2} size={20} className="w-5 h-5" /> },
    {
      icon: (
        <Image
          alt="target"
          height={20}
          width={20}
          src="/icons/chromeWhite.svg"
          className="w-5 h-5"
        />
      ),
    },
    {
      icon: (
        <Image
          alt="target"
          height={20}
          width={20}
          src="/icons/infinityWhite.svg"
          className="w-5 h-5"
        />
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-around items-center gap-7 xl:gap-9 bg-black mx-auto pt-8 pb-20 w-full h-full"
    >
      {/* -------------------- Title -----------------------------   */}
      <div
        className="flex flex-col gap-7 md:mr-auto w-full md:w-2/3 lg:w-3/5 text-neutral2-100"
        style={
          isIntersected
            ? { ...AnimationA, animationDelay: "0s" }
            : { opacity: 0 } // Keep element hidden till animation triggers
        }
      >
        <h2 className="font-semibold text-5xl">
          <span>{t("title.0")}</span>
          <span className="text-primary2-500">{t("title.1")} </span>
          <span>{t("title.2")}</span>
        </h2>
        <p className="text-xl">{t("paragraph1")}</p>
      </div>

      {/* -------------------- Decorative divisor ----------------   */}
      <div className="mr-auto w-full md:w-1/2 lg:w-3/5 h-0.5">
        <div
          className="bg-primary2-500/30 h-full"
          style={
            isIntersected
              ? { ...AnimationB, animationDelay: "0.5s" }
              : { width: 0 }
          }
        />
      </div>

      {/* -------------------- Bullet Points ---------------------   */}
      <div
        className="flex lg:flex-row flex-col gap-10 mb-5 xl:mb-10 w-full h-1/3 text-white"
        style={
          isIntersected
            ? { ...AnimationA, animationDelay: "1s" }
            : { opacity: 0 }
        }
      >
        {bulletPoints.map(({ icon }, index) => (
          <BulletPoint
            key={`bulletPoint-${index}`}
            icon={icon}
            index={index}
            title={t(`bullet_points.titles.${index}`)}
            text={t(`bullet_points.texts.${index}`)}
          />
        ))}
      </div>

      {/* -------------------- Quote -----------------------------   */}
      <div
        className="flex xl:flex-row flex-col xl:justify-center gap-5 w-fit lg:w-2/3 font-bold text-2xl lg:text-4xl"
        style={
          isIntersected
            ? { ...AnimationA, animationDelay: "1.5s" }
            : { opacity: 0 }
        }
      >
        <p className="ml-auto w-full text-neutral2-100 text-right">
          <span>{t(`quote1`)}</span>
        </p>

        <p
          className="w-full overflow-hidden lg:text-left text-center text-nowrap scroll-bar-none"
          style={
            isIntersected
              ? { ...AnimationB, animationDelay: "2s" }
              : { opacity: 0 }
          }
        >
          <span>{t(`quote2.0`)}</span>
          <span className="text-primary2-500">{t(`quote2.1`)}</span>
        </p>
      </div>
    </section>
  );
};

const BulletPoint = ({
  icon,
  index,
  title,
  text,
}: {
  icon: any;
  index: number;
  title: string;
  text: string;
}) => {
  return (
    <p className="group relative flex flex-row lg:flex-col gap-4 w-full lg:h-fit">
      <span className="bg-slate-900 p-2 border-2 border-primary2-500 rounded w-10 h-10 group-hover:-translate-y-2 duration-500 shrink-0">
        {icon}
      </span>
      <span className="lg:my-auto w-full lg:h-fit font-semibold text-xl lg:text-2xl xl:text-3xl">
        {title}
      </span>
      <span className="my-auto w-full lg:h-fit text-md text-neutral2-500 lg:text-lg">
        {text}
      </span>
    </p>
  );
};
