import React from "react";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

const ContactFormSection = () => {
  const email = "mofaifoods@gmail.com";

  return (
    <section className="bg-white py-12 md:py-16 px-[5%]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative flex justify-center lg:justify-start">
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

          <div className="space-y-6">
            <div>
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold uppercase mb-2">
                <span className="text-black">SEND US A </span>
                <span className="text-[#F2B22F]">MESSAGE</span>
              </h2>
              <p className="text-black text-[0.9rem] md:text-[0.95rem]">
                Reach out to us via email and we&apos;ll get back to you within
                24 hours
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F2B22F] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-[0.9rem] md:text-[1rem] font-semibold text-gray-600 uppercase">
                      Our Email
                    </h3>
                    <p className="text-[1.1rem] md:text-[1.3rem] font-bold text-black">
                      {email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-black text-[0.85rem] md:text-[0.9rem]">
                  Have a question, inquiry, or feedback? Send us an email and
                  our team will respond promptly.
                </p>

                <a
                  href={`mailto:${email}?subject=Contact%20Inquiry`}
                  className="w-full bg-[#F2B22F] hover:bg-[#E19F22] text-black font-bold py-4 px-6 rounded-[24px] transition-colors flex items-center justify-center gap-2 uppercase text-[0.8rem] md:text-[0.9rem] shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  OPEN EMAIL CLIENT
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-gray-600 text-[0.75rem] md:text-[0.8rem] text-center">
                  Click the button above to open your default email client
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
