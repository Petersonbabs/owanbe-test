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

const OurCommitment = () => {
    const commitments = [
        "Premium Quality Ingredients",
        "Traditional & Specialty Fusion Recipes",
        "Hygienic Facilities & Utmost Cleanliness"
    ]

    const sectionRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)
    const smallImageRef = useRef<HTMLImageElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const listItemsRef = useRef<(HTMLLIElement | null)[]>([])
    const buttonRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        // Initialize the ref array
        listItemsRef.current = listItemsRef.current.slice(0, commitments.length)

        const ctx = gsap.context(() => {
            // Create a master timeline for the section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })

            // Image animation - scale and rotate in
            tl.fromTo(imageRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    rotation: -5
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    ease: "back.out(1.7)"
                }
            )

            // Badge animation - fly in from right
            tl.fromTo(badgeRef.current,
                {
                    opacity: 0,
                    x: 100,
                    y: -50
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.5" // Overlap with previous animation
            )

            // Small image animation - bounce in from bottom
            tl.fromTo(smallImageRef.current,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.5
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "bounce.out"
                },
                "-=0.3"
            )

            // Text content animation - fade up
            tl.fromTo(textRef.current,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.2"
            )

            // List items staggered animation
            tl.fromTo(listItemsRef.current,
                {
                    opacity: 0,
                    x: -30
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power2.out"
                },
                "-=0.2"
            )

            // Button animation - scale in with glow
            tl.fromTo(buttonRef.current,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.5)"
                }
            )

            // Add continuous floating animation to badge
            const floatAnimation = gsap.to(badgeRef.current, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })

            // Add hover effects to button
            buttonRef.current?.addEventListener('mouseenter', () => {
                gsap.to(buttonRef.current, {
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(254, 204, 42, 0.3)",
                    duration: 0.3,
                    ease: "power2.out"
                })
            })

            buttonRef.current?.addEventListener('mouseleave', () => {
                gsap.to(buttonRef.current, {
                    scale: 1,
                    boxShadow: "none",
                    duration: 0.3,
                    ease: "power2.out"
                })
            })

            // Add hover effect to main image
            imageRef.current?.addEventListener('mouseenter', () => {
                gsap.to(imageRef.current, {
                    scale: 1.02,
                    rotation: 2,
                    duration: 0.3,
                    ease: "power2.out"
                })
            })

            imageRef.current?.addEventListener('mouseleave', () => {
                gsap.to(imageRef.current, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [commitments.length])

    return (
        <section ref={sectionRef} className="bg-[#0d4621] py-16 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto gap-4 md:gap-8 flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-between items-center">
                    {/* Mobile Layout */}
                    <div ref={imageRef} className="relative md:hidden">
                        <img
                            src="/homepage/team-in-yellow.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto cursor-pointer"
                            alt="Our team"
                        />
                        <div ref={badgeRef} className="bg-[#fecc2a] shadow p-1 text-center w-fit rounded-lg absolute -top-8 sm:top-0 -right-4">
                            <p className="font-bold text-sm">100% Quality</p>
                            <p className="text-sm">Guaranteed Excellence</p>
                        </div>
                        <div className="absolute -bottom-8 sm:bottom-4 left-0">
                            <img
                                ref={smallImageRef}
                                src="/homepage/team-member-in-green.png"
                                className="w-20 h-20 rounded-full object-cover cursor-pointer"
                                alt="Team member"
                            />
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div ref={imageRef} className="relative hidden md:block">
                        <img
                            src="/homepage/team.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto cursor-pointer"
                            alt="Our team"
                        />
                        <div ref={badgeRef} className="bg-[#fecc2a] shadow text-sm p-2 text-center w-fit rounded-xl absolute top-[50%] -right-26">
                            <h3 className="font-bold">100% Quality</h3>
                            <p>Guaranteed Excellence</p>
                        </div>
                        <div className="absolute -bottom-8 left-0">
                            <img
                                ref={smallImageRef}
                                src="/homepage/team-member-in-green.png"
                                className="w-32 h-32 rounded-full object-cover cursor-pointer"
                                alt="Team member"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div ref={textRef} className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-4xl font-bold mb-6 text-white">
                        OUR COMMITMENT TO <br />
                        <span className="text-[#fecc2a]">AUTHENTICITY & EXCELLENCE</span>
                    </h2>
                    <p className="text-white mb-6 leading-relaxed">
                        Every dish tells a story, crafted with passion and commitment to quality. We source the finest ingredients to bring you an unforgettable culinary experience.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {commitments.map((commitment, index) => (
                            <li
                                key={index}
                                ref={(el) => {
                                    listItemsRef.current[index] = el
                                }}
                                className="flex items-center group cursor-pointer"
                            >
                                <Dot className="h-2 w-2 bg-[#fecc2a] text-[#fecc2a] mr-2 mt-1 rounded-full group-hover:scale-150 transition-transform duration-300" />
                                <span className="text-white group-hover:text-[#fecc2a] group-hover:translate-x-2 transition-all duration-300">
                                    {commitment}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        ref={buttonRef}
                        href="/about-us"
                        className="inline-flex items-center bg-[#fecc2a] hover:bg-[#f8c218] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 group"
                    >
                        <span>Learn More</span>
                        <MoveRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurCommitment