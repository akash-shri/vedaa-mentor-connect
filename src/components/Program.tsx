
import { BookOpen, Users2, Target, Laptop } from "lucide-react";

const Program = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Live Mentorship",
      description: "10-12 interactive sessions with industry experts per batch",
    },
    {
      icon: Users2,
      title: "Mock Interviews",
      description: "3 real HR interviews per student for hands-on practice",
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Personalized advice from recent industry professionals",
    },
    {
      icon: Laptop,
      title: "Hybrid Learning",
      description: "Combination of live sessions and recorded content",
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Comprehensive Program
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your career prospects with our structured placement
            preparation program designed for success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-primary-light rounded-lg hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
