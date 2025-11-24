import React from "react";
import { MapPin } from "lucide-react";

const LocationBanner = () => {
  return (
    <section className="bg-[#D32E12] py-8 md:py-12 px-[5%]">
      <div className=" mx-auto text-center">
        <div className="flex justify-center mb-2">
          <MapPin 
            className="w-8 h-8 md:w-10 md:h-10 text-[#F2B22F]" 
            strokeWidth={2.5}
            fill="none"
          />
        </div>
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-white uppercase mb-4">
          FIND US
        </h2>
        <p className="text-[0.9rem] md:text-[1rem] text-white mb-2">
          Lagos, Nigeria
        </p>
        <p className="text-[0.9rem] md:text-[1rem] text-white">
          Serving Customers Worldwide
        </p>
      </div>
    </section>
  );
};

export default LocationBanner;

