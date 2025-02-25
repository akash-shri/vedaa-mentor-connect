import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { HandshakeIcon, Building2, Users2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partnership = () => {
  const benefits = [
    {
      icon: HandshakeIcon,
      title: "Direct Access to Talent",
      description:
        "Connect with pre-trained, placement-ready candidates for your organization",
    },
    {
      icon: Building2,
      title: "Customized Training",
      description:
        "We can tailor our program to meet your specific hiring requirements",
    },
    {
      icon: Users2,
      title: "Bulk Hiring Solutions",
      description: "Efficient processes for hiring multiple candidates at once",
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "All candidates are thoroughly trained and assessed",
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
                Partner with Vedaa Verse
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join us in building the future workforce. Connect with
                well-trained, placement-ready talent for your organization.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Become a Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Partnership Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We prepare students with the exact skills and knowledge needed in
                today's job market. Our training programs can be customized to meet
                your specific requirements, ensuring you get candidates who are
                ready to contribute from day one.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">
                    Pre-trained Talent
                  </h3>
                  <p className="text-gray-600">
                    Access to candidates with relevant skills and training
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
                  <p className="text-gray-600">
                    Reduce recruitment and training costs significantly
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Time Saving</h3>
                  <p className="text-gray-600">
                    Streamlined hiring process with pre-screened candidates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our network of partner companies and get access to our pool of
                talented candidates.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Partnership;
