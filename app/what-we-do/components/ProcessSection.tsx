"use client";

import Image from "next/image";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/app/hooks/useScrollAnimation";

const ProcessSection = () => {
  const headerRef = useScrollAnimation({ animation: "slideUp", duration: 0.8 });
  const gridRef = useStaggerAnimation(">div", {
    animation: "scale",
    duration: 0.6,
    stagger: 0.15,
  });

  return (
    <section className="bg-[#FFFFFF1A] py-12 md:py-16 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12"
        >
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold mb-4">
            <span className="text-black">OUR </span>
            <span className="text-[#F2B22F]">PROCESS</span>
          </h2>
          <p className="text-[0.9rem] md:text-[0.95rem] text-black max-w-3xl mx-auto">
            Excellence in every step, from source to service.
          </p>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full  bg-[#FBE7E7] flex items-center justify-center mb-4 ">
              <Image
                src="/images/pro1.svg"
                alt="Source"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-[1.2rem] font-bold text-black mb-2">Source</h3>
            <p className="text-gray-600 px-[10%] text-[0.9rem] md:text-[0.95rem]">
              Premium ingredients from trusted suppliers
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full  bg-[#FBE7E7] flex items-center justify-center mb-4 b">
              <Image
                src="/images/pro2.svg"
                alt="Craft"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-[1.2rem] font-bold text-black mb-2">Craft</h3>
            <p className="text-gray-600 px-[10%] text-[0.9rem] md:text-[0.95rem]">
              Traditional recipes, expert preparation
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full  bg-[#FBE7E7] flex items-center justify-center mb-4 ">
              <Image
                src="/images/pro3.svg"
                alt="Check"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-[1.2rem] font-bold text-black mb-2">
              Quality Check
            </h3>
            <p className="text-gray-600 px-[10%] text-[0.9rem] md:text-[0.95rem]">
              Rigorous standards maintained
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full  bg-[#FBE7E7] flex items-center justify-center mb-4 ">
              <Image
                src="/images/pro4.svg"
                alt="Deliver"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-[1.2rem] font-bold text-black mb-2">Deliver</h3>
            <p className="text-gray-600 px-[10%] text-[0.9rem] md:text-[0.95rem]">
              Fresh to your door, event or kitchen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
