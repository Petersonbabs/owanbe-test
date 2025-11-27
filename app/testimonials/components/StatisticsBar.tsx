/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StatisticsBar = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Fade in all stat containers simultaneously with slight stagger
      tl.fromTo(
        ".stat-container",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      // Count all numbers simultaneously
      tl.to(
        numbersRef.current,
        {
          innerText: (i: any) => [10000, 4.9, 95, 5000][i],
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          stagger: 0,
          onUpdate: function () {
            numbersRef.current.forEach((numberEl, index) => {
              if (!numberEl) return;
              const rawValue = numberEl.innerText;
              let current = parseFloat(
                rawValue
                  .replace("/5", "")
                  .replace("%", "")
                  .replace("+", "")
                  .replace(/,/g, "")
              );
              let formatted = "";
              if (index === 0) {
                formatted = Math.ceil(current).toLocaleString() + "+";
              } else if (index === 1) {
                current = Math.min(current, 4.9);
                formatted = current.toFixed(1) + "/5";
              } else if (index === 2) {
                formatted = Math.ceil(current) + "%";
              } else if (index === 3) {
                formatted = Math.ceil(current).toLocaleString() + "+";
              }
              numberEl.innerText = formatted;
            });
          },
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#D32E12] py-8 md:py-12 px-[5%] overflow-hidden"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white stat-container opacity-0">
            <div
              ref={(el) => {
                numbersRef.current[0] = el;
              }}
              className="text-[1.5rem] text-white sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2"
            >
              0
            </div>
            <div className="text-[0.9rem] text-[#FFFFFFB2] md:text-[0.95rem]">
              Happy Customers
            </div>
          </div>

          <div className="text-white stat-container opacity-0">
            <div
              ref={(el) => {
                numbersRef.current[1] = el;
              }}
              className="text-[1.5rem] text-white sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2"
            >
              0/5
            </div>
            <div className="text-[0.9rem] text-[#FFFFFFB2] md:text-[0.95rem]">
              Average Rating
            </div>
          </div>

          <div className="text-white stat-container opacity-0">
            <div
              ref={(el) => {
                numbersRef.current[2] = el;
              }}
              className="text-[1.5rem] text-white sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2"
            >
              0%
            </div>
            <div className="text-[0.9rem] text-[#FFFFFFB2] md:text-[0.95rem]">
              Satisfaction Rate
            </div>
          </div>

          <div className="text-white flex flex-col items-center stat-container opacity-0">
            <div
              ref={(el) => {
                numbersRef.current[3] = el;
              }}
              className="text-[1.5rem] text-white sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2 flex items-center"
            >
              <span>0+</span>
            </div>
            <div className="text-[0.9rem] text-[#FFFFFFB2] md:text-[0.95rem]">
              Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsBar;
