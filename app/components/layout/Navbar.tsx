"use client"

import { MenuIcon, XIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathName = usePathname()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className="bg-background py-4  shadow-sm sticky top-0 z-50">
            <div className="w-[90vw]   max-w-7xl mx-auto flex justify-between gap-6 items-center">
                <Link href="/" className="flex items-center ">
                    <Image
                        src="/brand/owanbe-logo.png"
                        alt="Logo"
                        className="h-[50px] w-[119.85861206054688px] mr-2"
                        width={119.858612060546880}
                        height={50}
                    />
                    <div className="bg-[#FECC2A] w-[1.9px] h-10"></div>
                    <Image
                        src="/brand/mofai-logo.png"
                        alt="Logo"
                        className="h-[50] w-[50] mr-2"
                        width={50}
                        height={50}
                    />
                </Link>
                <nav className="hidden md:flex self-end md:self-center justify-end  space-x-12 flex-wrap items-center">
                    <Link
                        href="/"
                        className={`text-black font-normal text-[16px] ${pathName === "/" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                    >
                        Home
                    </Link>
                    <span
                        className={`text-black font-normal text-[16px]  hover:text-[#FCCB2B] transition-colors`}
                    >
                        Order/Shop
                    </span>
                    <Link
                        href="/about-us"
                        className={`text-black font-normal text-[16px] ${pathName === "/about-us" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/what-we-do"
                        className={`text-black md:hidden lg:block font-normal text-[16px] ${pathName === "/what-we-do" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                    >
                        What We Do
                    </Link>
                    <Link
                        href="/gallery"
                        className={`text-black md:hidden lg:block font-normal text-[16px] ${pathName === "/gallery" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/testimonials"
                        className={`text-black font-normal text-[16px] ${pathName === "/testimonials" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-black font-normal text-[16px] ${pathName === "/contact" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                    >
                        Contact
                    </Link>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none cursor-pointer">
                        {isMenuOpen ? (
                            <XIcon className="h-6 w-6 text-black" />
                        ) : (
                            <MenuIcon className="h-6 w-6 text-black" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-white rounded-md shadow-lg p-4">
                    <nav className="flex flex-col space-y-4">
                        <Link
                            onClick={toggleMenu}
                            href="/"
                            className={`text-black font-normal text-[16px] ${pathName === "/" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                        >
                            Home
                        </Link>
                        <span

                            className={`text-black font-normal text-[16px]  hover:text-[#FCCB2B] transition-colors`}
                        >
                            Order Now
                        </span>
                        <Link
                            onClick={toggleMenu}
                            href="/about-us"
                            className={`text-black font-normal text-[16px] ${pathName === "/about-us" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                        >
                            About Us
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            href="/what-we-do"
                            className={`text-black font-normal text-[16px] ${pathName === "/what-we-do" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                        >
                            What We Do
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            href="/gallery"
                            className={`text-black font-normal text-[16px] ${pathName === "/gallery" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                        >
                            Gallery
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            href="/testimonials"
                            className={`text-black font-normal text-[16px] ${pathName === "/testimonials" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                        >
                            Testimonials
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            href="/contact"
                            className={`text-black font-normal text-[16px] ${pathName === "/contact" && "active-link"} hover:text-[#FCCB2B] transition-colors`}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar