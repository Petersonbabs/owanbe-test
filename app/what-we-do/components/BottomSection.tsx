"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import { useRouter } from 'next/navigation';

const BottomSection = () => {
  const imageRef = useScrollAnimation({ animation: "slideLeft", duration: 1 });
  const contentRef = useScrollAnimation({ animation: "slideRight", duration: 1, delay: 0.2 });
  const router = useRouter();
  return (
    <section className="bg-[#D32E12] py-8 md:py-12 px-[5%] relative">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="relative w-full h-full min-h-[400px] flex items-center justify-center">
            <Image
              src="/images/beans-meal.png"
              className="w-full h-auto object-contain"
              alt="Bottom Section"
              width={600}
              height={600}
              priority
            />
          </div>

          <div ref={contentRef as React.RefObject<HTMLDivElement>} className="text-white space-y-3">
            <div className="relative">
              {/* add the logo of the brand */}
              <Image
                src="/brand/owanbe-logo.png"
                priority
                alt="Bottom Section"
                className="h-[140px] w-[300px] mr-2"
                width={300}
                height={140}
              />
            </div>

            <p className="text-[0.9rem] md:text-[1rem] leading-relaxed max-w-lg">
              Authentic Nigerian meals, made fresh and custom-made to your taste by expert chefs, delivered straight to your door. Perfect for busy professionals, celebrations, or anyone craving home-cooked African food.
            </p>

            <ul className="space-y-4 max-w-lg">
              <li className="flex items-center gap-3">
                <div>
                  <Image src="/images/chef.svg" alt="Chef Hat" width={17} height={17} />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">Chef-prepared authentic recipes</span>
              </li>
              <li className="flex items-start gap-3">
                <div>
                  <Image src="/images/chef.svg" alt="Clock" width={17} height={17} />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">
                  Ready in minutes, no cooking required
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div>
                  <Image src="/images/chef.svg" alt="Truck" width={17} height={17} />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">Fresh delivery to your doorstep</span>
              </li>
              <li className="flex items-start gap-3">
                <div>
                  <Image src="/images/chef.svg" alt="Party Popper" width={17} height={17} />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">
                  Perfect for parties and celebrations
                </span>
              </li>
            </ul>

            <button onClick={() => router.push('https://owanbemart.africa.restaurant/')} className="border-white border rounded-3xl hover:bg-[#FF7F00] text-[0.9rem] md:text-[0.9rem] text-white font-bold py-3 px-6  transition-colors mt-6">
              ORDER NOW
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-white font-bold text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] uppercase tracking-wide">
            PREMIUM READY-TO-EAT MEALS
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
