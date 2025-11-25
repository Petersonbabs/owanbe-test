import React from 'react'
import { MapPin, ChefHat, Clock, Heart, Badge, Award, Users2 } from 'lucide-react'
export function Values() {
    const reasons = [
        {
            icon: <Award className="h-8 w-8 text-balck" />,
            title: 'Authenticy',
            description: 'True to our roots, every ingredient and recipe honors African tradition.',
        },
        {
            icon: <Heart className="h-8 w-8 text-balck" />,
            title: 'Quality',
            description: 'Premium ingredients sourced with care, prepared to perfection.',
        },
        {
            icon: <Users2 className="h-8 w-8 text-balck" />,
            title: 'Community',
            description: 'Building connections through food, celebrating culture together.',
        }
    ]
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        OUR <span className="text-[#fecc2a]">CORE VALUES</span>
                    </h2>
                    <p className="text-gray-600 text-sm">
                        The principles that guide everything we do
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-full bg-[#fecc2a] flex items-center justify-center">
                                    {reason.icon}
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                            <p className="text-gray-600 text-sm">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
