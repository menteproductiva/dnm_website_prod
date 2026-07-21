"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState, RefObject, useRef } from "react";
import { useElementIntersectsScreen } from "@/app/hooks/useElementIntersectsScreen";

export const BannerGlow = () => {
  const t = useTranslations("home.section_target");
  const containerRef = useRef<HTMLElement>(null);

  // -------------------- Detect when element enters the screen to trigger animations --------------------
  const { intersecting } = useElementIntersectsScreen(containerRef, {
    triggerOnce: true,
    threshold: 0.6,
  });
  const AnimationParameters = {
    transformOrigin: "50% 60%",
    animation: "OpacityFrames linear",
    animationDuration: "1.5s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };
  const AnimationGrowParameters = {
    transformOrigin: "50% 60%",
    animation: "GrowInVertical linear",
    animationDuration: "1s",
    animationIterationCount: "1",
    animationFillMode: "backwards",
  };
  // -----------------------------------------------------------------------------------------------------

  // -------------------- Dim the glow when mouse is not within the element ------------------------------
  const [mouseIn, setMouseIn] = useState(false); // Is the mouse within the element?
  const { element } = useMousePosition(containerRef);
  useEffect(() => {
    const isAtEdge =
      element.xPct === 0 ||
      element.yPct === 0 ||
      element.xPct === 100 ||
      element.yPct === 100;

    // Only update state if it actually changed to prevent unnecessary renders
    setMouseIn(!isAtEdge);
  }, [element.xPct, element.yPct]); // Only run when coordinates change
  // -----------------------------------------------------------------------------------------------------

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-around lg:justify-between items-center py-20 w-full h-90 min-h-100"
    >
      {/* ---------- Glow Background ----------   */}
      <svg
        className="z-0 absolute inset-0 opacity-70 w-full h-full overflow-visible pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="footerGlow">
            <stop offset="0%" stopColor="#f9f0ea" stopOpacity="0.7" />
            <stop
              offset="40%"
              stopColor="var(--color-primary2-500, #3b82f6)"
              stopOpacity="0.3"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx={`0`}
          cy={`0`}
          r={"40%"}
          fill="url(#footerGlow)"
          className="hidden md:block transition-all ease-out"
          style={
            intersecting
              ? {
                  transform: `translateX(${element.xPct.toFixed(1)}%) translateY(${element.yPct.toFixed(
                    1,
                  )}%)`,
                }
              : {
                  // opacity: 0.5,
                  transform: `translateX(50%) translateY(40%)`,
                }
          }
          opacity={mouseIn ? 1 : 0.75}
        />
        <circle
          cx={`50%`}
          cy={`30%`}
          r={"50%"}
          fill="url(#footerGlow)"
          className="lg:hidden transition-all duration-500 ease-out"
          opacity={1}
        />
      </svg>

      {/* ---------- Hero Title ----------   */}
      <div className="z-10 flex flex-col gap-5 md:gap-7 my-auto px-2 lg:px-40 w-full">
        <Image
          src="/branding/isotipo.svg"
          alt="isotipo.svg"
          height={200}
          width={200}
          className="mx-auto w-15 h-auto object-contain"
        />
        <div className="flex flex-col gap-3">
          <h2
            className="mx-auto w-full font-bold text-white text-center"
            style={
              intersecting
                ? { ...AnimationParameters, animationDelay: `${0}s` }
                : { opacity: 0 }
            }
          >
            <span className="text-6xl normal-case">{t("title.0")}</span>
            <span className="text-primary2-500 text-6xl normal-case">
              {t("title.1")}
            </span>
          </h2>
          <div
            className="mx-auto w-full md:w-2/3 overflow-hidden text-md text-slate-300 md:text-lg xl:text-xl 2xl:text-2xl text-center"
            style={
              intersecting
                ? { ...AnimationGrowParameters, animationDelay: `${0.5}s` }
                : { opacity: 0 }
            }
          >
            <span className="">{t("subtitle")}</span>
          </div>
        </div>
      </div>
      {/* ---------- Debug Info ----------   */}
      {false && (
        <div className="bg-black/40 mx-auto mt-10 p-4 rounded font-mono text-green-400 text-xs">
          <p>
            Relative to Element (Percentage): ({element.xPct.toFixed(1)}%,
            {element.yPct.toFixed(1)}%)
          </p>

          <p
            className={`duration-1000 ${intersecting ? "bg-green-500" : "bg-red-500"}`}
          >
            Is intersecting screen
          </p>
        </div>
      )}
    </section>
  );
};

interface MousePosition {
  screen: { x: number; y: number };
  document: { x: number; y: number };
  element: { x: number; y: number; xPct: number; yPct: number };
}

export const useMousePosition = (ref: RefObject<HTMLElement | null>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    screen: { x: 0, y: 0 },
    document: { x: 0, y: 0 },
    element: { x: 0, y: 0, xPct: 0, yPct: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Relative to Screen (Viewport)
      const screenX = event.clientX;
      const screenY = event.clientY;

      // Relative to Document (includes scroll)
      const docX = event.pageX;
      const docY = event.pageY;

      // Relative to Component
      let elemX = 0;
      let elemY = 0;
      let xPct = 0;
      let yPct = 0;

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        elemX = event.clientX - rect.left;
        elemY = event.clientY - rect.top;

        // Calculate percentages (clamped between 0-100)
        xPct = Math.max(0, Math.min(100, (elemX / rect.width) * 100));
        yPct = Math.max(0, Math.min(100, (elemY / rect.height) * 100));
      }

      setMousePosition({
        screen: { x: screenX, y: screenY },
        document: { x: docX, y: docY },
        element: { x: elemX, y: elemY, xPct, yPct },
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [ref]);

  return mousePosition;
};
