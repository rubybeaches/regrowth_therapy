import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      <section className="py-16 bg-sage-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12 text-white">
            How it Works
          </h2>
          <div className="grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-cream-50 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-sage-700">
                Step 1: Book a Free Consultation
              </h3>
              <p className="text-sage-700 mb-4 text-lg">
                Not sure if hypnotherapy is right for you? Schedule a free
                15-minute call to discuss your goals.
              </p>
              <Button
                className={`bg-rose-600 hover:bg-rose-700 text-white text-base rounded-full mt-auto ml-auto`}
              >
                Book Now
              </Button>
            </Card>
            <Card className="p-6 bg-cream-100">
              <h3 className="text-2xl font-semibold mb-4 text-sage-700">
                Step 2: Get Personalized Virtual Sessions
              </h3>
              <p className="text-sage-800 mb-2 text-lg">
                During our live video session, I will guide you into a deep
                state of relaxation, helping you reframe your thoughts and
                unlock transformations.
              </p>
            </Card>
            <Card className="p-6 bg-cream-100">
              <h3 className="text-2xl font-semibold mb-4 text-sage-700">
                Step 3: Access Your Session Library
              </h3>
              <p className="text-sage-800 mb-2 text-lg">
                Each session is recorded and available in your private client
                library, so you can revisit key insights and reinforce positive
                changes.
              </p>
            </Card>
            <Card className="p-6 bg-cream-100">
              <h3 className="text-2xl font-semibold mb-4 text-sage-700">
                Step 4: Free Hypnosis Recordings
              </h3>
              <p className="text-sage-800 mb-2 text-lg">
                Sign up today and receive access to a selection of free guided
                hypnosis recordings to support your journey.
              </p>
            </Card>
          </div>
        </div>
      </section>

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
