import React from 'react'
import ProductCard from '../ui/ProductCard'
import Link from 'next/link'

const TraditionalItems = () => {
    const items = [
        {
            image:
                '/homepage/traditional-products/product-1.png',
            title: 'CALABASH BOWL',
            description: 'Traditional African dried gourd bowls - natural, eco-friendly serving dishes',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/traditional-products/product-2.png',
            title: 'TRADITIONAL MORTAR & PESTLE',
            description: 'Authentic wooden mortar and pestle for grinding spices and preparing traditional meals',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/traditional-products/product-3.png',
            title: 'DRIED BROOM STICKS',
            description: 'Authentic Yoruba delicacy - Gbegiri, Ewedu and rich stew served together in perfect harmony',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/traditional-products/product-4.png',
            title: 'BITTER MELON',
            description: 'Fresh bitter melon - traditional vegetable packed with nutrients and health benefits',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/traditional-products/product-5.png',
            title: 'CHEBE WOODEN GAME BOARD',
            description: 'Traditional African board game',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/traditional-products/product-5.png',
            title: 'Classic wooden game board',
            description: 'Traditional African wooden game board - handcrafted for the classic strategy game',
            actionText: 'SHOP NOW',
        }
    ]
    return (
        <section className="bg-[#FBFBFB99] py-16 px-6 md:px-12" id="traditional-items">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        TRADITIONAL <span className="text-[#fecc2a]">AFRICAN ITEMS</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Authentic cultural products for your home and kitchen
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 md:mb-16 md:gap-8">
                    {items.map((item, index) => (
                        <ProductCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            actionText={item.actionText}
                            customContentStyles='flex flex-col h-full justify-between p-4 items-center text-center'
                            customLinkStyle='w-fit m-auto !text-[#0d4621]'
                        />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href={process.env.NEXT_PUBLIC_OWANBE_URL as string} className="bg-transparent border border-black text-black px-3 md:py-3 py-2 text-sm md:px-8 rounded-full transition-colors">
                        <span>VIEW ALL PRODUCTS</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TraditionalItems