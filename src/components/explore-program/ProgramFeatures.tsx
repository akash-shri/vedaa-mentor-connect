
import { BookOpen, Clock, UserCheck, Briefcase } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Sessions",
    description: "Learn from industry professionals with proven track records",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Balance your studies with our adaptable program timeline",
  },
  {
    icon: UserCheck,
    title: "Interactive Learning",
    description: "Engage in group discussions and peer learning activities",
  },
  {
    icon: Briefcase,
    title: "Practical Approach",
    description: "Real-world scenarios and hands-on practice sessions",
  },
];

export const ProgramFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Program Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
