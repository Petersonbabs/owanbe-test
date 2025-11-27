"use client";

import Image from "next/image";
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const HeroSection = () => {
  const textRef = useScrollAnimation({ animation: "slideRight", duration: 1 });
  const imageRef = useScrollAnimation({ animation: "slideLeft", duration: 1, delay: 0.2 });

  return (
    <section className="py-8 md:py-12 px-[5%] relative overflow-hidden">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef as React.RefObject<HTMLDivElement>} className="space-y-6">
            <h1 className="text-[3.5rem] md:text-[4.5rem] leading-[110%] font-black uppercase">
              <span className="text-black">LET&apos;S </span>
              <br />
              <span className="text-[#FF8C00]">TALK</span>
            </h1>
              <p className="text-[0.9rem] md:text-[0.95rem] text-black leading-relaxed max-w-3xl">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond within 24 hours.
            </p>
          </div>

          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="relative flex justify-center lg:justify-end">
            <Image src="/images/lets.png" alt="Contact Hero" width={500} height={500} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

