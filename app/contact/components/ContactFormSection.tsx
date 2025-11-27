"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const ContactFormSection = () => {
  const imageRef = useScrollAnimation({ animation: "slideLeft", duration: 1 });
  const contentRef = useScrollAnimation({
    animation: "slideRight",
    duration: 1,
    delay: 0.2,
  });

  return (
    <section className="bg-white py-12 md:py-16 px-[5%]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="bg-white w-full h-full flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/send.png"
                alt="Send Message"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className="space-y-6"
          >
            <div>
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold uppercase mb-2">
                <span className="text-black">SEND US A </span>
                <span className="text-[#F2B22F]">MESSAGE</span>
              </h2>
              <p className="text-black text-[0.9rem] md:text-[0.95rem]">
                Reach out to us via WhatsApp and we&apos;ll get back to you
                promptly
              </p>
            </div>

            <div className="space-y-6">
              {/* <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[0.9rem] md:text-[1rem] font-semibold text-gray-600 uppercase">
                      WhatsApp
                    </h3>
                    <p className="text-[1.1rem] md:text-[1.3rem] font-bold text-black">
                      {displayPhone}
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="space-y-4">
                <p className="text-black text-[0.85rem] md:text-[0.9rem]">
                  Have a question, inquiry, or feedback? Send us a message on
                  WhatsApp and our team will respond promptly.
                </p>

                <a
                  href={`https://wa.me/message/GO344FTE6HHVK1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] mt-5 hover:bg-[#20BA5A] text-white font-bold py-4 px-6 rounded-[24px] transition-colors flex items-center justify-center gap-2 uppercase text-[0.8rem] md:text-[0.9rem] shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  CHAT WITH US ON WHATSAPP
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-gray-600 text-[0.75rem] md:text-[0.8rem] text-center">
                  Click the button above to open WhatsApp and start a
                  conversation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
