import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='relative hero py-16 md:py-24 px-6 md:px-12 overflow-hidden'>
            {/* White overlay */}
            <div className="absolute inset-0 bg-white/90 z-0"></div>

            {/* Content needs relative + z-index */}
            <div className="relative z-40 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start md:gap-4">
                    {/* Main Heading with staggered animation */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black animate-fade-in-up">
                        <span className="animate-fade-in-up [animation-delay:100ms] opacity-0 inline-block">DINING</span>
                        <br />
                        <span className="animate-fade-in-up [animation-delay:300ms] opacity-0 inline-block">REDEFINED</span>
                        <br />
                        <span className="animate-fade-in-up [animation-delay:500ms] opacity-0 inline-block">
                            WITH <span className="text-[#fecc2a]">EVERY BITE</span>
                        </span>
                    </h1>

                    {/* Paragraph with delay */}
                    <p className="text-lg mb-8 max-w-md animate-fade-in-up [animation-delay:700ms] opacity-0">
                        Premium <button className='bg-[#fecc2a] px-2 rounded-lg shadow hover:scale-105 transition-transform'>ingredients</button> and ready-to-eat meals that bring the taste of home straight to your door
                    </p>

                    {/* Buttons with staggered animation */}
                    <div className='flex gap-4 items-center animate-fade-in-up [animation-delay:900ms] opacity-0'>
                        <a href={process.env.NEXT_PUBLIC_OWANBE_URL} className="bg-[#fecc2a] hover:bg-[#fecc2a90] text-black font-bold py-1 md:py-3 px-3 md:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                            <span>Order now</span> <MoveRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link href={"/about-us"} className="bg-transparent border border-black text-black font-bold px-3 md:py-3 py-1 md:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white">
                            <span>Read more</span>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">
                    {/* Main Circular Image */}
                    <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                        <img
                            src="/homepage/hero-1.png"
                            alt="Featured Dish"
                            className="rounded-full mx-auto md:mx-0 object-cover animate-scale-in [animation-delay:1100ms]"
                        />

                        {/* Floating small images */}
                        <div className="absolute z-20 -top-4 -right-8 md:-top-8 md:-right-16 animate-float [animation-delay:1300ms]">
                            <img
                                src="/homepage/hero-2.png"
                                alt="Spice"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                            />
                        </div>
                        
                        <div className="absolute z-20 bottom-0 right-0 md:-bottom-8 md:-right-16 animate-float [animation-delay:1500ms] [animation-duration:3s]">
                            <img
                                src="/homepage/hero-3.png"
                                alt="Ingredient"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                            />
                        </div>

                        <div className="absolute z-20 bottom-0 left-0 md:-bottom-8 md:left-0 animate-float [animation-delay:1700ms] [animation-duration:2.5s]">
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