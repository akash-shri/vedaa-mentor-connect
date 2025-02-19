
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
                  We're on a mission to transform the{" "}
                  <span className="text-primary">Placement Preparation</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  We are on a mission to help students crack their HR interviews with
                  confidence. Our Placement Ready Program is designed to give you
                  the edge in campus placements, providing expert guidance, real-world
                  mock interviews, and in-depth HR question analysis.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                  REGISTER NOW
                </Button>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden border-[3px] border-pink-500">
                  <img
                    src="/lovable-uploads/f5b45dc0-41d3-44ac-a718-c18a86b03def.png"
                    alt="Placement Success"
                    className="w-full h-auto"
                  />
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

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To empower students from tier 3 & 4 cities with the skills,
                confidence, and opportunities they need to succeed in their careers.
                We believe in making quality placement preparation accessible and
                affordable for everyone.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
