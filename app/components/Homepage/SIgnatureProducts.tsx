import React from 'react'
import ProductCard from '../ui/ProductCard'
import Link from 'next/link'
import { Ampersand } from 'lucide-react'

const SignatureProducts = () => {
    const products = [
        {
            image:
                '/homepage/signature/product-1.png',
            title: 'DRY IRU (LOCUST BEANS)',
            description: 'Traditional Nigerian fermented locust beans - adds authentic depth and flavor to soups',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-2.png',
            title: 'GARRI IJEBU',
            description: 'Premium Ijebu garri - fine texture cassava flakes perfect for eba and garri soakings',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-3.png',
            title: 'PALM OIL',
            description: 'Pure red palm oil - rich, natural and essential for authentic Nigerian cooking',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-4.png',
            title: 'HONEY',
            description: 'Pure natural honey - raw, unprocessed sweetness straight from nature',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-5.png',
            title: 'CORN STICKS (KOKORO EGBA)',
            description: 'Crunchy Nigerian corn snack - perfectly spiced and traditionally made',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-6.png',
            title: 'OFADA RICE (BROWN RICE)',
            description: 'Indigenous Nigerian brown rice - unpolished, aromatic and highly nutritious',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-7.png',
            title: 'WHIPPED SHEA BUTTER - ORI',
            description: 'Pure whipped shea butter - natural African moisturizer for skin and hair care',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-8.png',
            title: 'ROASTED PEANUT',
            description: 'Freshly roasted groundnuts - crunchy, flavorful and perfect for snacking',
            actionText: 'SHOP NOW',
        },
        {
            image:
                '/homepage/signature/product-9.png',
            title: 'GROUND HOT PEPPER',
            description: 'Finely ground, aromatic hot pepper for seasoning and adding spice to your dishes',
            actionText: 'SHOP NOW',
        },
    ]
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-12" id='signature-products'>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 relative w-fit m-auto max-w-[600px]">
                    <div className='relative z-10'>
                        <div className="text-3xl md:text-4xl flex flex-col items-center font-bold z-8 mb-4">
                            <h2><span className='text-[#fecc2a]'>SIGNATURE PRODUCTS</span> FROM</h2>
                            <div className='flex gap-4 items-center'>
                                <img src="/brand/owanbe-logo.png" className='w-32 p-0 mb-4 object-contain' />
                                <Ampersand />
                                <img src="/brand/mofai-logo.png" className='w-18 p-0 mb-4 object-contain' />
                            </div>
                        </div>
                        {/* <img src="/brand/mofai-logo.png" className='absolute  right-6 -top-12 ' alt="" width={90} height={90} /> */}
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our range of authentic African ingredients and specialty
                            items, carefully selected for quality and flavor.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-16">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            actionText={product.actionText}
                            customStyles=''
                            customContentStyles='flex flex-col h-full justify-between p-4 items-center text-center'
                            customLinkStyle='w-fit m-auto !text-[#0d4621]'
                        />
                    ))}
                </div>
                <div className="text-center mt-16">
                    <a href={process.env.NEXT_PUBLIC_OWANBE_URL as string} className="bg-transparent border border-black text-black px-3 md:py-3 py-2 text-sm md:px-8 rounded-full transition-colors">
                        <span>VIEW ALL PRODUCTS</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SignatureProducts