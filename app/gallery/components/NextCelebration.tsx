"use client";

import React from 'react'
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const NextCelebration = () => {
    const sectionRef = useScrollAnimation({ animation: "scale", duration: 1 });

    return (
        <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-8 md:py-12 px-[5%]">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-[#FCCB2B14] text-[#FCCB2B] px-4 py-2 rounded-[24px] text-[0.85rem] md:text-[0.9rem] font-bold mb-6 inline-block">
                    PLANNING AN EVENT?
                </div>

                <h2 className="text-[1.8rem] sm:text-[2.3rem] leading-[110%] md:text-[3rem]  font-bold text-[#F2B22F] uppercase mb-6">
                    NEXT CELEBRATION
                </h2>

                <p className="text-gray-700 text-[0.9rem] md:text-[0.95rem] mb-8 max-w-2xl mx-auto leading-relaxed">
                    From intimate family gatherings to grand Owanbe parties, we bring authentic Nigerian flavors and professional service to every occasion.
                </p>

                <button className="bg-[#F2B22F] hover:bg-[#F2B22F]/90 text-gray-700 font-bold py-3 px-8 rounded-[24px] text-[0.85rem] md:text-[0.9rem] transition-colors uppercase">
                    GET A QUOTE
                </button>
            </div>
        </section>
    )
}

export default NextCelebration

