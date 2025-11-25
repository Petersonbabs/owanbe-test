import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='relative bg-white py-16 md:py-24 px-6 md:px-12'>
            {/* Content needs relative + z-index */}
            <div className="relative z-40 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start md:gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
                        BRINGING
                        <br />
                        AFRICA
                        <br />
                        TO YOUR <span className="text-[#fecc2a]">TABLE</span>
                    </h1>

                    <p className="text-lg mb-8 max-w-md">
                        Born from a passion for authentic African cuisine, we bridge tradition and convenience through two complementary brands serving every culinary need.
                    </p>

                    <a href="#our-story" className="bg-[#fecc2a] hover:bg-[#fecc2a90] text-black font-bold py-1 md:py-3 px-3 md:px-8 rounded-full transition-colors">
                        <span>Explore our story</span>
                    </a>
                </div>
                <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">

                    {/* Main Circular Image */}
                    <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                        <img
                            src="/about/pots.png"
                            alt="Featured Dish"
                            className=" rounded-full mx-auto md:mx-0 object-cover"
                        />

                        {/* Top Right Image */}
                        <div className="absolute z-20 -top-4 -right-8 md:-top-8 -md:right-16">
                            <img
                                src="/homepage/team-in-yellow.png"
                                alt="Spice"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                            />
                        </div>


                        <div className="bg-[#fecc2a] shadow py-1 px-2 text-center w-fit rounded-lg! absolute z-20 bottom-0 left-0 md:bottom-8 md:-left-8 ">
                            <p className="font-bold text-sm">10+ Years</p>
                            <p className="text-sm">Culinary Experience</p>
                        </div>
                    </div>


                </div>
            </div>
        </section >

    )
}

export default Hero