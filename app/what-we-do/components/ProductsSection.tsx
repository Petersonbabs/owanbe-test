"use client";

import Image from "next/image";
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import { useRouter } from 'next/navigation';
const ProductsSection = () => {
  const contentRef = useScrollAnimation({ animation: "slideRight", duration: 1 });
  const imageRef = useScrollAnimation({ animation: "slideLeft", duration: 1, delay: 0.2 });

  const router = useRouter();
  return (
    <section className="bg-[#0D4621] py-8 md:py-12 px-[5%] relative overflow-hidden">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef as React.RefObject<HTMLDivElement>} className="text-white space-y-6 z-10">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/mofia.svg"
                alt="Corn Sticks"
                width={105}
                height={105}
              />
            </div>

            <p className="text-[0.9rem] md:text-[1rem] leading-relaxed max-w-lg">
              Authentic African ingredients and spices sourced directly from
              trusted suppliers. Create your own traditional dishes with
              premium, authentic products.
            </p>

            <ul className="space-y-4 max-w-lg">
              <li className="flex items-start gap-3">
                <div>
                  <Image
                    src="/images/pre.svg"
                    alt="Truck"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">
                  Premium quality ingredients
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div>
                  <Image
                    src="/images/pre.svg"
                    alt="Truck"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">
                  100% authentic African products
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div>
                  <Image
                    src="/images/pre.svg"
                    alt="Truck"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">
                  Carefully sourced and packaged
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div>
                  <Image
                    src="/images/pre.svg"
                    alt="Truck"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-[0.9rem] md:text-[1rem]">
                  Create traditional dishes at home
                </span>
              </li>
            </ul>

            <button onClick={() => router.push('https://owanbemart.africa.restaurant/')}  className="border-white border rounded-3xl hover:bg-[#FF7F00] text-[0.9rem] md:text-[0.9rem] text-white font-bold py-3 px-6  transition-colors mt-6">
              ORDER NOW
            </button>
          </div>

          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="relative w-full h-full min-h-[400px] flex items-center justify-center">
            <Image
              src="/images/corn-sticks.png"
              className="w-full h-auto object-contain"
              alt="Bottom Section"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
