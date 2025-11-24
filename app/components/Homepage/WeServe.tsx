import React from 'react'
import ProductCard from '../ui/ProductCard'
import Link from 'next/link'

const WeServe = () => {
    const meals = [
        {
            image:
                '/homepage/meal/meal-1.png',
            title: 'Amala Yam Flour',
            description: 'Smooth swallow served with delicious soup',
            actionText: 'ORDER MEAL',
        },
        {
            image:
                '/homepage/meal/meal-2.png',
            title: 'Ewa Agoyin (Mashed Beans)',
            description: 'Soft beans in spicy rich pepper sauce',
            actionText: 'ORDER MEAL',
        },
        {
            image:
                '/homepage/meal/meal-3.png',
            title: 'Premium Jollof Rice',
            description: 'Classic West African one-pot rice dish',
            actionText: 'ORDER MEAL',
        },
        {
            image:
                '/homepage/meal/meal-4.png',
            title: 'Moi Moi (Bean Pudding)',
            description: 'Steamed bean pudding with rich flavors',
            actionText: 'ORDER MEAL',
        },
        {
            image:
                '/homepage/meal/meal-5.png',
            title: 'Efo Riro (Spinach Stew)',
            description: 'Rich spinach stew with assorted meat',
            actionText: 'ORDER MEAL',
        },
        {
            image:
                '/homepage/meal/meal-6.png',
            title: 'Grilled Fish',
            description: 'Perfectly seasoned fresh fish',
            actionText: 'ORDER MEAL',
        },
        {
            image:
                '/homepage/meal/meal-7.png',
            title: 'Puff Puff',
            description: 'Sweet, flufft deep-fried dough balls',
            actionText: 'ORDER MEAL',
        },
        {
            image:
                '/homepage/meal/meal-8.png',
            title: 'Zobo Drink',
            description: 'Refreshing hibiscus tea with natural spices',
            actionText: 'ORDER MEAL',
        },
    ]
    return (
        <section className="bg-white py-16 px-6 md:px-12" id='menu'>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl justify-center items-center gap-4 flex font-bold mb-4">
                        <img src="/brand/owanbe-logo.png" className='w-24' /> - <p>WE <span className="text-[#fecc2a]">SERVE</span></p>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Authentic Jollof Rice, Delicious Fried Rice, Pepper Soup, Suya, Grilled Fish and More
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                    {meals.map((meal, index) => (
                        <ProductCard
                            key={index}
                            image={meal.image}
                            title={meal.title}
                            description={meal.description}
                            actionText={meal.actionText}
                        />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href={process.env.NEXT_PUBLIC_OWANBE_URL as string} className="bg-transparent border border-black text-black px-3 md:py-3 py-2 text-sm md:px-8 rounded-full transition-colors">
                        <span>VIEW FULL MENU</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WeServe