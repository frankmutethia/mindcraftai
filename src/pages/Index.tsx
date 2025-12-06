import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AIToolsSection from "@/components/AIToolsSection";
import AgeGroupTrainingSection from "@/components/AgeGroupTrainingSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseMeSection from "@/components/WhyChooseMeSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AIToolsSection />
      <AgeGroupTrainingSection />
      <PricingSection />
      <WhyChooseMeSection />
      <BookingSection />
      <Footer />
    </main>
  );
};

export default Index;
