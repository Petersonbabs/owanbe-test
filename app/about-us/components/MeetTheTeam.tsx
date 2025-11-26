'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const MeetTheTeam = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const imagesRef = useRef<(HTMLImageElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })

            // Heading animation
            tl.fromTo(headingRef.current,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }
            )

            // Team images - simple staggered fade up
            tl.fromTo(imagesRef.current,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    stagger: 0.2,
                    ease: "power3.out"
                },
                "-=0.4"
            )

            // Add hover effects
            imagesRef.current.forEach((image) => {
                if (image) {
                    image.addEventListener('mouseenter', () => {
                        gsap.to(image, {
                            scale: 1.05,
                            y: -5,
                            duration: 0.3,
                            ease: "power2.out"
                        })
                    })

                    image.addEventListener('mouseleave', () => {
                        gsap.to(image, {
                            scale: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        })
                    })
                }
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef} className='py-20 px-6 md:px-12 overflow-hidden'>
            <h2
                ref={headingRef}
                className="text-3xl text-center md:text-4xl font-bold mb-6 opacity-0 transform-gpu"
            >
                MEET THE <span className="text-[#fecc2a]">TEAM</span>
            </h2>

            <div className='flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto gap-4 md:gap-16 items-center my-8'>
                <div className='max-w-[200px] md:max-w-[350px]'>
                    <img
                        ref={el => { imagesRef.current[0] = el }}
                        src="/about/staffs.png"
                        alt="Team member 1"
                        className='w-full opacity-0 transform-gpu cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300'
                    />
                </div>
                <div className='max-w-[200px] md:max-w-[350px]'>
                    <img
                        ref={el => { imagesRef.current[1] = el }}
                        src="/about/staffs-2.png"
                        alt="Team member 2"
                        className='w-full opacity-0 transform-gpu cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300'
                    />
                </div>
                <div className='max-w-[200px] md:max-w-[350px]'>
                    <img
                        ref={el => { imagesRef.current[2] = el }}
                        src="/about/staffs-3.png"
                        alt="Team member 3"
                        className='w-full opacity-0 transform-gpu cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300'
                    />
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam