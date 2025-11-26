'use client'
import { Utensils, Leaf, Book, Award } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const Features = () => {
    const features = [
        {
            image: <Utensils className="h-8 w-8 text-white" />,
            title: 'AUTHENTIC FLAVORS',
            description: 'An original experience. Our chef cultivates an emotional connection with each meal.',
        },
        {
            image: <Leaf className="h-8 w-8 text-white" />,
            title: 'FRESH & DELICIOUS',
            description: 'Serving fresh, delicious and classic food.',
        },
        {
            image: <Book className="h-8 w-8 text-white" />,
            title: 'TRADITIONAL RECIPES',
            description: 'Great cooking is about being present and respecting ingredients.',
        },
        {
            image: <Award className="h-8 w-8 text-white" />,
            title: 'CULTURAL EXCELLENCE',
            description: 'Each dish a journey through authentic African cuisines.',
        },
    ]

    const sectionRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Select all feature cards within the container
            const featureCards = gsap.utils.toArray('.feature-card') as HTMLDivElement[]

            gsap.fromTo(featureCards,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Hover animations
            featureCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        scale: 1.05,
                        y: -5,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-[#d32e12] py-16 px-6 md:px-12">
            <div ref={containerRef} className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card flex space-y-4 flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="mb-4 rounded-full overflow-hidden">
                                <Image
                                    src={`/homepage/feature-${index + 1}.png`}
                                    alt={feature.title}
                                    width={150}
                                    height={150}
                                    className="rounded-full group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-white font-bold mb-2 text-lg group-hover:text-yellow-200 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-white text-sm leading-relaxed group-hover:scale-105 transition-transform duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features