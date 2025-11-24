import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <section className="bg-[#D32E12] py-12 md:py-16 px-[5%]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-center md:text-[1.3rem] font-bold mb-4">Phone</h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem]">
              <div>+234 815 300 3822</div>
              <div>+234 706 211 5832</div>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">Email</h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem]">
              <div>info@mofaifoods.com</div>
              <div>mofaifoods@gmail.com</div>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">Address</h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              <div>
                Owambe Mall, The Millionaire&apos;s Plaza, KM 14, Lekki-Epe
                Expressway, Lekki, Lagos.
              </div>
              <div>
                HODMA Foods, Debbie Plaza, Badore Road, Ajah, Lekki, Lagos.
              </div>
              <div>
                29, Ladipo Street, Junction Bus Stop, Lagos-Abeokuta Exp, Lagos.
              </div>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">Hours</h3>
            <div className="text-center text-[0.9rem] md:text-[0.95rem]">Mon - Sun: 8am - 6pm</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
