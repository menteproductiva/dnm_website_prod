import { RefObject, useEffect, useState } from "react";

interface UseElementIntersectsScreenOptions {
  // If true, the hook only detects the first intersection and stops. If false, it continuously tracks visibility.
  triggerOnce?: boolean;
  // Percentage of the element that triggers. 0-1
  threshold?: number;
}

export const useElementIntersectsScreen = (
  ref: RefObject<HTMLElement | null>,
  options: UseElementIntersectsScreenOptions = {},
) => {
  const { triggerOnce = true, threshold = 0.5 } = options;
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // If we only want to trigger once, unobserve/disconnect immediately
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          // If triggerOnce is false, we need to reset the state when it leaves the screen
          if (!triggerOnce) {
            setIntersecting(false);
          }
        }
      },
      { threshold }, // Trigger when 50% of the referenced element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      observer.disconnect();
    };
  }, [ref, triggerOnce]); // Added ref and triggerOnce to dependencies to safely handle configuration changes

  return { intersecting };
};
