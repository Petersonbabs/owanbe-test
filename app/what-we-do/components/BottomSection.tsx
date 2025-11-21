import React from 'react'
import { ChefHat, Clock, Truck, PartyPopper } from 'lucide-react'

const BottomSection = () => {
    return (
        <section className="bg-[#DB4C4C] py-16 md:py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <div className="bg-white rounded-full w-full aspect-square flex flex-col items-center justify-center p-12 relative overflow-hidden">
                                <div className="absolute top-6 right-6 bg-[#DB4C4C] text-white px-3 py-1.5 rounded text-[10px] font-bold leading-tight">
                                    <div>Ready to Eat</div>
                                    <div>Fresh Daily</div>
                                </div>
                                <div className="flex flex-col items-center gap-5 mt-6">
                                    <div className="relative flex items-center gap-3">
                                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <div className="w-28 h-28 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#654321] rounded-full flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-b from-[#A0522D] to-[#654321] opacity-80"></div>
                                                <div className="absolute top-2 left-2 right-2 h-8 bg-[#8B0000] rounded-t-full"></div>
                                                <div className="absolute bottom-4 left-3 right-3 h-2 bg-[#654321] rounded-full"></div>
                                                <div className="absolute top-8 left-6 w-3 h-3 bg-[#8B0000] rounded-full"></div>
                                                <div className="absolute top-10 right-5 w-2 h-2 bg-[#654321] rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="w-24 h-16 bg-gradient-to-br from-[#F5DEB3] to-[#DEB887] rounded-lg border-2 border-gray-200 shadow-md relative">
                                            <div className="absolute inset-1 bg-white/20 rounded border border-gray-300"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-10 bg-[#D2B48C] rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                                            <div className="w-16 h-1 bg-[#FF8C00] rounded-full"></div>
                                            <div className="w-14 h-1 bg-[#FF8C00] rounded-full"></div>
                                            <div className="w-16 h-1 bg-[#FF8C00] rounded-full"></div>
                                            <div className="w-16 h-1 bg-[#FF8C00] rounded-full"></div>
                                            <div className="w-14 h-1 bg-[#FF8C00] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-white space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-black rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm flex items-center justify-center relative">
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-black"></div>
                                    <div className="w-12 h-12 bg-[#F2B22F] rounded-full flex items-center justify-center">
                                        <span className="text-black font-black text-2xl">H</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <h2 className="text-4xl md:text-5xl font-bold mb-2 relative inline-block" style={{ fontFamily: 'cursive, serif' }}>
                                <span className="text-[#0C7A4B]">Owam</span>
                                <span className="text-[#0C7A4B] relative">
                                    be
                                    <span className="absolute -top-1 left-1 text-[#F2B22F] text-xl">🍃</span>
                                </span>
                                <span className="text-[#0C7A4B]"> Mart</span>
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl leading-relaxed max-w-lg">
                            Authentic Nigerian meals prepared fresh by expert chefs, delivered straight to your door. Perfect for busy professionals, celebrations, or anyone craving home-cooked African food.
                        </p>

                        <ul className="space-y-4 max-w-lg">
                            <li className="flex items-start gap-3">
                                <ChefHat className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-lg">Chef-prepared authentic recipes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-lg">Ready in minutes, no cooking required</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Truck className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-lg">Fresh delivery to your doorstep</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <PartyPopper className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                <span className="text-lg">Perfect for parties and celebrations</span>
                            </li>
                        </ul>

                        <button className="bg-[#FF8C00] hover:bg-[#FF7F00] text-white font-bold py-4 px-8 rounded-md transition-colors mt-6">
                            ORDER NOW
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-white font-black text-2xl md:text-3xl uppercase tracking-wide">
                        PREMIUM READY-TO-EAT MEALS
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BottomSection

