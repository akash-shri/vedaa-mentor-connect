
import { CheckCircle, Clock, Users, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Resume & LinkedIn Optimization",
      description:
        "Get your profile reviewed and optimized by industry professionals",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with recorded sessions",
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Personalized attention in small groups",
    },
    {
      icon: Trophy,
      title: "Placement Support",
      description: "Dedicated support until you land your dream job",
    },
  ];

  return (
    <section id="features" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Vedaa Verse
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have successfully transformed their
            careers through our program
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
