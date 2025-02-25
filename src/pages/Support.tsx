import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { MessageSquare, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Contact Us",
      description: "Get in touch with our support team",
      link: "/contact",
      buttonText: "Reach Out",
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Find answers to common questions",
      link: "/faq",
      buttonText: "View FAQs",
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
                How Can We Help?
              </h1>
              <p className="text-xl text-gray-600">
                We're here to support you on your journey to success
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <option.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4">{option.title}</h2>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white"
                    asChild
                  >
                    <Link to={option.link}>{option.buttonText}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our support team is available during business hours to assist you
              </p>
              <div className="flex items-center justify-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold">+91 (123) 456-7890</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Support;
