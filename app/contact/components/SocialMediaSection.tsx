
import { Facebook, Instagram } from "lucide-react";

const SocialMediaSection = () => {
  return (
    <section className="bg-white py-6 md:py-12 px-[5%]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold uppercase mb-3">
          FOLLOW US
        </h2>
        <p className="text-black text-[0.9rem] md:text-[0.95rem] mb-6">
          Stay connected on social media
        </p>

        <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
          <a
            href="https://www.facebook.com/share/1ACDDXZLSY/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-[#0C7A4B] rounded-full flex items-center justify-center hover:bg-[#0A6840] transition-colors shadow-lg"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 md:w-6 md:h-6 text-white" />
          </a>

          <a
            href="https://www.instagram.com/mofaifoods?igsh=MWt4YnI4bmh1YTIzYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-[#0C7A4B] rounded-full flex items-center justify-center hover:bg-[#0A6840] transition-colors shadow-lg"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 md:w-6 md:h-6 text-white" />
          </a>

          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 bg-[#0C7A4B] rounded-full flex items-center justify-center hover:bg-[#0A6840] transition-colors shadow-lg"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 md:w-6 md:h-6 text-white" />
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-[#0C7A4B] rounded-full flex items-center justify-center hover:bg-[#0A6840] transition-colors shadow-lg"
            aria-label="TikTok"
          >
            <Music className="w-6 h-6 md:w-6 md:h-6 text-white" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-[#0C7A4B] rounded-full flex items-center justify-center hover:bg-[#0A6840] transition-colors shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 md:w-6 md:h-6 text-white" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;

