import React from "react";
import HeroSection from "./components/HeroSection";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";
import SocialMediaSection from "./components/SocialMediaSection";
import LocationBanner from "./components/LocationBanner";

const ContactUsPage = () => {
  return (
    <div>
      <HeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <SocialMediaSection />
      <LocationBanner />
    </div>
  );
};

export default ContactUsPage;
