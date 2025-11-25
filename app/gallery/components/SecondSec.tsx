import { ChefHat, Briefcase, Users } from 'lucide-react'

export default function SecondSec() {
  return (
    <div className="bg-[#D32E12] py-16 px-[5%] relative z-10">
                <div className="mx-auto flex flex-col md:flex-row justify-center gap-4 md:gap-10">
                    <button className="bg-[#FFFFFF33]  text-white px-5 py-2.5 rounded-[24px] text-[0.85rem] md:text-[0.9rem] font-bold flex items-center justify-center gap-3 transition-colors">
                        <Users className="w-5 h-5" />
                        <span>Weddings & Parties</span>
                    </button>

                    <button className="bg-[#FFFFFF33]  text-white px-5 py-2.5 rounded-[24px] text-[0.85rem] md:text-[0.9rem] font-bold flex items-center justify-center gap-3 transition-colors">
                        <ChefHat className="w-5 h-5" />
                        <span>Catering Services</span>
                    </button>

                    <button className="bg-[#FFFFFF33]  text-white px-5 py-2.5 rounded-[24px] text-[0.85rem] md:text-[0.9rem] font-bold flex items-center justify-center gap-3 transition-colors">
                        <Briefcase className="w-5 h-5" />
                        <span>Corporate Events</span>
                    </button>
                </div>
            </div>
         
    )
}
