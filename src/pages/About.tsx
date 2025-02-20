
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users2, Target, BarChart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "10M+", label: "Students in Target Market" },
    { number: "80%", label: "Placement Success Rate" },
    { number: "100+", label: "Industry Experts" },
    { number: "1000+", label: "Students Mentored" },
  ];

  const values = [
    {
      icon: Users2,
      title: "Student-Centric",
      description: "Focused on delivering the best learning experience",
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Committed to achieving placement success",
    },
    {
      icon: BarChart,
      title: "Data-Driven",
      description: "Using analytics to improve student outcomes",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining high standards in education",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6">
                  We're on a mission to transform{" "}
                  <span className="text-primary">Education</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  At Vedaa Verse, we believe in transforming education through 
                  innovative learning approaches. Our goal is to bridge the gap 
                  between academic knowledge and industry requirements, ensuring 
                  every student is prepared for real-world success.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                  Learn More
                </Button>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <p className="text-gray-600">
                    We focus on practical learning, industry insights, and 
                    personalized mentoring to ensure every student reaches their 
                    full potential.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-primary mt-1" />
                      <span>Industry-aligned curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users2 className="w-6 h-6 text-primary mt-1" />
                      <span>Expert mentorship program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-primary mt-1" />
                      <span>Proven success track record</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-50 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We began with a simple observation: despite quality technical education,
                  many students struggle to land their dream jobs. The missing piece?
                  The practical skills and confidence needed to succeed in interviews
                  and workplace situations.
                </p>
                <div className="grid gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-4">Mission</h3>
                    <p className="text-gray-600">
                      To empower students with the skills, confidence, and 
                      opportunities they need to succeed in their careers through 
                      innovative education and mentorship.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-4">Vision</h3>
                    <p className="text-gray-600">
                      To create an educational ecosystem where every student has 
                      the tools and support they need to achieve their career goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Users2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Student Success</h4>
                        <p className="text-gray-600">80% placement rate</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Industry Network</h4>
                        <p className="text-gray-600">100+ partner companies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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

export default About;
