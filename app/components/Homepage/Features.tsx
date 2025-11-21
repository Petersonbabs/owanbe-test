
import { Utensils, Leaf, Book, Award } from 'lucide-react'
import Image from 'next/image'

const Features = () => {
    const features = [
        {
            image: <Utensils className="h-8 w-8 text-white" />,
            title: 'AUTHENTIC FLAVORS',
            description: 'An original experience. Our chef cultivates an emotional connection with each meal.',
        },
        {
            image: <Leaf className="h-8 w-8 text-white" />,
            title: 'FRESH & DELICIOUS',
            description: 'Serving fresh, delicious and classic food.',
        },
        {
            image: <Book className="h-8 w-8 text-white" />,
            title: 'TRADITIONAL RECIPES',
            description: 'Great cooking is about being present and respecting ingredients.',
        },
        {
            image: <Award className="h-8 w-8 text-white" />,
            title: 'CULTURAL EXCELLENCE',
            description: 'Each dish a journey through authentic African cuisine.',
        },
    ]
    return (
        <section className="bg-[#d32e12] py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex space-y-4 flex-col items-center text-center">
                            <div className="mb-4 rounded-full">
                                <Image src={`/homepage/feature-${index + 1}.png`} alt={feature.title} width={150} height={150} />
                            </div>
                            <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                            <p className="text-white text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features