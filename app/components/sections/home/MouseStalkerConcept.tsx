"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState, RefObject, useRef } from "react";

export const MouseStalker = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pass the ref to the hook to get relative coordinates
  const { element } = useMousePosition(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-around lg:justify-between items-center w-full h-screen min-h-100 overflow-visible cursor-none"
    >
      {/* ---------- Glow Background ----------   */}
      <svg
        className="z-0 absolute inset-0 w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4bff21"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-[350ms]"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />
        <path
          fill="#41fdd0"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-[300ms]"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />
        <path
          fill="#36fbe0"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-[250ms]"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />

        <path
          fill=" 	#2cf9f0"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-[200ms]"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />
        <path
          fill="#22f7ff"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-200"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />
        <path
          fill="#17f4ff"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-[150ms]"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />

        <path
          fill=" 	#0df2ff"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-100"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />
        <path
          fill="#00f0ff"
          transform={`translate(${element.x} ${element.y})`}
          className="duration-[100ms]"
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />
        <path
          fill="white"
          stroke="black"
          strokeWidth={3}
          transform={`translate(${element.x} ${element.y})`}
          d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
        />
      </svg>
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
