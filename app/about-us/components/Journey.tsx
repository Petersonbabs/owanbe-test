'use client'
import { CheckCircle, Dot, MoveRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const Journey = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const mainImageRefMobile = useRef<HTMLImageElement>(null)
    const smallImageRefMobile = useRef<HTMLImageElement>(null)
    const mainImageRefDesktop = useRef<HTMLImageElement>(null)
    const smallImageRefDesktop = useRef<HTMLImageElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Get the current active images based on screen size
            const getActiveImages = () => {
                if (typeof window === 'undefined') return { main: null, small: null }

                const isMobile = window.innerWidth < 768
                return {
                    main: isMobile ? mainImageRefMobile.current : mainImageRefDesktop.current,
                    small: isMobile ? smallImageRefMobile.current : smallImageRefDesktop.current
                }
            }

            const { main: mainImage, small: smallImage } = getActiveImages()

            // Master timeline with scroll trigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })

            // Main image animation - timeline style entrance
            tl.fromTo(mainImage,
                {
                    opacity: 0,
                    scale: 0.8,
                    rotationY: -90
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }
            )

            // Small image animation - appears like a memory
            tl.fromTo(smallImage,
                {
                    opacity: 0,
                    scale: 0.3,
                    x: 50,
                    y: 50
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    duration: 0.9,
                    ease: "back.out(1.8)"
                },
                "-=0.8"
            )

            // Heading animation - split text with journey theme
            tl.fromTo(headingRef.current,
                {
                    opacity: 0,
                    y: 80
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                },
                "-=0.5"
            )

            // First paragraph - fade up with slight delay
            tl.fromTo(paragraphsRef.current[0],
                {
                    opacity: 0,
                    y: 40,
                    x: -20
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.3"
            )

            // Second paragraph - fade up with different timing
            tl.fromTo(paragraphsRef.current[1],
                {
                    opacity: 0,
                    y: 40,
                    x: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.4"
            )

            // Add hover effects for desktop only
            if (mainImageRefDesktop.current) {
                mainImageRefDesktop.current.addEventListener('mouseenter', () => {
                    gsap.to(mainImageRefDesktop.current, {
                        scale: 1.05,
                        rotationY: 10,
                        duration: 0.5,
                        ease: "power2.out"
                    })
                })

                mainImageRefDesktop.current.addEventListener('mouseleave', () => {
                    gsap.to(mainImageRefDesktop.current, {
                        scale: 1,
                        rotationY: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    })
                })
            }

            if (smallImageRefDesktop.current) {
                smallImageRefDesktop.current.addEventListener('mouseenter', () => {
                    gsap.to(smallImageRefDesktop.current, {
                        scale: 1.1,
                        rotation: 5,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })

                smallImageRefDesktop.current.addEventListener('mouseleave', () => {
                    gsap.to(smallImageRefDesktop.current, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            }

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-[#0d4621] py-16 px-6 md:px-12 overflow-hidden" id="our-story">
            <div className="max-w-7xl mx-auto gap-4 md:gap-8 flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-between items-center">
                    {/* Mobile Layout - shown on mobile */}
                    <div className="relative md:hidden">
                        <img
                            ref={mainImageRefMobile}
                            src="/homepage/team-in-yellow.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto opacity-0 transform-gpu"
                            alt="Our journey team"
                        />
                        <div className="absolute -bottom-8 right-0">
                            <img
                                ref={smallImageRefMobile}
                                src="/homepage/meal/meal-4.png"
                                className="w-32 h-32 rounded-full object-cover opacity-0 transform-gpu"
                                alt="Traditional meal"
                            />
                        </div>
                    </div>

                    {/* Desktop Layout - shown on desktop */}
                    <div className="relative hidden md:block">
                        <img
                            ref={mainImageRefDesktop}
                            src="/homepage/team-in-yellow.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto opacity-0 transform-gpu cursor-pointer"
                            alt="Our journey team"
                        />
                        <div className="absolute -bottom-8 right-0">
                            <img
                                ref={smallImageRefDesktop}
                                src="/homepage/meal/meal-4.png"
                                className="w-32 h-32 rounded-full object-cover opacity-0 transform-gpu cursor-pointer"
                                alt="Traditional meal"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 ref={headingRef} className="text-xl md:text-4xl font-bold mb-6 text-white opacity-0 transform-gpu">
                        A JOURNEY OF <br />
                        <span className="text-[#fecc2a]">FLAVOUR & HERITAGE</span>
                    </h2>

                    <p
                        ref={el => { paragraphsRef.current[0] = el }}
                        className="text-white mb-6 opacity-0 transform-gpu leading-relaxed"
                    >
                        What began as a small passion project has grown into a celebration of African culinary excellence. We source the finest ingredients and work with expert chefs to deliver authentic experiences.
                    </p>

                    <p
                        ref={el => { paragraphsRef.current[1] = el }}
                        className="text-white mb-6 opacity-0 transform-gpu leading-relaxed"
                    >
                        From traditional recipes passed down through generations to modern innovations that respect our roots, every product tells a story of culture, community, and pride.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Journey