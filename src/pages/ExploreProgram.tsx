
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/explore-program/HeroSection";
import { ProgramFeatures } from "@/components/explore-program/ProgramFeatures";
import { MentorVideo } from "@/components/explore-program/MentorVideo";
import { PricingSection } from "@/components/explore-program/PricingSection";

const ExploreProgram = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <main>
        <HeroSection />
        <ProgramFeatures />
        <MentorVideo />
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExploreProgram;
