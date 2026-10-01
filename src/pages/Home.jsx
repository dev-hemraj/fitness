import BlogSection from "../sections/BlogSection";
import CoachSection from "../sections/CoachSection";
import HeroSection from "../sections/HeroSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import PricingSection from "../sections/PricingSection";
import ServicesSection from "../sections/ServicesSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import VideoSection from "../sections/VideoSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CoachSection />
      <HowItWorksSection />
      <VideoSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default Home;
