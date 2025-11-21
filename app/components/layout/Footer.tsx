import { Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-[#0d4621] text-[#ffffff90] pt-16 pb-8 px-6 md:px-12 border-t-4 border-[#FECC2A]">
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
                            <Link href="https://www.facebook.com/share/1ACDDXZLSY/?mibextid=wwXIfr" className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10] transition-colors">
                                <Facebook />
                            </Link>
                            {/* <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                <Twitter />
                            </Link> */}
                            <Link href="https://www.instagram.com/mofaifoods?igsh=MWt4YnI4bmh1YTIzYw==" className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10] transition-colors">
                                <Instagram />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">QUICK LINKS</h3>
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
                                <Link href="/#menu" className="hover:text-[#fecc2a] transition-colors">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-[#fecc2a] transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Blog
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/contact" className="hover:text-[#fecc2a] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">SHOP</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#signature-products" className="text-[#D32E12] transition-colors">
                                    Order Meals / Ingredients
                                </Link>
                            </li>
                            <li>
                                <Link href="/#meal" className="hover:text-[#fecc2a] transition-colors">
                                    Premium African spices & more
                                </Link>
                            </li>
                            <li>
                                <Link href="/#meal" className="hover:text-[#fecc2a] transition-colors">
                                    Premium African spices & more
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Spices
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link href="#" className="hover:text-[#fecc2a] transition-colors">
                                    Gift Cards
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">STAY CONNECTED</h3>
                        <p>Subscribe for exclusive recipes, offers, and African food stories.</p>
                        <form className='my-4 flex items-center gap-2'>
                            <input type="email" placeholder='Your email' className='bg-[#ffffff20] py-2 px-4 rounded-xl' />
                            <button className='bg-[#F8D210] h-10 w-10 flex justify-center items-center rounded-xl'><Send className='w-4 h-4 text-black' /></button>
                        </form>
                        <div className="space-y-3 text-sm mt-4 col-span-6">
                            <div className="flex gap-2 items-start">
                                <div className='h-10 w-10 justify-center items-center border rounded-xl flex bg-[]'>
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span>+234 815 209 3622 / +234 705 211 3552</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <div className='h-10 w-10 justify-center items-center border border-[#F8D210] rounded-xl flex bg-[#F8D21030]'>
                                    <Mail className="h-4 w-4 text-[#F8D210] font-bold" />
                                </div>
                                <span>mofaifoods@gmail.com</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <div className='h-10 w-10 min-w-10 justify-center items-center border rounded-xl flex border-[#D62828] bg-[#D6282830]'>
                                    <MapPin className="h-4 w-4 text-[#D62828]" />
                                </div>
                                <div className='space-y-2'>
                                    <p>Golden Ever Yard, Tawa Badiru Close, Off Jabita Street, Junction B/Stop, Langbasa-Ajah, Lagos</p>
                                    <p>The Yellow Canpoy, Wole Olateju Crescent, Lekki Lagos</p>
                                </div>
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