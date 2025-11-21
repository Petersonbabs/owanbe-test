import React from 'react'
import { Check } from 'lucide-react'

const ProductsSection = () => {
    return (
        <section className="bg-[#0C7A4B] py-16 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6 z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-[#0C7A4B] rounded-full flex items-center justify-center relative">
                                <div className="w-12 h-12 bg-[#0C7A4B] rounded-full flex items-center justify-center">
                                    <div className="w-10 h-10 bg-[#F2B22F] rounded-full flex items-center justify-center">
                                        <span className="text-[#0C7A4B] text-2xl">🍃</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-white">
                                    MOFAI <span className="text-xl md:text-3xl">FOODS</span>
                                </h1>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-relaxed max-w-lg">
                            Authentic African ingredients and spices sourced directly from trusted suppliers. Create your own traditional dishes with premium, authentic products.
                        </p>

                        <ul className="space-y-4 max-w-lg">
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 bg-[#0C7A4B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg">Premium quality ingredients</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 bg-[#0C7A4B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg">100% authentic African products</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 bg-[#0C7A4B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg">Carefully sourced and packaged</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 bg-[#0C7A4B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg">Create traditional dishes at home</span>
                            </li>
                        </ul>

                        <button className="border-2 border-[#0C7A4B] bg-white text-[#0C7A4B] font-bold py-3 px-8 rounded-md transition-colors hover:bg-[#0C7A4B] hover:text-white mt-6">
                            ORDER NOW
                        </button>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 bg-[#0C7A4B] text-white px-4 py-2 rounded-lg text-xs md:text-sm font-bold z-20">
                            100% Authentic Premium Quality
                        </div>
                        <div className="relative w-full max-w-lg">
                            <div className="bg-white rounded-full w-full aspect-square flex items-center justify-center p-8 md:p-12 relative">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="w-40 md:w-48 h-56 md:h-64 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-xl shadow-2xl transform rotate-3 relative">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-xl"></div>
                                        <div className="p-3 md:p-4 h-full flex flex-col">
                                            <div className="text-center mb-2">
                                                <span className="text-xl md:text-2xl font-black text-[#8B4513]" style={{ fontFamily: 'cursive, serif' }}>Corn Sticks</span>
                                            </div>
                                            <div className="flex-1 bg-white rounded-lg flex items-center justify-center p-2">
                                                <div className="w-28 md:w-32 h-28 md:h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center shadow-inner">
                                                    <div className="w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-lg"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-20 md:w-24 h-28 md:h-32 bg-white rounded-lg shadow-xl border-2 border-gray-200 transform -rotate-6">
                                        <div className="h-full flex flex-col">
                                            <div className="h-6 md:h-8 bg-[#DB4C4C] rounded-t-lg flex items-center justify-center">
                                                <div className="w-12 md:w-16 h-3 md:h-4 bg-white rounded"></div>
                                            </div>
                                            <div className="flex-1 bg-gradient-to-b from-[#8B4513] to-[#654321] rounded-b-lg flex items-center justify-center">
                                                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#A0522D] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection

