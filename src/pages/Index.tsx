
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Program />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
