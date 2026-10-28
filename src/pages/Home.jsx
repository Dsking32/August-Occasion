import Marquee from "../components/Marquee.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import OccasionsSection from "../components/OccasionsSection.jsx";
import SignatureDrinksSection from "../components/SignatureDrinksSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import FinalCTASection from "../components/FinalCTASection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <ExperienceSection />
      <ServicesSection />
      <OccasionsSection />
      <SignatureDrinksSection />
      <GallerySection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
