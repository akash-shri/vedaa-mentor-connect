
import { Search, Users, ChartBar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Successful Students",
  },
  {
    icon: ChartBar,
    number: "95%",
    label: "Success Rate",
  },
  {
    icon: Award,
    number: "50+",
    label: "Industry Partners",
  },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Professional Ready Program
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-[#FF4D8D] text-transparent bg-clip-text">
            Placement Ready Program
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Accelerate your career with our comprehensive placement preparation program
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.number}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for courses, workshops, and more..."
              className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-2 focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="px-8 py-6 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2 border-[#FF4D8D] text-[#FF4D8D] hover:bg-[#FF4D8D]/10"
            >
              View Testimonials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
