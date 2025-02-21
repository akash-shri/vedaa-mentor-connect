
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, User, MessageSquare, CheckCircle, Clock, BookOpen, Users, Send, GraduationCap, Book, Target } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Content */}
            <div className="w-full">
              <div className="mb-6 max-w-2xl">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Professional Ready Program
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-[#FF4D8D] text-transparent bg-clip-text">
                  Placement Ready Program
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  Accelerate your career with our comprehensive placement preparation program
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative mb-8 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for courses, workshops, and more..."
                  className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-2 focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Graduates</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-[#FF4D8D]/10">
                    <Book className="w-6 h-6 text-[#FF4D8D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                  <p className="text-sm text-gray-600">Courses</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-green-100">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Button
                  className="flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white"
                >
                  <User className="w-5 h-5" />
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 py-6 text-lg rounded-xl border-2 border-[#FF4D8D] text-[#FF4D8D] hover:bg-[#FF4D8D]/10"
                >
                  <MessageSquare className="w-5 h-5" />
                  Testimonials
                </Button>
              </div>
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

