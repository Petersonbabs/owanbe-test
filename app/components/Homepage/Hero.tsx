import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='relative hero py-16 md:py-24 px-6 md:px-12'>
            {/* White overlay */}
            <div className="absolute inset-0 bg-white/90 z-0"></div>

            {/* Content needs relative + z-index */}
            <div className="relative z-40 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start md:gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
                        DINING
                        <br />
                        REDEFINED
                        <br />
                        WITH <span className="text-[#fecc2a]">EVERY BITE</span>
                    </h1>

                    <p className="text-lg mb-8 max-w-md">
                        Premium <button className='bg-[#fecc2a] px-2 rounded-lg shadow'>ingredients</button> and ready-to-eat meals that bring the taste of home straight to your door
                    </p>

                    <div className='flex gap-4 items-center'>
                        <a href={process.env.NEXT_PUBLIC_OWANBE_URL} className="bg-[#fecc2a] hover:bg-[#fecc2a90] text-black font-bold py-1 md:py-3 px-3 md:px-8 rounded-full transition-colors">
                            <span>Order now</span> <MoveRight className="inline-block ml-2" />
                        </a>
                        <Link href={"/about-us"} className="bg-transparent border border-black text-black font-bold px-3 md:py-3 py-1 md:px-8 rounded-full transition-colors">
                            <span>Read more</span>
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">

                    {/* Main Circular Image */}
                    <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                        <img
                            src="/homepage/hero-1.png"
                            alt="Featured Dish"
                            className=" rounded-full mx-auto md:mx-0 object-cover"
                        />

                        {/* Top Right Image */}
                        <div className="absolute z-20 -top-4 -right-8 md:-top-8 -md:right-16">
                            <img
                                src="/homepage/hero-2.png"
                                alt="Spice"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                            />
                        </div>
                        {/* Bottom Right Image */}
                        <div className="absolute z-20 bottom-0 right-0 md:-bottom-8 -md:right-16">
                            <img
                                src="/homepage/hero-3.png"
                                alt="Ingredient"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                            />
                        </div>

                        {/* Bottom Left Image */}
                        <div className="absolute z-20 bottom-0 left-0 md:-bottom-8 -md:right-16">
                            <img
                                src="/homepage/hero-4.png"
                                alt="Ingredient"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                            />
                        </div>
                    </div>


                </div>

            </div>
        </section>

    )
}

export default Hero