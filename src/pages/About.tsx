
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users2, Target, Trophy, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Users2,
      title: "Student-Centric",
      description: "We put our students first in everything we do, ensuring personalized attention and growth.",
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Our programs are designed to deliver measurable outcomes and real-world success.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for excellence in our teaching methods and student achievements.",
    },
    {
      icon: Book,
      title: "Continuous Learning",
      description: "We embrace innovation and stay updated with industry demands.",
    },
  ];

  const stats = [
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "10k+", label: "Success Stories" },
    { number: "4.8/5", label: "Student Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-primary-light py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Empowering Careers Through Expert Guidance
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  At Vedaa Verse, we're dedicated to transforming aspirations into
                  achievements. Our comprehensive placement preparation program
                  equips students with the skills and confidence needed to excel in
                  their careers.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Join Our Program
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/9456e6e1-64e1-4f27-b218-6d0ace0921cb.png"
                  alt="About Vedaa Verse"
                  className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-pink-50 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do at Vedaa Verse
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To empower students with the knowledge, skills, and confidence
                needed to achieve their career goals. We believe in creating an
                ecosystem where talent meets opportunity, and dreams transform into
                reality.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
