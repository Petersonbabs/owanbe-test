"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const LocationBanner = () => {
  const sectionRef = useScrollAnimation({ animation: "slideUp", duration: 1 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#D32E12] py-8 md:py-12 px-[5%]"
    >
      <div className=" mx-auto text-center">
        <div className="flex justify-center mb-2">
          <MapPin
            className="w-8 h-8 md:w-10 md:h-10 text-[#F2B22F]"
            strokeWidth={2.5}
            fill="none"
          />
        </div>
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-white uppercase mb-2">
          FIND US
        </h2>
        <p className="text-[0.9rem] md:text-[1rem] text-white mb-2">
          Lagos, Nigeria
        </p>
        <p className="text-[0.9rem] md:text-[1rem] text-white">
          Serving Customers Worldwide
        </p>
      </div>

      <div className="mt-12 px-[5%]">
        <div className="w-full rounded-[24px] overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.57681832744!2d3.4549648731168294!3d6.448339524036101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f90f5a7f09%3A0x42ca9b1b5e653edb!2sWole%20Olateju%20Cres%2C%20Eti-Osa%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1764067890663!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationBanner;
