import React from 'react'

const Hero = () => {
    return (
        <section className='relative hero py-16 md:py-24 px-6 md:px-12'>
            <div className="absolute inset-0 bg-white opacity-90 z-0">heloe</div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        DINING
                        <br />
                        REDEFINED
                        <br />
                        WITH <span className="text-[#fecc2a]">EVERY BITE</span>
                    </h1>
                    <p className="text-lg mb-8 max-w-md">
                        Experience the rich flavors and traditions of African cuisine
                        reimagined for today's palate.
                    </p>
                    <button className="bg-[#d32e12] hover:bg-[#c02810] text-white font-bold py-3 px-8 rounded-md transition-colors">
                        ORDER NOW
                    </button>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <div className="relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
                            alt="Featured Dish"
                            className="w-full h-auto rounded-full max-w-sm mx-auto"
                        />
                    </div>
                    <div className="absolute top-0 right-0 md:right-24">
                        <img
                            src="https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                            alt="Spice"
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 md:left-24">
                        <img
                            src="https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                            alt="Ingredient"
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero