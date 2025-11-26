"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationOptions {
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  once?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const {
    animation = "fadeIn",
    delay = 0,
    duration = 1,
    trigger,
    start = "top 85%",
    end = "bottom 20%",
    once = true,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const element = elementRef.current;
    if (!element) return;

    const isMobile = window.innerWidth < 768;
    const mobileStart = "top 90%";
    const desktopStart = start;

    const animations = {
      fadeIn: { opacity: 0, y: isMobile ? 20 : 30 },
      slideUp: { opacity: 0, y: isMobile ? 30 : 50 },
      slideLeft: { opacity: 0, x: isMobile ? -30 : -50 },
      slideRight: { opacity: 0, x: isMobile ? 30 : 50 },
      scale: { opacity: 0, scale: 0.8 },
    };

    const initialProps = animations[animation];

    gsap.set(element, initialProps);

    const scrollTriggerConfig = {
      trigger: trigger || element,
      start: isMobile ? mobileStart : desktopStart,
      end: end,
      toggleActions: once ? "play none none none" : "play none none reverse",
      markers: false,
      invalidateOnRefresh: true,
    };

    const timeline = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    timeline.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: isMobile ? duration * 0.8 : duration,
      delay,
      ease: "power3.out",
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      timeline.kill();
      window.removeEventListener("resize", handleResize);
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((st) => {
        if (st.vars && (st.vars.trigger === element || st.vars.trigger === trigger)) {
          st.kill();
        }
      });
    };
  }, [animation, delay, duration, trigger, start, end, once]);

  return elementRef;
};

export const useStaggerAnimation = (
  selector: string,
  options: UseScrollAnimationOptions & { stagger?: number } = {}
) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const {
    animation = "fadeIn",
    delay = 0,
    duration = 0.6,
    stagger = 0.1,
    trigger,
    start = "top 85%",
    end = "bottom 20%",
    once = true,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const container = containerRef.current;
    if (!container) return;

    // Normalize selector - handle direct child selectors properly
    let normalizedSelector = selector.trim();
    
    // If selector starts with ">", ensure proper format (no space before >)
    if (normalizedSelector.startsWith(">")) {
      normalizedSelector = normalizedSelector.replace(/^\s*>\s*/, "> ");
    }
    
    let elements: NodeListOf<HTMLElement>;
    
    try {
      elements = container.querySelectorAll<HTMLElement>(normalizedSelector);
    } catch (error) {
      // Fallback: if selector fails and it's a direct child selector, use children
      if (normalizedSelector.startsWith(">")) {
        const tagName = normalizedSelector.replace(/^>\s*/, "").trim();
        const childrenArray = Array.from(container.children).filter(
          (child): child is HTMLElement => 
            child instanceof HTMLElement && 
            (tagName === "*" || child.tagName.toLowerCase() === tagName.toLowerCase())
        );
        elements = childrenArray as unknown as NodeListOf<HTMLElement>;
      } else {
        console.warn(`Invalid selector "${normalizedSelector}":`, error);
        return;
      }
    }
    
    if (elements.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const mobileStart = "top 90%";
    const desktopStart = start;

    const animations = {
      fadeIn: { opacity: 0, y: isMobile ? 20 : 30 },
      slideUp: { opacity: 0, y: isMobile ? 30 : 50 },
      slideLeft: { opacity: 0, x: isMobile ? -30 : -50 },
      slideRight: { opacity: 0, x: isMobile ? 30 : 50 },
      scale: { opacity: 0, scale: 0.8 },
    };

    const initialProps = animations[animation];

    gsap.set(elements, initialProps);

    const scrollTriggerConfig = {
      trigger: trigger || container,
      start: isMobile ? mobileStart : desktopStart,
      end: end,
      toggleActions: once ? "play none none none" : "play none none reverse",
      markers: false,
      invalidateOnRefresh: true,
    };

    const timeline = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    timeline.to(elements, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: isMobile ? duration * 0.8 : duration,
      delay,
      stagger,
      ease: "power3.out",
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      timeline.kill();
      window.removeEventListener("resize", handleResize);
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((st) => {
        if (st.vars && (st.vars.trigger === container || st.vars.trigger === trigger)) {
          st.kill();
        }
      });
    };
  }, [selector, animation, delay, duration, stagger, trigger, start, end, once]);

  return containerRef;
};

