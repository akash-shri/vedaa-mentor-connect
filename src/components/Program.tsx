
import { Users2, GraduationCap, UserCheck, Award } from "lucide-react";

const Program = () => {
  const stats = [
    {
      icon: GraduationCap,
      number: "60K+ Students",
      description: "Grow yourself with our online courses.",
      iconBg: "bg-[#FF4D8D]",
    },
    {
      icon: Users2,
      number: "120+ Mentors",
      description: "Development of our language courses",
      iconBg: "bg-[#FF4D8D]",
    },
    {
      icon: UserCheck,
      number: "Top Instructor",
      description: "Best teachers for excellent tutoring.",
      iconBg: "bg-primary",
    },
    {
      icon: Award,
      number: "65 Partners",
      description: "Achieve with our online certificates.",
      iconBg: "bg-primary",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg uppercase tracking-wider mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Fit Yourself</span> in Every Corner of the World
            <span className="relative">
              <span className="absolute bottom-0 right-0 w-32 h-2 bg-yellow-400 -rotate-3"></span>
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Center Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/lovable-uploads/12ed00b3-03c9-4d2b-a9ef-1204170161e6.png"
              alt="Professional"
              className="w-full max-w-md"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/4 right-0 w-48 h-48 bg-pink-50 rounded-full translate-x-1/4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
