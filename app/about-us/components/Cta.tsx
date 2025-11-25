import React from 'react'

const Cta = () => {
    return (
        <section className="bg-[#d32e12] text-white text-center py-12 px-6 md:px-12" id="newsletter">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="mb-6 md:mb-0 md:mr-8 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            READY TO EXPERIENCE <br />
                            AUTHENTIC FLAVORS?
                        </h2>
                        <p>Join thousands enjoying our premium meals and ingredients</p>
                        <a href={process.env.NEXT_PUBLIC_OWANBE_URL} className="bg-white! btn-primary text-black">START SHOPPING</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta