"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useScrollAnimation, useStaggerAnimation } from '@/app/hooks/useScrollAnimation';

const testimonials = [
  {
    name: "Ibrahim U.",
    location: "Lagos, Nigeria",
    quote:
      "MOFAI Foods' spices are premium quality! The suya spice blend is absolutely authentic and brings back memories of home.",
    avatar: "/images/test1.png",
  },
  {
    name: "Taiwo T.",
    location: "Lagos, Nigeria",
    quote:
     "Exceptional service and quality! The ready-to-eat meals save me so much time while still enjoying authentic flavors.",
    avatar: "/images/test2.png",
  },
  {
    name: "Joel S.",
    location: "Accra, Ghana",
    quote:
     "As a chef, I'm very particular about quality. MOFAI Foods delivers authentic African products that meet my high standards.",
    avatar: "/images/test3.png",
  },
  {
    name: "Rachel D.",
    location: "Lagos, Nigeria",
    quote:
     "Owanbe Mart has been a lifesaver for our family gatherings! The party packs are generous and taste amazing.",
    avatar: "/images/test4.png",
  },
  {
    name: "Adebowale S.",
    location: "Abuja, Nigeria",
    quote:
     "The best African food store I've found in Lagos! Great selection, fair prices, and excellent customer service.",
    avatar: "/images/test1.png",
  },
];

const TestimonialsGrid = () => {
  const gridRef = useStaggerAnimation(">div", { animation: "scale", duration: 0.6, stagger: 0.1 });

  return (
    <section className=" py-8 md:py-12 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[#0000001A] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    // className="w-full h-full object-cover"
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.style.display = "none";
                    // }}
                  />
                  <div className="w-full h-full  from-[#0C7A4B] to-[#DB4C4C] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#F2B22F] fill-[#F2B22F]"
                  />
                ))}
              </div>
              <p className="text-gray-800 text-[0.9rem] md:text-[0.95rem] leading-relaxed">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;

