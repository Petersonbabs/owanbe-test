import { CheckCircle, Dot, MoveRight } from "lucide-react"
import Link from "next/link"

const Journey = () => {
    const commitments = [
        "Premium Quality Ingredients",
        "Traditional & Specialty Fusion Recipes",
        "Hygienic Facilities & Utmost Cleanliness"
    ]
    return (
        <section className="bg-[#0d4621] py-16 px-6 md:px-12" id="our-story">
            <div className="max-w-7xl mx-auto  gap-4 md:gap-8 flex flex-col md:flex-row items-center ">
                <div className="w-full md:w-1/2 mb-8 md:mb-0  flex justify-between items-center">
                    <div className="relative md:hidden ">
                        <img
                            src="/homepage/team-in-yellow.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto"
                        />

                        <div className="absolute -bottom-8 right-0">
                            <img src="/homepage/meal/meal-4.png" className=" w-32 h-32 rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="relative hidden md:block ">
                        <img
                            src="/homepage/team-in-yellow.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto"
                        />
                        <div className="absolute -bottom-8 right-0">
                            <img src="/homepage/meal/meal-4.png" className=" w-32 h-32 rounded-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-4xl font-bold mb-6 text-white">
                        A JOURNEY OF <br />
                        <span className="text-[#fecc2a]">FLAVOUR & HERITAGE</span>
                    </h2>
                    <p className="text-white mb-6">
                        What began as a small passion project has grown into a celebration of African culinary excellence. We source the finest ingredients and work with expert chefs to deliver authentic experiences.
                    </p>
                    <p className="text-white mb-6">
                        From traditional recipes passed down through generations to modern innovations that respect our roots, every product tells a story of culture, community, and pride.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Journey