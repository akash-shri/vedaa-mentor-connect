import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the duration of the program?",
      answer:
        "Our comprehensive program runs for 8 weeks, with 10-12 interactive sessions per batch. The program is designed to be flexible, allowing you to balance it with your other commitments.",
    },
    {
      question: "How much does the program cost?",
      answer:
        "The program is priced at ₹2,000 per student, making it highly accessible while delivering premium value through expert mentorship and practical training.",
    },
    {
      question: "Are the mock interviews conducted by real HR professionals?",
      answer:
        "Yes, all mock interviews are conducted by experienced HR professionals and industry experts to provide you with authentic interview experience and valuable feedback.",
    },
    {
      question: "Can I access the recorded sessions after the live classes?",
      answer:
        "Yes, all sessions are recorded and made available to enrolled students. You can review the content at your own pace and revisit important topics.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide comprehensive placement assistance including resume building, interview preparation, and connections with our partner companies.",
    },
    {
      question: "Is there a certificate upon completion?",
      answer:
        "Yes, students receive a certificate of completion after successfully finishing the program and mock interviews.",
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our program
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-gray-200"
                  >
                    <AccordionTrigger className="px-6 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Can't find the answer you're looking for? Please contact our
                friendly team.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default FAQ;
