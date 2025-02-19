
import { GraduationCap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-primary-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Your Path to Placement Success Starts Here
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fadeIn">
            Join India's most comprehensive placement preparation program. Transform
            your career prospects with expert mentorship and real interview
            experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fadeIn">
            <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary-light text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "Expert Mentorship",
                description: "Learn from industry professionals",
              },
              {
                icon: Users,
                title: "Mock Interviews",
                description: "Practice with real HR professionals",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "High placement success rate",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn"
              >
                <feature.icon
                  className="w-12 h-12 text-primary mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
