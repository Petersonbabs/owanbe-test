import React from 'react'

const CtaSection = () => {
    return (
        <section className="bg-[#DB4C4C] py-16 md:py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Choose your experience and discover the rich flavors of Africa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md transition-colors hover:bg-white hover:text-[#DB4C4C] w-full sm:w-auto">
                        ORDER MEALS
                    </button>
                    <button className="bg-[#0C7A4B] hover:bg-[#0A6840] text-white font-bold py-3 px-8 rounded-md transition-colors w-full sm:w-auto">
                        ORDER NOW
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CtaSection

