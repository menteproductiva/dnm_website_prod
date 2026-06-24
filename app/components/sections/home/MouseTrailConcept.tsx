"use client";
import { useEffect, useState, RefObject, useRef } from "react";

interface Ghost {
  id: string;
  x: number;
  y: number;
  startTime: number;
}

export const MouseTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ghosts, setGhosts] = useState<Ghost[]>([]);

  const mousePos = useRef({ x: 0, y: 0 });
  const lastSpawnPos = useRef({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { element } = useMousePosition(containerRef);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
      }
    };

    const spawnLoop = () => {
      const dx = mousePos.current.x - lastSpawnPos.current.x;
      const dy = mousePos.current.y - lastSpawnPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // 1. Only spawn if the mouse has moved a minimum threshold (e.g., 2px)
      if (distance > 10) {
        const newGhost: Ghost = {
          id: Math.random().toString(36).substring(2, 9),
          x: mousePos.current.x,
          y: mousePos.current.y,
          startTime: Date.now(),
        };

        setGhosts((prev) => [...prev, newGhost]);
        lastSpawnPos.current = { ...mousePos.current };
      }

      let nextDelay = 0; // Default slow speed delay

      timeoutRef.current = setTimeout(spawnLoop, nextDelay);
    };

    // Initialize
    window.addEventListener("mousemove", handleMouseMove);
    spawnLoop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Delete after some time
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setGhosts((prev) => prev.filter((g) => now - g.startTime < 1500));
    }, 100);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <section
      ref={containerRef}
      className="z-50 relative bg-black w-full h-1 overflow-visible cursor-none"
    >
      <svg className="w-full h-full overflow-visible pointer-events-none">
        {ghosts.map((ghost) => (
          <GhostCursor key={ghost.id} ghost={ghost} id={ghost.id} />
        ))}
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

const GhostCursor = ({ ghost, id }: { ghost: Ghost; id: string }) => {
  const [fill, setFill] = useState("#4bff21"); // Start Green

  useEffect(() => {
    // Reset to green whenever a new ghost starts
    setFill("#4bff21FF");

    // Transition to Blue after 100ms
    const timer1 = setTimeout(() => {
      setFill("#00f0ffff");
    }, 50);

    // Transition to Purple after 200ms
    const timer2 = setTimeout(() => {
      setFill("#a855f7FF");
    }, 600);

    // Transition to Purple after 200ms
    const timer3 = setTimeout(() => {
      setFill("#a855f700");
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [ghost.startTime]);

  return (
    <g className="transition-colors">
      <path
        fill={fill}
        fillOpacity={1}
        stroke="#0005"
        strokeWidth={1}
        strokeOpacity={0.5}
        style={{
          // Use CSS transition for the fill interpolation
          transition: "fill 500ms linear",
          transform: `translate(${ghost.x}px, ${ghost.y}px)`,
        }}
        d="M29.3808,23.959 l-8.2841-8.2878l6.0437-3.4929c0.354-0.2047,0.5601-0.5936,0.5306-1.0015c-0.0295-0.408-0.2894-0.7632-0.6692-0.9146 L0,0 l10.1813,25.5434 c0.1515,0.3801,0.5066,0.6401,0.9147,0.6696 c0.4081,0.0301,0.7972-0.1766,1.0017-0.5309l3.4904-6.0449l8.2835,8.2868 c0.2002,0.2004,0.4719,0.3129,0.7551,0.3129c0.2833,0,0.555-0.1126,0.7553-0.3129l3.9162-3.9186 C29.7976,25.0516,29.7976,24.3758,29.3808,23.959z"
      />
    </g>
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
