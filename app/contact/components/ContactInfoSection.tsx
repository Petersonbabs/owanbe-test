"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useStaggerAnimation } from "@/app/hooks/useScrollAnimation";

const ContactInfoSection = () => {
  const gridRef = useStaggerAnimation(">div", {
    animation: "slideUp",
    duration: 0.6,
    stagger: 0.1,
  });

  return (
    <section className="">
      <div className="bg-[#D32E12] py-8 md:py-12 px-[5%]">
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-center md:text-[1.3rem] font-bold mb-4">
              Phone
            </h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem]">
              <a
                href="tel:+2348153003822"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                +234 815 209 3622
              </a>
              <a
                href="tel:+2347062115832"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                +234 705 211 3552
              </a>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">
              Email
            </h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem]">
              <a
                href="mailto:owanbemart@gmail.com"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                owanbemart@gmail.com
              </a>
              <a
                href="mailto:mofaifoods@gmail.com"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                mofaifoods@gmail.com
              </a>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">
              Address
            </h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              <div>
                Owanbe Mart: The Yellow Canpoy, Wole Olateju Crescent, Lekki
                Lagos
              </div>
              <div>
                MOFAI Foods: Golden Ever Yard, Tawa Badiru Close, Off Jabita
                Street, Junction B/Stop, Langbasa-Ajah, Lagos
              </div>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">
              Hours
            </h3>
            <div className="text-center text-[0.9rem] md:text-[0.95rem]">
              Mon - Sun: 8am - 6pm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
