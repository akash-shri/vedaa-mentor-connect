
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality placement preparation at an accessible price point
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary p-6 text-center">
            <h3 className="text-2xl font-bold text-white">Complete Program</h3>
            <div className="mt-4">
              <span className="text-5xl font-bold text-white">₹2,000</span>
              <span className="text-white opacity-75">/student</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[
                "10-12 Live Sessions",
                "3 Mock Interviews",
                "Resume Building",
                "LinkedIn Profile Optimization",
                "Interview Preparation",
                "Placement Support",
                "Access to Recorded Content",
                "Certificate of Completion",
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-8 bg-primary hover:bg-primary/90">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
