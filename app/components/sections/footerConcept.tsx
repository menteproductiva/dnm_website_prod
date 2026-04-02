"use client";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const [visiblePercentage, setVisiblePercentage] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.intersectionRatio gives a value from 0 to 1
        setVisiblePercentage(entry.intersectionRatio * 100);
      },
      {
        // This creates 100 "checkpoints" (0%, 1%, 2%... 100%)
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="z-10 relative flex flex-row justify-between bg-black w-full h-96"
      style={{
        boxShadow: `0px 0px ${visiblePercentage * 0.5}px rgba(255,255,255,${visiblePercentage / 100})`,
      }}
    >
      <svg className="w-full h-full">
        <circle cx="50%" cy="100%" r={`${visiblePercentage}%`} fill="white" />
      </svg>
    </footer>
  );
};
