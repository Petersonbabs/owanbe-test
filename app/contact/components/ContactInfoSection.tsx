import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <section className="">
      <div className="bg-[#D32E12] py-8 md:py-12 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-center md:text-[1.3rem] font-bold mb-4">
              Phone
            </h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem]">
              <a
                href="tel:+2348153003822"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                +234 815 209 3622
              </a>
              <a
                href="tel:+2347062115832"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                +234 705 211 3552
              </a>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">
              Email
            </h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem]">
              <a
                href="mailto:owanbemart@gmail.com"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                owanbemart@gmail.com
              </a>
              <a
                href="mailto:mofaifoods@gmail.com"
                className="block hover:text-[#F2B22F] transition-colors"
              >
                mofaifoods@gmail.com
              </a>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">
              Address
            </h3>
            <div className="space-y-2 text-center text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              <div>
                Owanbe Mart: The Yellow Canpoy, Wole Olateju Crescent, Lekki
                Lagos
              </div>
              <div>
                MOFAI Foods: Golden Ever Yard, Tawa Badiru Close, Off Jabita
                Street, Junction B/Stop, Langbasa-Ajah, Lagos
              </div>
            </div>
          </div>

          <div className="text-white text-center md:text-left">
            <div className="flex justify-center md:justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#DB4C4C]" />
              </div>
            </div>
            <h3 className="text-[1.2rem] text-white text-center md:text-[1.3rem] font-bold mb-4">
              Hours
            </h3>
            <div className="text-center text-[0.9rem] md:text-[0.95rem]">
              Mon - Sun: 8am - 6pm
            </div>
          </div>
        </div>

        
      </div>

      <div className="">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.57681832744!2d3.4549648731168294!3d6.448339524036101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f90f5a7f09%3A0x42ca9b1b5e653edb!2sWole%20Olateju%20Cres%2C%20Eti-Osa%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1764067890663!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>
    </section>
  );
};

export default ContactInfoSection;
