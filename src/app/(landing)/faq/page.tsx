import HowItWorks from "@/components/ui/howItWorks";
import type { Metadata } from "next";
import { FAQ } from "@/lib/globals";

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
              Frequently Asked Questions about Hypotherapy and Energy Healing
            </h1>
            <p className="text-lg font-serif text-sage-800">
              Hypnotherapy is an amazing tool and change agent for your mind and
              body. Often when learning about a new healing modality we are
              plagued with questions about how it works, why it works, and what
              the process is like. Let me alleviate those concerns here! Below
              is a list of common questions I have recieved and had myself when
              starting this journey. If you have a question that's not on the
              list, reach out for a free consultation and let's explore what
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
            <h1 className="text-4xl font-semibold font-serif mb-10 text-sage-700">
              Common Questions about Hypnotherapy and Energy Healing
            </h1>
            {FAQ.map((faq, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl mb-2 font-bold text-sage-700">{faq[0]}</p>
                <p className="text-lg font-serif text-sage-800">{faq[1]}</p>
              </div>
            ))}
            <div className="text-center mt-10">
              <p className="text-3xl font-serif font-semibold text-center mb-6 text-sage-800">
                Ready to Reprogram Your Mind for Success?
              </p>
            </div>
            <HowItWorks />
          </div>
        </div>
      </section>
    </main>
  );
}
