"use client";

import { Heart } from "lucide-react";
import React from "react";
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const HeroSection = () => {
  const sectionRef = useScrollAnimation({ animation: "fadeIn", duration: 0.8 });

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/text-bg.png')` }}>
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-[5%]  ">
        

        <div className="text-center mb-6 relative z-10">
          <button className="border-[#00000033] flex justify-center mx-auto items-center gap-2 border text-black px-4 py-2 rounded-[24px] text-[0.85rem] md:text-[0.9rem] font-bold mb-4">
            {/* add love outline */}
            <Heart className="w-4 h-4 text-[#D32E12]" />
          TESTIMONIALS
          </button>
          <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[110%] md:text-[4.5rem] font-bold text-black uppercase mb-4">
            CUSTOMER 
            <br />
            <span className="text-[#F2B22F]">STORIES</span>
          </h1>
          <p className="text-[0.9rem] md:text-[0.95rem] text-black max-w-3xl mx-auto">
          Hear from our happy customers around the world
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;

