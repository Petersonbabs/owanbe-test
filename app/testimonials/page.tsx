
import HeroSection from "./components/HeroSection";
import StatisticsBar from "./components/StatisticsBar";
import MainTestimonialSection from "./components/MainTestimonialSection";
import TestimonialsGrid from "./components/TestimonialsGrid";

export default function page() {
  return (
    <div>
      <HeroSection />
      <StatisticsBar />
      <MainTestimonialSection />
      <TestimonialsGrid />
    </div>
  );
}
