import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";

const ContactFormSection = () => {
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
                Fill out the form and we&apos;ll get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[0.8rem] md:text-[0.85rem] font-semibold text-black mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[0.8rem] md:text-[0.85rem]  focus:outline-none focus:ring-2 focus:ring-[#F2B22F] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.8rem] md:text-[0.85rem] font-semibold text-black mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[0.8rem] md:text-[0.85rem]  focus:outline-none focus:ring-2 focus:ring-[#F2B22F] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                      className="block text-[0.8rem] md:text-[0.85rem] font-semibold text-black mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+234 XXXX XXXX XXXX"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[0.8rem] md:text-[0.85rem]  focus:outline-none focus:ring-2 focus:ring-[#F2B22F] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[0.8rem] md:text-[0.85rem] font-semibold text-black mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[0.8rem] md:text-[0.85rem]  focus:outline-none focus:ring-2 focus:ring-[#F2B22F] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[0.8rem] md:text-[0.85rem] font-semibold text-black mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Tell us more..."
                  required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[0.8rem] md:text-[0.85rem] h-[100px] focus:outline-none focus:ring-2 focus:ring-[#F2B22F] focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F2B22F] text-[0.8rem] md:text-[0.8rem] hover:bg-[#E19F22] text-black font-bold py-4 px-6 rounded-[24px] transition-colors flex items-center justify-center gap-2 uppercase"
              >
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

