
import HeroSection from "./components/HeroSection";
import StatisticsBar from "./components/StatisticsBar";
import MainTestimonialSection from "./components/MainTestimonialSection";
import TestimonialsGrid from "./components/TestimonialsGrid";
import JoinHappyCustomers from "./components/JoinHappyCustomers";

export default function page() {
  return (
    <div>
      <HeroSection />
      <StatisticsBar />
      <MainTestimonialSection />
      <TestimonialsGrid />
      <JoinHappyCustomers />
    </div>
  );
}
