"use client";
import { useEffect, useRef, useState } from "react";

export const SectionSeparator = () => {
  const [visiblePercentage, setVisiblePercentage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisiblePercentage(entry.intersectionRatio * 100);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="z-10 relative bg-black w-full h-1 overflow-visible">
      {/* LINE  */}
      <svg
        className="mx-auto h-full object-fill"
        style={{ width: `${50 + visiblePercentage / 2}%` }}
      >
        <defs>
          <radialGradient
            id="radialGlowIntro"
            cx="50%"
            cy="30%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity=".4" />
            <stop offset="40%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient
            id="linearGlowIntro"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="20%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="50%" stopColor="white" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          x="0%"
          y="0"
          width="100%"
          height="100%"
          fill="url(#linearGlowIntro)"
          opacity={`${80 + visiblePercentage / 5}%`}
        />
      </svg>
      {/* GLOW  */}
      <svg
        className="z-50 w-full h-96 object-fill overflow-hidden"
        ref={sectionRef}
      >
        <defs>
          <radialGradient
            id="radialGlowIntro"
            cx="50%"
            cy="30%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity=".4" />
            <stop offset="50%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient
            id="linearGlowIntro"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="20%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="50%" stopColor="white" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        <ellipse
          cx="50%"
          cy="0%"
          ry={`${visiblePercentage >= 10 ? visiblePercentage - 10 : 0}%`} // ternary used to prevent radius from going into negative values
          fill="url(#radialGlowIntro)"
          opacity={0.8}
          stroke="white"
          strokeWidth={0}
        />
      </svg>
    </div>
  );
};
