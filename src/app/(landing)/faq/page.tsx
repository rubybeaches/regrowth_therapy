import HowItWorks from "@/components/ui/howItWorks";
import type { Metadata } from "next";
import { HypnotherapyFAQ, EnergyHealingFAQ } from "@/lib/globals";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hypnotherapy Frequently Asked Questions | Virtual Hypnotherpay",
  description:
    "What is Hypnotherapy and why does it work? Create lasting changes to become the best version of your self, book your first session today!",
};

export default function Page() {
  return (
    <main>
      {/* FAQ Introduction */}
      <section className="bg-cream-50 text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-sage-700">
              Hypotherapy and Energy Healing
            </h1>
            <h2 className="text-3xl font-serif mb-4 text-sage-700">
              Frequently Asked Questions
            </h2>
            <p className="text-lg font-serif text-sage-800 mb-4">
              Hypnotherapy is an amazing tool and change agent for your mind and
              body. Often when learning about a new healing modality we are
              plagued with questions about how it works, why it works, and what
              the process is like. Let me alleviate those concerns here!
            </p>
            <p className="text-lg font-serif text-sage-800">
              Below is a list of common questions I have recieved and had myself
              when starting this journey. If you have a question that's not on
              the list, reach out for a free consultation and let's explore what
              options may be available for you!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 text-white relative">
        <div className="container mx-auto px-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bxIiy8Dbv2I?si=iDzzee-7872hz9sT"
            allowFullScreen
            className="rounded-lg mx-auto"
            title="Hypnotherapy Basics and Assumptions Video"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream-50 text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold font-serif mb-6 text-sage-700">
              Common Questions about Hypnotherapy
            </h1>
            {HypnotherapyFAQ.map((faq, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl mb-2 font-bold text-sage-700">{faq[0]}</p>
                <p className="text-lg font-serif text-sage-800">{faq[1]}</p>
              </div>
            ))}
            <HowItWorks />
            <h1 className="text-4xl font-semibold font-serif mt-10 mb-6 text-sage-700">
              Common Questions about Energy Healing
            </h1>
            {EnergyHealingFAQ.map((faq, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl mb-2 font-bold text-sage-700">{faq[0]}</p>
                <p className="text-lg font-serif text-sage-800">{faq[1]}</p>
              </div>
            ))}
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
