import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface ProductCardProps {
    image: string
    title: string
    description: string
    actionText: string
    actionColor?: string
    customStyles?: string
    customContentStyles?: string
    customLinkStyle?: string
    customImageStyle?: string
}
function ProductCard({
    image,
    title,
    description,
    actionText,
    actionColor = '#d32e12',
    customStyles = '',
    customContentStyles = '',
    customLinkStyle = '',
    customImageStyle = '',
}: ProductCardProps) {
    return (
        <div className={"bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow" + customStyles}>
            <img src={image} alt={title} className={"w-full h-auto object-contain  " + customImageStyle} />
            <div className={"p-4" + customContentStyles}>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <a
                    href={process.env.NEXT_PUBLIC_OWANBE_URL as string}
                    className={`text-[${actionColor}] font-medium mt-4 rounded text-sm flex items-center hover:underline gap-2.5 transition-all ${customLinkStyle}`}
                >
                    <span>{actionText}</span>
                    <MoveRight />
                </a>
            </div>
        </div>
    )
}
export default ProductCard