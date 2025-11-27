'use client'
import React, { useEffect, useRef } from 'react'
import ProductCard from '../ui/ProductCard'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const WeServe = () => {
    const meals = [
        {
            image: '/homepage/meal/meal-1.png',
            title: 'Amala & Gbegiri',
            description: 'Smooth swallow served with delicious soup',
            actionText: 'ORDER MEAL',
        },
        {
            image: '/homepage/meal/meal-2.png',
            title: 'Ewa Agoyin (Mashed Beans)',
            description: 'Soft beans in spicy rich pepper sauce',
            actionText: 'ORDER MEAL',
        },
        {
            image: '/homepage/meal/meal-3.png',
            title: 'Smoky Jollof Rice',
            description: 'Classic West African one-pot rice dish',
            actionText: 'ORDER MEAL',
        },
        {
            image: '/homepage/meal/meal-4.png',
            title: 'Moi Moi (Bean Pudding)',
            description: 'Steamed bean pudding with rich flavors',
            actionText: 'ORDER MEAL',
        },
        {
            image: '/homepage/meal/meal-5.png',
            title: 'Efo Riro (Spinach Stew)',
            description: 'Rich spinach stew with assorted meat',
            actionText: 'ORDER MEAL',
        },
        {
            image: '/homepage/meal/meal-6.png',
            title: 'YOYO ( Whitebait Fish)',
            description: 'Perfectly seasoned fresh fish',
            actionText: 'ORDER MEAL',
        },
        {
            image: '/homepage/meal/meal-7.png',
            title: 'Puff Puff',
            description: 'Sweet, fluffy deep-fried dough balls',
            actionText: 'ORDER MEAL',
        },
        {
            image: '/homepage/meal/meal-8.png',
            title: 'Zobo Drink',
            description: 'Refreshing hibiscus tea with natural spices',
            actionText: 'ORDER MEAL',
        },
    ]

    const sectionRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const buttonRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        // Initialize the ref array
        cardsRef.current = cardsRef.current.slice(0, meals.length)

        const ctx = gsap.context(() => {
            // Master timeline for the section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
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

            // Description animation
            tl.fromTo(descriptionRef.current,
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
                "-=0.3"
            )

            // Cards staggered animation - cascade effect
            tl.fromTo(cardsRef.current,
                {
                    opacity: 0,
                    y: 80,
                    rotationY: 15,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationY: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: {
                        amount: 0.6,
                        grid: "auto",
                        from: "center"
                    },
                    ease: "back.out(1.4)"
                },
                "-=0.2"
            )

            // Button animation
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
                },
                "-=0.2"
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [meals.length])

    return (
        <section ref={sectionRef} className="bg-white py-16 px-6 md:px-12" id='menu'>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div 
                        ref={headingRef}
                        className="text-3xl md:text-4xl justify-center items-center md:gap-4 flex flex-col md:flex-row font-bold mb-8 leading-0.5 opacity-0"
                    >
                        <div className='flex items-center gap-2'>
                            <span>AT</span> 
                            <img 
                                src="/brand/owanbe-logo.png" 
                                className='w-32 p-0 mb-4' 
                                alt="Owanbe Logo"
                            />
                        </div> 
                        <span className='hidden md:inline'>-</span> 
                        <p>WE <span className="text-[#fecc2a]">SERVE</span></p>
                    </div>
                    <p 
                        ref={descriptionRef}
                        className="text-gray-600 max-w-2xl mx-auto opacity-0"
                    >
                        Authentic Jollof Rice, Delicious Fried Rice, Pepper Soup, Suya, Whitebait Fish and More
                    </p>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                    {meals.map((meal, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el
                            }}
                            className="opacity-0 transform-gpu"
                        >
                            <ProductCard
                                image={meal.image}
                                title={meal.title}
                                description={meal.description}
                                actionText={meal.actionText}
                            />
                        </div>
                    ))}
                </div>

                {/* View Full Menu Button */}
                <div className="text-center mt-16">
                    <a 
                        ref={buttonRef}
                        href={process.env.NEXT_PUBLIC_OWANBE_URL as string} 
                        className="bg-transparent border border-black text-black px-3 md:py-3 py-2 text-sm md:px-8 rounded-full transition-colors opacity-0"
                    >
                        <span>VIEW FULL MENU</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default WeServe