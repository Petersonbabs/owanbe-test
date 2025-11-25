import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0d4621] text-[#ffffff90] pt-16 pb-8 px-6 md:px-12 border-t-4 border-[#FECC2A]">
      <div className="max-w-7xl mx-auto">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex gap-6 flex-wrap justify-between items-center">
              <div >
                <Image
                  src="/brand/owanbe-white-logo.png"
                  alt="Logo"
                  width={100}
                  height={50}
                  className="w-[100px] h-[50px] object-contain"
                />
                <p className="text-sm">READY-TO-EAT MEALS</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Link
                    href="https://www.facebook.com/share/15WgS6Ezrrk/?mibextid=wwXIfr"
                    className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10]"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/owanbemart/?hl=en"
                    className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10]"
                  >
                    <Instagram />
                  </Link>
                </div>
              </div>

              <div>
                <div className=" w-fit h-fit mb-2 rounded-full bg-[#012610] flex items-center justify-center">
                  <Image
                    src="/brand/mofai-footer-logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <p className="text-sm">PREMIUM INGREDIENTS</p>
                <div className="mt-2 flex items-center space-x-4">
                  <Link
                    href="https://www.facebook.com/share/1ACDDXZLSY/?mibextid=wwXIfr"
                    className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10]"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mofaifoods?igsh=MWt4YnI4bmh1YTIzYw=="
                    className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10]"
                  >
                    <Instagram />
                  </Link>
                </div>
              </div>
            </div>

            <p>
              Bringing authentic African flavors to your table through premium
              ingredients and professionally prepared meals.
            </p>

            {/* SOCIAL ICONS */}
            <div className="hidden items-center space-x-4">
              <Link
                href="https://www.facebook.com/share/1ACDDXZLSY/?mibextid=wwXIfr"
                className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10]"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/mofaifoods?igsh=MWt4YnI4bmh1YTIzYw=="
                className="hover:text-[#fecc2a] border p-2 rounded-full bg-[#ffffff10]"
              >
                <Instagram />
              </Link>
            </div>
          </div>

          {/* LINKS SECTION */}
          <div className="space-y-10 md:ml-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[#fecc2a]">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-[#fecc2a]">About Us</Link></li>
                <li><Link href="/#menu" className="hover:text-[#fecc2a]">Menu</Link></li>
                <li><Link href="/gallery" className="hover:text-[#fecc2a]">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-[#fecc2a]">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">SHOP</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#signature-products"
                    className=""
                  >
                    Order Meals / Ingredients
                  </Link>
                </li>
                <li>
                  <Link href="/#menu" className="hover:text-[#fecc2a]">
                    Ready-to-eat Nigerian dishes
                  </Link>
                </li>
                <li>
                  <Link href="/#menu" className="hover:text-[#fecc2a]">
                    Premium African spices & more
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CONNECT SECTION */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">STAY CONNECTED</h3>
            <p>Subscribe for exclusive recipes, offers, and African food stories.</p>

            {/* FORM */}
            <form className="my-4 flex  items-center gap-3 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#ffffff20] py-2 px-4 rounded-xl flex-1"
              />
              <button className="bg-[#F8D210] h-10 w-10 flex justify-center items-center rounded-xl">
                <Send className="w-4 h-4 text-black" />
              </button>
            </form>

            {/* CONTACT INFO */}
            <div className="space-y-4 text-sm mt-20">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 flex items-center justify-center border rounded-xl">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+234 815 209 3622  / +234 705 211 3552</span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 flex items-center justify-center border border-[#F8D210] bg-[#F8D21030] rounded-xl">
                  <Mail className="h-4 w-4 text-[#F8D210]" />
                </div>
                <span>mofaifoods@gmail.com</span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 flex items-center justify-center border border-[#D62828] bg-[#D6282830] rounded-xl">
                  <MapPin className="h-4 w-4 text-[#D62828]" />
                </div>
                <div className="space-y-2">
                  <p>Golden Ever Yard, Tawa Badiru Close, Langbasa-Ajah, Lagos</p>
                  <p>The Yellow Canopy, Wole Olateju Crescent, Lekki Lagos</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-start">&copy; 2025 Owanbe Mart & MOFAI Foods. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#fecc2a]">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#fecc2a]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
