
const Newsletter = () => {
    return (
        <section className="bg-[#d32e12] py-12 px-6 md:px-12" id="newsletter">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            NEWS LETTER
                        </h2>
                        <p className="text-white opacity-90">
                            Subscribe to get latest updates and offers
                        </p>
                    </div>
                    <form className="w-full md:w-auto flex flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 bg-[#ffffff50] py-3 rounded-md mb-3 sm:mb-0 sm:mr-2 w-full md:w-80 focus:outline-white"
                            aria-label="Email address"
                        />
                        <button
                            type="submit"
                            className="bg-white  text-[#d32e12] font-bold px-6 py-3 rounded-md transition-colors"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter