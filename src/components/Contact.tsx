
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 (123) 456-7890",
      link: "tel:+911234567890",
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@vedaaverse.com",
      link: "mailto:contact@vedaaverse.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Bihar, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you start your journey towards
            placement success
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.details}</p>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
