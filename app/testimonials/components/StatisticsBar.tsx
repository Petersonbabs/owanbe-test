import React from "react";

const StatisticsBar = () => {
  return (
    <section className="bg-[#D32E12] py-8 md:py-12 px-[5%]">
      <div className=" mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-[1.5rem] sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2">10,000+</div>
            <div className="text-[0.9rem] md:text-[0.95rem]">Customers</div>
          </div>
          <div className="text-white">
            <div className="text-[1.5rem] sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2">4.9/5</div>
            <div className="text-[0.9rem] md:text-[0.95rem]">Rating</div>
          </div>
          <div className="text-white">
            <div className="text-[1.5rem] sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2">95%</div>
            <div className="text-[0.9rem] md:text-[0.95rem]">Satisfaction</div>
          </div>
          <div className="text-white">
            <div className="text-[1.5rem] sm:text-[2rem] leading-[110%] md:text-[2.5rem] font-bold mb-2">5,000+</div>
            <div className="text-[0.9rem] md:text-[0.95rem]">Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsBar;

