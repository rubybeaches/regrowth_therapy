import Link from "next/link";
import { Button } from "@/components/ui/button";
import HowItWorks from "./howItWorks";

export interface LandingProps {
  title: string;
  description: string;
  whyTitle: string;
  whyDescription: string;
  benefits: string[];
  faqs: string[][];
}

export default function Landing({
  title,
  description,
  whyTitle,
  whyDescription,
  benefits,
  faqs,
}: LandingProps) {
  return (
    <main>
      {/* Landing Section */}
      <section className="bg-cream-50 text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-sage-700">
              {title}
            </h1>
            <p className="text-lg mb-10 font-serif text-sage-800">
              {description}
            </p>
            <h2 className="text-3xl font-serif mb-4 text-sage-700">
              {whyTitle}
            </h2>
            <p className="text-lg mb-10 font-serif text-sage-800">
              {whyDescription}
            </p>
            <p className="text-xl mb-2 font-bold font-serif text-sage-700">
              What You'll Gain:
            </p>
            <ul className="list-disc list-inside">
              {benefits.map((benefit, index) => (
                <li key={index} className="font-serif text-sage-800">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <section className="bg-cream-50 text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold font-serif mb-10 text-sage-700">
              Common Questions about {title}
            </h1>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl mb-2 font-bold text-sage-700">{faq[0]}</p>
                <p className="text-lg font-serif text-sage-800">{faq[1]}</p>
              </div>
            ))}
            <p className="font-serif text-sage-800">
              Have more questions?{" "}
              <Link href="/faq" className="underline">
                Visit the FAQ page
              </Link>{" "}
              or book a consultation and ask live for free.
            </p>
            <div className="text-center mt-10">
              <p className="text-3xl font-serif font-semibold text-center mb-6 text-sage-800">
                Ready to Reprogram Your Mind for Success?
              </p>
              <Button className="bg-sage-700 hover:bg-sage-800 rounded-full px-8 text-lg">
                Book a free discovery call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
