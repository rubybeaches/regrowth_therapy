import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/globals";

export default function Home() {
  return (
    <div className="min-h-screen bg-sage-50">
      <header className="bg-sage-700 text-white py-4">
        <div className="container max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/butterfly_logo_white.png"
              alt="Butterfly logo"
              width={24}
              height={24}
            />
            <span>Regrowth Therapy & Healing</span>
          </div>
          <nav className="flex gap-4">
            <Link href="#services">Services</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-rose-400 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                REGROWTH THERAPY & HEALING
                <span className="block font-script text-3xl mt-2">
                  with Ruby
                </span>
              </h1>
              <p className="text-lg mb-8">
                Start your regrowth today. Book a free discovery call to map the
                modality that will work best for you.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700">
                Book Now
              </Button>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-cream-50 py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-serif mb-6">
              Imagine a life where...
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>You wake up each day energized, focused, and at peace.</p>
              <p>You let go of fears and patterns that no longer serve you.</p>
              <p>You create space for love, joy, and (re)growth.</p>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="bg-sage-100 py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-serif text-rose-600 mb-4">
                  Your Partner in Transformation
                </h2>
                <p className="text-gray-700">
                  Welcome! I'm Ruby, a certified hypnotherapist and energy
                  healer. I'm passionate about helping individuals find balance
                  and harmony in their lives.
                </p>
                <p className="mt-4 text-gray-700">
                  Whether you're seeking relief from stress, clarity in life's
                  challenges, or freedom from old patterns, I'm here to help you
                  rediscover your power and potential.
                </p>
              </div>
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/butterfly_logo_white.png"
                  alt="Therapist portrait"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif text-center mb-12">
              Therapeutic Services Available
            </h2>
            <div className="grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.map((service) => (
                <Card key={service.title} className="p-6 bg-cream-50">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="bg-sage-700 text-white hover:bg-sage-800"
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="bg-sage-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif text-center mb-12">
              Book Your Session
            </h2>
            <div className="grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">New Clients</h3>
                <p className="mb-4">
                  Book a free consultation to discuss your needs.
                </p>
                <p className="mb-6">
                  During this 15-minute session, we'll explore how I can help
                  you achieve your goals.
                </p>
                <Button className="w-full bg-sage-700 text-white hover:bg-sage-800">
                  Book Consultation
                </Button>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Existing Clients</h3>
                <p className="mb-4">
                  Schedule your next therapy or healing session
                </p>
                <p className="mb-6">
                  Choose from available time slots for your preferred service.
                </p>
                <Button className="w-full bg-sage-700 text-white hover:bg-sage-800">
                  Book Session
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sage-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© Regrowth Therapy & Healing LLC. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
