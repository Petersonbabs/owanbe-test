"use client";

import React from 'react'
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation'

const TopSection = () => {
    const sectionRef = useScrollAnimation({ animation: "slideUp", duration: 1 });

    return (
        <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-[#FFFFFF1A] py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold mb-6">
                    <span className="text-black">TWO BRANDS,</span>
                    <br />
                    <span className="text-black">ONE </span>
                    <span className="text-[#F2B22F] italic">MISSION</span>
                </h1>
                <p className="text-[0.9rem] md:text-[0.95rem] text-black max-w-3xl mx-auto">
                    We operate two complementary brands serving every aspect of African cuisine.
                </p>
            </div>
        </section>
    )
}

export default TopSection

