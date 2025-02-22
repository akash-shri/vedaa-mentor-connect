
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="w-full">
          <div className="mb-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your One-Stop <br />
              Solution for <br />
              <span className="text-primary">Placement Preparation</span>
            </h1>
            <p className="text-xl mb-8">Explore the Ease of Placement</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-[#FF4D8D] hover:bg-[#FF4D8D]/90 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-2">
                Advisors
              </Button>
            </div>
            
            <div className="relative max-w-2xl">
              <Input 
                type="text" 
                placeholder="Enter your details" 
                className="w-full pl-6 pr-16 py-6 text-lg rounded-full border-2"
              />
              <Button 
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-3 bg-primary hover:bg-primary/90"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
