import { useState, useEffect } from "react";

// Define the Tailwind breakpoint values (min-widths)
const BREAKPOINTS = {
  lg: 1024, // md <= width < lg
  md: 768, // sm <= width < md
  sm: 640, // width < sm is technically 'xs', but we default to 'sm' per your spec
};

export function useBreakpoint() {
  // Initialize with null or a default to handle SSR safely
  const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "lg">("sm");

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= BREAKPOINTS.lg) {
        setBreakpoint("lg");
      } else if (width >= BREAKPOINTS.md) {
        setBreakpoint("md");
      } else {
        setBreakpoint("sm");
      }
    };

    // Set the initial value on mount
    handleResize();

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
