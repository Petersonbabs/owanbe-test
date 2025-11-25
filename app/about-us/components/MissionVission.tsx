
import { Utensils, Leaf, Book, Award, Goal, Target, Heart } from 'lucide-react'
import Image from 'next/image'

const Features = () => {
    const features = [
        {
            image: <Target className="h-8 w-8 text-white" />,
            title: 'OUR MISSION',
            description: 'To make authentic African cuisine accessible worldwide through premium ingredients and expertly prepared meals that honor tradition.',
        },
        {
            image: <Heart className="h-8 w-8 text-white" />,
            title: 'OUR VISION',
            description: 'To become the leading provider of authentic African food products, celebrating our rich culinary heritage across the globe.',
        }
    ]
    return (
        <section className="bg-[#d32e12] py-14 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex space-y-4 flex-col items-center text-center">
                            <div className="mb-4 rounded-full h-24 w-24 bg-[#ffffff40] flex justify-center items-center">
                                {feature.image}
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