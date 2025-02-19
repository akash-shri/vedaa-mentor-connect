
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExploreProgram = () => {
  const curriculum = [
    {
      week: "Week 1-2",
      title: "Foundation & Resume Building",
      topics: [
        "Understanding job market trends",
        "Resume optimization workshop",
        "LinkedIn profile building",
        "Personal branding",
      ],
    },
    {
      week: "Week 3-4",
      title: "Interview Preparation",
      topics: [
        "Common interview questions",
        "Industry-specific preparation",
        "Mock interviews with feedback",
        "Body language and communication",
      ],
    },
    {
      week: "Week 5-6",
      title: "Technical Skills",
      topics: [
        "Technical interview preparation",
        "Problem-solving techniques",
        "Coding practice sessions",
        "Project presentation skills",
      ],
    },
    {
      week: "Week 7-8",
      title: "Career Development",
      topics: [
        "Job search strategies",
        "Salary negotiation",
        "Workplace ethics",
        "Career progression planning",
      ],
    },
  ];

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
      icon: Users,
      title: "Interactive Learning",
      description: "Engage in group discussions and peer learning activities",
    },
    {
      icon: CheckCircle,
      title: "Practical Approach",
      description: "Real-world scenarios and hands-on practice sessions",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary-light py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Path to Success Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A comprehensive 8-week program designed to transform you into a
                placement-ready professional
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Enroll Now
              </Button>
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className="py-16">
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
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Program Curriculum
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {curriculum.map((module, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-primary font-semibold mb-2">
                    {module.week}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2" />
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExploreProgram;
