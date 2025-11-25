'use client'
import React, { useEffect, useRef } from 'react'
import { MapPin, ChefHat, Clock, Heart, Badge, Award, Users2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export function Values() {
    const reasons = [
        {
            icon: <Award className="h-8 w-8 text-black" />,
            title: 'Authenticity',
            description: 'True to our roots, every ingredient and recipe honors African tradition.',
        },
        {
            icon: <Heart className="h-8 w-8 text-black" />,
            title: 'Quality',
            description: 'Premium ingredients sourced with care, prepared to perfection.',
        },
        {
            icon: <Users2 className="h-8 w-8 text-black" />,
            title: 'Community',
            description: 'Building connections through food, celebrating culture together.',
        }
    ]

    const sectionRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const iconsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Master timeline for the section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })

            // Heading animation - scale and fade in
            tl.fromTo(headingRef.current,
                {
                    opacity: 0,
                    y: 60,
                    scale: 1.1
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    ease: "power3.out"
                }
            )

            // Subtitle animation - fade up with delay
            tl.fromTo(subtitleRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out"
                },
                "-=0.5"
            )

            // Icons animation - bounce in with rotation
            tl.fromTo(iconsRef.current,
                {
                    opacity: 0,
                    scale: 0,
                    rotation: -180
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.8)"
                },
                "-=0.3"
            )

            // Cards animation - slide up with glow effect
            tl.fromTo(cardsRef.current,
                {
                    opacity: 0,
                    y: 80,
                    rotationX: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power3.out"
                },
                "-=0.6"
            )

            // Add continuous subtle pulse to icons
            iconsRef.current.forEach((icon) => {
                if (icon) {
                    const pulseTl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 3 })
                    pulseTl.to(icon, {
                        scale: 1.05,
                        duration: 2,
                        ease: "sine.inOut"
                    })
                }
            })

            // Add hover effects to cards
            cardsRef.current.forEach((card) => {
                if (card) {
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            y: -10,
                            scale: 1.02,
                            boxShadow: "0 20px 40px rgba(254, 204, 42, 0.15)",
                            duration: 0.3,
                            ease: "power2.out"
                        })
                    })

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            y: 0,
                            scale: 1,
                            boxShadow: "none",
                            duration: 0.3,
                            ease: "power2.out"
                        })
                    })
                }
            })

            // Add hover effects to icons
            iconsRef.current.forEach((icon) => {
                if (icon) {
                    icon.addEventListener('mouseenter', () => {
                        gsap.to(icon, {
                            scale: 1.2,
                            rotation: 10,
                            duration: 0.3,
                            ease: "power2.out"
                        })
                    })

                    icon.addEventListener('mouseleave', () => {
                        gsap.to(icon, {
                            scale: 1.05,
                            rotation: 0,
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
        <section ref={sectionRef} className="bg-white py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 
                        ref={headingRef}
                        className="text-3xl md:text-4xl font-bold mb-3 opacity-0 transform-gpu"
                    >
                        OUR <span className="text-[#fecc2a]">CORE VALUES</span>
                    </h2>
                    <p 
                        ref={subtitleRef}
                        className="text-gray-600 text-sm opacity-0 transform-gpu"
                    >
                        The principles that guide everything we do
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div 
                            key={index} 
                            ref={el => { cardsRef.current[index] = el }}
                            className="text-center p-6 rounded-2xl opacity-0 transform-gpu cursor-pointer transition-all duration-300 hover:bg-gray-50"
                        >
                            <div className="flex justify-center mb-4">
                                <div 
                                    ref={el => { iconsRef.current[index] = el }}
                                    className="w-20 h-20 rounded-full bg-[#fecc2a] flex items-center justify-center opacity-0 transform-gpu cursor-pointer"
                                >
                                    {reason.icon}
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}