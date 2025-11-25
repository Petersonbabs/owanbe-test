'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const Hero = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const textLinesRef = useRef<(HTMLSpanElement | null)[]>([])
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const buttonRef = useRef<HTMLAnchorElement>(null)
    const mainImageRef = useRef<HTMLImageElement>(null)
    const smallImageRef = useRef<HTMLImageElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Master timeline for the hero section
            const tl = gsap.timeline()

            // Split heading animation - each line appears sequentially
            tl.fromTo(textLinesRef.current,
                {
                    opacity: 0,
                    y: 60,
                    rotationX: -45
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out"
                }
            )

            // Description animation - fade up with delay
            tl.fromTo(descriptionRef.current,
                {
                    opacity: 0,
                    y: 40
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.5"
            )

            // Button animation - scale in with bounce
            tl.fromTo(buttonRef.current,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                },
                "-=0.3"
            )

            // Main image animation - simple fade up
            tl.fromTo(mainImageRef.current,
                {
                    opacity: 0,
                    y: 60
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power2.out"
                },
                "-=0.8"
            )

            // Small image animation - simple fade up
            tl.fromTo(smallImageRef.current,
                {
                    opacity: 0,
                    y: 40
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out"
                },
                "-=0.6"
            )

            // Badge animation - simple fade up
            tl.fromTo(badgeRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                },
                "-=0.5"
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className='relative bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden'>
            {/* Content needs relative + z-index */}
            <div className="relative z-40 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start md:gap-4">
                    <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-4 text-black">
                        <span
                            ref={el => { textLinesRef.current[0] = el }}
                            className="inline-block opacity-0 transform-gpu"
                        >
                            BRINGING
                        </span>
                        <br />
                        <span
                            ref={el => { textLinesRef.current[1] = el }}
                            className="inline-block opacity-0 transform-gpu"
                        >
                            AFRICAN DISHES
                        </span>
                        <br />
                        <span
                            ref={el => { textLinesRef.current[2] = el }}
                            className="inline-block opacity-0 transform-gpu"
                        >
                            TO YOUR <span className="text-[#fecc2a]">TABLE</span>
                        </span>
                    </h1>

                    <p
                        ref={descriptionRef}
                        className="text-lg mb-8 max-w-md opacity-0"
                    >
                        Born from a passion for authentic African cuisines, we bridge tradition and convenience through two complementary brands serving every culinary need.
                    </p>

                    <a
                        ref={buttonRef}
                        href="#our-story"
                        className="bg-[#fecc2a] hover:bg-[#fecc2a90] text-black font-bold py-1 md:py-3 px-3 md:px-8 rounded-full transition-colors opacity-0 transform-gpu hover:scale-105 duration-300"
                    >
                        <span>Explore our story</span>
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">
                    {/* Main Circular Image */}
                    <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                        <img
                            ref={mainImageRef}
                            src="/about/pots.png"
                            alt="Traditional cooking pots"
                            className="rounded-full mx-auto md:mx-0 object-cover opacity-0 transform-gpu cursor-pointer hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top Right Image */}
                        <div className="absolute z-20 -top-4 -right-8 md:-top-8 md:-right-16">
                            <img
                                ref={smallImageRef}
                                src="/homepage/team-in-yellow.png"
                                alt="Our team"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover opacity-0 transform-gpu cursor-pointer hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div
                            ref={badgeRef}
                            className="bg-[#fecc2a] shadow py-1 px-2 text-center w-fit rounded-lg absolute z-20 bottom-0 left-0 md:bottom-8 md:-left-8 opacity-0 transform-gpu hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <p className="font-bold text-sm">15+ Years</p>
                            <p className="text-sm">Culinary Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero