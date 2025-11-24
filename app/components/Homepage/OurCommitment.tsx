import { CheckCircle, Dot, MoveRight } from "lucide-react"
import Link from "next/link"

const OurCommitment = () => {
    const commitments = [
        "Premium Quality Ingredients",
        "Traditional & Specialty Fusion Recipes",
        "Hygienic Facilities & Utmost Cleanliness"
    ]
    return (
        <section className="bg-[#0d4621] py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto  gap-4 md:gap-8 flex flex-col md:flex-row items-center ">
                <div className="w-full md:w-1/2 mb-8 md:mb-0  flex justify-between items-center">
                    <div className="relative md:hidden ">
                        <img
                            src="/homepage/team-in-yellow.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto"
                        />
                        <div className="bg-[#fecc2a] shadow p-1 text-center w-fit rounded-lg! absolute -top-8 sm:top-0 -right-4 ">
                            <p className="font-bold text-sm">100% Quality</p>
                            <p className="text-sm">Guaranteed Excellence</p>
                        </div>
                        <div className="absolute -bottom-8 sm:bottom-4 left-0">
                            <img src="/homepage/team-member-in-green.png" className=" w-20 h-20 rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="relative hidden md:block ">
                        <img
                            src="/homepage/team.png"
                            className="w-full h-auto rounded-full max-w-md mx-auto"
                        />
                        <div className="bg-[#fecc2a] shadow text-sm p-2 text-center w-fit rounded-xl! absolute top-[50%] -right-26 ">
                            <h3 className="font-bold">100% Quality</h3>
                            <p>Guaranteed Excellence</p>
                        </div>
                        <div className="absolute -bottom-8 left-0">
                            <img src="/homepage/team-member-in-green.png" className=" w-32 h-32 rounded-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-4xl font-bold mb-6 text-white">
                        OUR COMMITMENT TO <br />
                        <span className="text-[#fecc2a]">AUTHENTICITY & EXCELLENCE</span>
                    </h2>
                    <p className="text-white mb-6">
                        Every dish tells a story, crafted with passion and commitment to quality. We source the finest ingredients to bring you an unforgettable culinary experience.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {commitments.map((commitment, index) => (
                            <li key={index} className="flex items-center">
                                <Dot className="h-2 w-2 bg-[#fecc2a] text-[#fecc2a] mr-2 mt-1 rounded-full " />
                                <span className="text-white">{commitment}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href="/about-us" className="btn-primary">
                        <span>Learn More</span>
                        <MoveRight className="inline-block ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurCommitment