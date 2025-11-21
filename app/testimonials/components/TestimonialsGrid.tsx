
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sandra J.",
    location: "Lagos, Nigeria",
    quote:
      "Mofai Foods are what you get when you combine the authentic taste of grandma's kitchen with the convenience of modern-day life.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Tolu T.",
    location: "Lagos, Nigeria",
    quote:
      "Everything is just so good! The quality of ingredients and the taste are top-notch. I'm a loyal customer for life!",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Joel I.",
    location: "Accra, Ghana",
    quote:
      "I've been a loyal customer for years, and I'm always impressed with the consistency and quality of their meals.",
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Rachel D.",
    location: "Lagos, Nigeria",
    quote:
      "Owambe Mart is a God-send! Their food is always fresh, delicious, and reminds me of home. Highly recommend!",
    avatar: "/images/avatar-4.jpg",
  },
  {
    name: "Adekunle S.",
    location: "Abuja, Nigeria",
    quote:
      "The best of African cuisine delivered right to your doorstep. Their customer service is also excellent!",
    avatar: "/images/avatar-5.jpg",
  },
];

const TestimonialsGrid = () => {
  return (
    <section className="bg-[#F5F5F5] py-12 md:py-16 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    // className="w-full h-full object-cover"
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.style.display = "none";
                    // }}
                  />
                  <div className="w-full h-full  from-[#0C7A4B] to-[#DB4C4C] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#F2B22F] fill-[#F2B22F]"
                  />
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;

