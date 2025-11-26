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

const TraditionalItems = () => {
    const items = [
        {
            image: '/homepage/traditional-products/product-1.png',
            title: 'CALABASH BOWL',
            description: 'Traditional African dried gourd bowls - natural, eco-friendly serving dishes',
            actionText: 'SHOP NOW',
        },
        {
            image: '/homepage/traditional-products/product-2.png',
            title: 'TRADITIONAL MORTAR & PESTLE',
            description: 'Authentic wooden mortar and pestle for grinding spices and preparing traditional meals',
            actionText: 'SHOP NOW',
        },
        {
            image: '/homepage/traditional-products/product-3.png',
            title: 'DRIED BROOM STICKS',
            description: 'Authentic Yoruba delicacy - Gbegiri, Ewedu and rich stew served together in perfect harmony',
            actionText: 'SHOP NOW',
        },
        {
            image: '/homepage/traditional-products/product-4.png',
            title: 'BITTER MELON',
            description: 'Fresh bitter melon - traditional vegetable packed with nutrients and health benefits',
            actionText: 'SHOP NOW',
        },
        {
            image: '/homepage/traditional-products/product-5.png',
            title: 'CHEBE WOODEN GAME BOARD',
            description: 'Traditional African board game',
            actionText: 'SHOP NOW',
        },
        {
            image: '/homepage/traditional-products/product-6.png',
            title: 'Classic wooden game board',
            description: 'Traditional African wooden game board - handcrafted for the classic strategy game',
            actionText: 'SHOP NOW',
        }
    ]

    const sectionRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const buttonRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        // Initialize the ref array
        cardsRef.current = cardsRef.current.slice(0, items.length)

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

            // Title animation - African pattern inspired
            tl.fromTo(headingRef.current,
                {
                    opacity: 0,
                    y: 60,
                    scale: 1.2
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out"
                }
            )

            // Subtitle animation - fade in with delay
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

            // Cards animation - staggered reveal with cultural pattern
            tl.fromTo(cardsRef.current,
                {
                    opacity: 0,
                    y: 100,
                    rotationX: -20,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 0.9,
                    stagger: {
                        amount: 1,
                        grid: [2, 3], // 2 columns, 3 rows
                        from: "center"
                    },
                    ease: "back.out(1.4)"
                },
                "-=0.3"
            )

            // Button animation - slide in from bottom
            tl.fromTo(buttonRef.current,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out"
                },
                "-=0.2"
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [items.length])

    return (
        <section ref={sectionRef} className="bg-[#FBFBFB] py-16 px-6 md:px-12" id="traditional-items">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 
                        ref={headingRef}
                        className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
                    >
                        TRADITIONAL <span className="text-[#fecc2a]">AFRICAN ITEMS</span>
                    </h2>
                    <p 
                        ref={subtitleRef}
                        className="text-gray-600 max-w-2xl mx-auto opacity-0"
                    >
                        Authentic cultural products for your home and kitchen
                    </p>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 md:mb-16 md:gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={el => {
                                cardsRef.current[index] = el
                            }}
                            className="opacity-0 transform-gpu"
                        >
                            <ProductCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                actionText={item.actionText}
                                customContentStyles='flex flex-col h-full justify-between p-4 items-center text-center'
                                customLinkStyle='w-fit m-auto !text-[#0d4621]'
                                customImageStyle='bg-[#E3EEF3] object-cover!'
                            />
                        </div>
                    ))}
                </div>

                {/* View All Products Button */}
                <div className="text-center mt-8">
                    <a 
                        ref={buttonRef}
                        href={process.env.NEXT_PUBLIC_OWANBE_URL as string} 
                        className="bg-transparent border border-black text-black px-3 md:py-3 py-2 text-sm md:px-8 rounded-full transition-colors opacity-0 hover:bg-black hover:text-white duration-300"
                    >
                        <span>VIEW ALL PRODUCTS</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default TraditionalItems