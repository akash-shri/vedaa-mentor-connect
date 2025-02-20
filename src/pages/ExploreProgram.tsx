import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, User, MessageSquare, CheckCircle, Clock, BookOpen, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExploreProgram = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <img
                  src="/lovable-uploads/2f092a56-3e5a-4cc7-af00-96252012fd65.png"
                  alt="Professional Ready"
                  className="w-full max-w-md mx-auto"
                />
              </div>

              {/* Right Column */}
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Join Our PRP
                  <br />
                  <span className="text-primary">Placement Ready Program</span>
                </h1>

                {/* Search Bar */}
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search All Classes"
                    className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-2"
                  />
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-white shadow-md hover:shadow-lg border-2 border-primary"
                  >
                    <User className="w-5 h-5" />
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-white shadow-md hover:shadow-lg border-2 border-[#FF4D8D]"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Testimonials
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-50 rounded-full translate-x-1/2 translate-y-1/2" />
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
