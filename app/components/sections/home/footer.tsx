"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const [visiblePercentage, setVisiblePercentage] = useState(0);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisiblePercentage(entry.intersectionRatio * 100);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  const t = useTranslations("home.section_footer");
  return (
    <div className="z-0 relative bg-black py-10 w-full overflow-visible">
      {/* GLOW  */}
      <svg
        className="top-0 z-50 absolute w-full h-full object-fill overflow-visible"
        ref={footerRef}
      >
        <defs>
          <radialGradient
            id="radialGlowFooter"
            cx="50%"
            cy="30%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity=".4" />
            <stop offset="50%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#9f6637" stopOpacity="0.0" />
          </radialGradient>
        </defs>

        <ellipse
          cx="50%"
          cy="100%"
          ry={"200%"}
          rx={`${visiblePercentage >= 10 ? visiblePercentage - 10 : 0}%`} // ternary used to prevent radius from going into negative values
          fill="url(#radialGlowFooter)"
          opacity={0.8}
          stroke="white"
          strokeWidth={0}
        />
      </svg>

      <p className="w-full text-center">
        &copy; {currentYear} DNM. {t("text")}
      </p>
    </div>
  );
};
