import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#0d4621] text-white pt-16 pb-8 px-6 md:px-12 border-t-4 border-[#FECC2A]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    <div className='space-y-4'>
                        <div>
                            <Image
                                src="/brand/owanbe-logo.png"
                                alt="Logo"
                                className="h-[50px] w-[119.85861206054688px] mr-2"
                                width={119.858612060546880}
                                height={50}
                            />
                            <p>READY-TO-EAT MEALS</p>
                        </div>
                        <div>
                            <Image
                                src="/brand/mofai-logo.png"
                                alt="Logo"
                                className="h-[50] w-[50] mr-2"
                                width={50}
                                height={50}
                            />
                            <p>PREMIUM INGREDIENTS</p>
                        </div>
                        <div>
                            <p>Bringing authentic African flavors to your table through premium ingredients and professionally prepared meals.</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                <Facebook />
                            </Link>
                            <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                <Twitter />
                            </Link>
                            <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                <Instagram />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-[#fecc2a] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="hover:text-[#fecc2a] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">SHOP</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Meals
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Signature Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Traditional Items
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Spices
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Gift Cards
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">STAY CONNECTED</h3>
                        <div className="flex space-x-4 mb-6">
                            <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                <Facebook />
                            </Link>
                            <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                <Twitter />
                            </Link>
                            <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                <Instagram />
                            </Link>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                                <span>info@africanflavors.com</span>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                                <span>+1 (234) 567-8901</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                                <span>123 Flavor Street, Cuisine City</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; 2023 African Flavors. All Rights Reserved.</p>
                        <div className="mt-4 md:mt-0">
                            <Link
                                href="#"
                                className="mr-6 hover:text-[#fecc2a] transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer