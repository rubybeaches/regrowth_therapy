import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/globals";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="bg-sage-100">
      <Header />
      {/* Hero Section */}
      <section className="text-white relative shadow-xl">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8">
              REGROWTH THERAPY & HEALING
              <span className="block font-script text-5xl mt-2">with Ruby</span>
            </h1>
            <div className="grid grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <Image
                src="/hero-image.png"
                className="absolute right-[0] w-[60vw] sm:w-[50vw] md:w-[50vw] top-[30vw] sm:top-[30px] md:top-[20px]"
                alt="background image containing logo"
                width={900}
                height={760}
                sizes="50vw"
              />
              <Image
                src="/full_body.png"
                className="absolute right-[-10px] md:right-[0px] w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[700px] top-[25vw] sm:top-[20px] md:top-[10px]"
                alt="hero image of Ruby"
                width={1170}
                height={1638}
              />
              <span className="relative">
                <p className="text-lg mb-6 font-serif">
                  Start your regrowth today. Book a free discovery call to map
                  the modality that will work best for you.
                </p>
                <Button className="bg-rose-600 hover:bg-rose-700 rounded-full px-8 mb-6 text-lg">
                  Book Now
                </Button>
              </span>
              <div className="h-[50vw] sm:h-[20vw] md:h-[40vw]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-cream-100 py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6 text-sage-700">
            Imagine a life where...
          </h2>
          <div className="space-y-2 text-sage-800 text-lg">
            <p>You wake up each day energized, focused, and at peace.</p>
            <p>You let go of fears and patterns that no longer serve you.</p>
            <p>You create space for love, joy, and (re)growth.</p>
          </div>
        </div>
      </section>

      {/* Red Divider */}
      <section className="bg-cream-100">
        <hr className="max-w-4xl mx-auto md:border md:border-solid md:border-rose-600 " />
      </section>

      {/* Partner Section */}
      <section className="bg-cream-100 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/butterfly_logo_red.png"
                  alt="Butterfly logo"
                  width={48}
                  height={48}
                />
                <h2 className="text-3xl font-serif text-rose-600">
                  Your Partner in Transformation
                </h2>
              </div>
              <p className="text-sage-800 text-lg">
                Welcome! I'm{" "}
                <span className="text-rose-400 font-semibold">Ruby</span>, a
                certified hypnotherapist and energy healer. I'm passionate about
                helping individuals find balance and harmony in their lives.
              </p>
              <p className="mt-4 text-sage-800 text-lg">
                Whether you're seeking relief from stress, clarity in life's
                challenges, or freedom from old patterns, I'm here to help you
                rediscover your power and potential.
              </p>
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <Image
                src="/portrait.png"
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
      <section className="pb-12 bg-sage-50" id="services">
        <Image
          src="/wavy_cream.png"
          className="mb-6 relative top-[-2px]"
          alt="wavy background section divider"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-8 text-sage-700">
            Therapeutic Services Available
          </h2>
          <div className="grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-cream-100">
                <h3
                  className={`text-2xl font-semibold mb-2 ${
                    index > 0 ? "text-sage-700" : "text-rose-600"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${
                    index > 0 ? "text-sage-700" : "text-rose-800"
                  } mb-4`}
                >
                  {service.description}
                </p>
                <Link href={`/${service.link}`}>
                  <Button
                    className={`${
                      index > 0
                        ? "bg-sage-700 hover:bg-sage-800"
                        : "bg-rose-600 hover:bg-rose-700"
                    } text-white text-base`}
                  >
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl mb-4 font-serif">
              Discuss which modality will work best to meet your needs.
            </p>
            <Button className="bg-rose-600 hover:bg-rose-700 rounded-full px-8 text-lg">
              Book a Free Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-cream-50 pb-16">
        <Image
          src="/wavy_sage.png"
          className="mb-6 relative top-[-2px]"
          alt="wavy background section divider"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12 text-sage-700">
            Book Your Session
          </h2>
          <div className="grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-2 border-sage-700">
              <h3 className="text-2xl font-bold mb-2 text-sage-700">
                New Clients
              </h3>
              <p className="mb-4 text-sage-700">
                Book a free consultation to discuss your needs
              </p>
              <p className="mb-6 text-lg text-sage-700">
                During this 15-minute session, we'll explore how I can help you
                achieve your goals.
              </p>
              <Button className="w-full bg-sage-700 text-base text-white hover:bg-sage-800">
                Book Consultation
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-sage-700">
                Existing Clients
              </h3>
              <p className="mb-4 text-sage-700">
                Schedule your next therapy or healing session
              </p>
              <p className="mb-6 text-lg text-sage-700">
                Choose from available time slots for your preferred service.
              </p>
              <Button className="w-full bg-sage-700 text-base text-white hover:bg-sage-800">
                Book Session
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
