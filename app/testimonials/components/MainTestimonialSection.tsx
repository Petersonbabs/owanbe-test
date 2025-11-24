import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const MainTestimonialSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] sm:text-[2.5rem] leading-[110%] md:text-[3rem] font-bold mb-4">
            <span className="text-black">WHAT OUR CUSTOMERS </span>
            <span className="text-[#F2B22F]">SAY</span>
          </h2>
          <p className="text-[0.9rem] md:text-[0.95rem] text-black max-w-3xl mx-auto">
            Hear from happy people
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/images/customers.png"
                  alt="Happy Customers"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
             
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 md:w-6 md:h-6 text-[#F2B22F] fill-[#F2B22F]"
                />
              ))}
            </div>
            <blockquote className="text-[0.9rem] md:text-[1.15rem] font-medium text-black leading-relaxed">
              &quot;The jollof rice from Owambe Mart tastes exactly like my mother&apos;s!
              I&apos;m so grateful to have found authentic Nigerian food here in
              Lagos!&quot;
            </blockquote>
            <div>
              <div className="font-bold text-black text-[0.9rem] md:text-[1.15rem]">
                Abiodun O.
              </div>
              <div className="text-gray-600 text-[0.9rem] md:text-[1.15rem]">
                Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTestimonialSection;

