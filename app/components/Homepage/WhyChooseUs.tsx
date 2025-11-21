import React from 'react'
import { MapPin, ChefHat, Clock, Heart } from 'lucide-react'
export function WhyChooseUs() {
  const reasons = [
    {
      icon: <MapPin className="h-8 w-8 text-[#d32e12]" />,
      title: 'Quality First',
      description: 'Premium ingredients, expertly prepared',
    },
    {
      icon: <ChefHat className="h-8 w-8 text-[#d32e12]" />,
      title: 'Expert Chefs',
      description: 'Traditional recipes, modern techniques',
    },
    {
      icon: <Clock className="h-8 w-8 text-[#d32e12]" />,
      title: 'Fast Service',
      description: 'Quick delivery, fresh every time',
    },
    {
      icon: <Heart className="h-8 w-8 text-[#d32e12]" />,
      title: 'Made with Love',
      description: 'Passion in every dish we create',
    },
  ]
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            WHY CHOOSE <span className="text-[#fecc2a]">US</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Excellence in every aspect of your dining experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-[#fde8e8] flex items-center justify-center">
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
