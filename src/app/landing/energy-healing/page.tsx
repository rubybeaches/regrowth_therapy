import type { Metadata } from "next";
import { EnergyHealing } from "@/lib/globals";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: EnergyHealing.metaTitle,
  description: EnergyHealing.metaDescription,
};

const HypnotherapyEnergyHealing = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      <Header />
      <Landing
        title={EnergyHealing.title}
        description={EnergyHealing.description}
        whyTitle={EnergyHealing.whyTitle}
        whyDescription={EnergyHealing.whyDescription}
        benefits={EnergyHealing.benefits}
        faqs={EnergyHealing.faqs}
      />
      <Footer />
    </div>
  );
};

export default HypnotherapyEnergyHealing;
