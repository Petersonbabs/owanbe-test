'use client'
import { useRouter } from 'next/navigation'
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const JoinHappyCustomers = () => {
    const router = useRouter()
    const sectionRef = useScrollAnimation({ animation: "scale", duration: 1 });

    return (
        <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-[#D32E12] py-12 md:py-16 px-[5%]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-[2.5rem] font-bold text-white mb-4">
                JOIN OUR HAPPY CUSTOMERS
                </h2>
                <p className="text-white text-[0.9rem] md:text-[0.95rem] mb-8 max-w-2xl mx-auto">
                Experience the authentic flavors that thousands love
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-[#F55136] rounded-[24px] text-[0.85rem] md:text-[0.9rem] text-white font-bold py-3 px-5  transition-colors hover:bg-white hover:text-[#D32E12] w-full sm:w-auto">
                        START SHOPPING
                    </button>
                    <button onClick={() => router.push('/contact')} className="bg-[#0D4621] rounded-[24px] text-[0.85rem] md:text-[0.9rem] cursor-pointer text-white font-bold py-3 px-5  transition-colors hover:bg-white hover:text-[#F55136] w-full sm:w-auto">
                        CONTACT US
                    </button>
                </div>
            </div>
        </section>
    )
}

export default JoinHappyCustomers

