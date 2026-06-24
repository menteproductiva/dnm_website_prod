"use client";
import { useTranslations } from "next-intl";
import { Button } from "../../button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const AboutUs = () => {
  const t = useTranslations("home.section_about_us");
  const Animation = {
    transformOrigin: "50% 60%",
    animation: "OpacityFrames linear",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };
  const AnimationImage = {
    transformOrigin: "50% 60%",
    animation: "ZoomOut linear",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };

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

  return (
    <section id="section-about-us">
      <div
        className={`relative my-10 mx-auto h-fit text-white align-middle duration-500 w-full`}
        ref={sectionRef}
      >
        {/* ------------------- Content ------------------- */}
        <div className="flex lg:flex-row flex-col bg-neutral2-500/10 drop-shadow-white w-full overflow-hidden">
          {/* -------------------- Left Side - Text  -------------------- */}
          <div className="relative flex flex-col gap-5 md:gap-5 lg:gap-10 my-auto py-10 w-full h-full">
            {/* Title  */}
            <h2
              className="relative flex flex-col mx-auto lg:p-3 w-3/5 text-left"
              style={
                isIntersected
                  ? { ...Animation, animationDelay: "0s", fontSize: "40px" }
                  : { opacity: 0, fontSize: "40px" } // Keep element hidden till animation triggers
              }
            >
              <span className=""> {t("title.0")} </span>
              <span className="text-primary2-500"> {t("title.1")} </span>
            </h2>

            <div
              className="flex flex-col items-center lg:items-start mx-auto w-full lg:w-3/5 text-white"
              style={
                isIntersected
                  ? { ...Animation, animationDelay: "1s" }
                  : { opacity: 0 } // Keep element hidden till animation triggers
              }
            >
              <Button link="/" text={t("btn")} className="bg-primary2-500" />
            </div>
          </div>
          {/* -------------------- Right Side - Image -------------------- */}
          <div className="relative lg:w-3/5 h-auto overflow-hidden ratio-square">
            <Image
              src="/home/graphic1_color.png"
              alt="About Us"
              className="w-full h-full object-cover ratio-square"
              width={1000}
              height={1000}
              style={
                isIntersected
                  ? { ...AnimationImage, animationDelay: "1s" }
                  : { transform: "scale(120%)" } // Keep element hidden till animation triggers
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
