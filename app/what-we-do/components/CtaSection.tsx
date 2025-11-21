import React from 'react'

const CtaSection = () => {
    return (
        <section className="bg-[#D32E12] py-12 md:py-16 px-[5%]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-[3.5rem] font-bold text-white mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-white text-[0.9rem] md:text-[0.95rem] mb-8 max-w-2xl mx-auto">
                    Choose your experience and discover the rich flavors of Africa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-[#F55136] rounded-[24px] text-[0.85rem] md:text-[0.9rem] text-white font-bold py-2 px-5  transition-colors hover:bg-white hover:text-[#D32E12] w-full sm:w-auto">
                        ORDER MEALS
                    </button>
                    <button className="bg-[#0D4621] rounded-[24px] text-[0.85rem] md:text-[0.9rem] text-white font-bold py-2 px-5  transition-colors hover:bg-white hover:text-[#F55136] w-full sm:w-auto">
                        ORDER NOW
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CtaSection

