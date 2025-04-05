import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <section className="py-12 bg-sage-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-center mb-8 text-white">
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
              During our live video session, I will guide you into a deep state
              of relaxation, helping you reframe your thoughts and unlock
              transformations.
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
  );
}
