import React from 'react'
import { ChefHat, Award, Truck } from 'lucide-react'

const ProcessSection = () => {
    return (
        <section className="bg-white py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-black mb-4">
                        <span className="text-black">OUR </span>
                        <span className="text-[#F2B22F]">PROCESS</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Excellence in every step, from source to service
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full border-4 border-[#FBE7E7] flex items-center justify-center mb-4 bg-white">
                            <div className="w-12 h-12 bg-[#FBE7E7] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#DB4C4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">Source</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            Premium ingredients from trusted suppliers
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full border-4 border-[#FBE7E7] flex items-center justify-center mb-4 bg-white">
                            <div className="w-12 h-12 bg-[#FBE7E7] rounded-full flex items-center justify-center">
                                <ChefHat className="w-8 h-8 text-[#DB4C4C]" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">Craft</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            Traditional recipes, expert preparation
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full border-4 border-[#FBE7E7] flex items-center justify-center mb-4 bg-white">
                            <div className="w-12 h-12 bg-[#FBE7E7] rounded-full flex items-center justify-center">
                                <Award className="w-8 h-8 text-[#DB4C4C]" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">Quality Check</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            Rigorous standards maintained
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full border-4 border-[#FBE7E7] flex items-center justify-center mb-4 bg-white">
                            <div className="w-12 h-12 bg-[#FBE7E7] rounded-full flex items-center justify-center">
                                <Truck className="w-8 h-8 text-[#DB4C4C]" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">Deliver</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            Fresh to your door, event or kitchen
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection

