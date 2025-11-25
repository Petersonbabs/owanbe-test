const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
      style={{ backgroundImage: `url('/images/gallery-hero.png')` }}
    >
      <div className="flex-1 flex flex-col justify-center items-center px-[5%] py-16 md:py-24 relative z-10">
        <div className="bg-[#FFFFFF33]  text-white px-5 py-2.5 rounded-3xl text-[0.85rem] md:text-[0.9rem] font-bold mb-8">
          EVENTS GALLERY
        </div>

        <div className="text-center mb-8">
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-white  leading-[130%] mb-4">
            🎉Celebrating 15 Years
            <br />
            <span className=" italic">of Flavor & Culture🎈</span>
          </h1>

          <p className="text-white text-[0.9rem] md:text-[0.95rem] lg:text-[0.95rem] px-[12%] leading-relaxed mt-6">
            A visual journey through our meals, moments, and memories, captured
            over 15 years of serving authentic Nigerian cuisines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
