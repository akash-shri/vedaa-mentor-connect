import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, BookOpen, Users, Send } from "lucide-react";
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
        <section className="relative overflow-hidden bg-white pt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center pt-12 pb-20">
              {/* Left Column */}
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Your One-Stop
                  <br />
                  Solution for
                  <br />
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
                <div className="relative max-w-md">
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

              {/* Right Column - Phone Image */}
              <div className="relative">
                <img
                  src="/lovable-uploads/2f927024-e982-432f-aee1-5cbccbd7e85a.png"
                  alt="Vedaa Verse App Interface"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full translate-x-1/2 translate-y-1/2" />
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
