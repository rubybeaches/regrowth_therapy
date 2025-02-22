import type { Metadata } from "next";
import { EnergyHealing } from "@/lib/globals";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: EnergyHealing.metaTitle,
  description: EnergyHealing.metaDescription,
};

const HypnotherapyEnergyHealing = () => {
  return (
    <Landing
      title={EnergyHealing.title}
      description={EnergyHealing.description}
      whyTitle={EnergyHealing.whyTitle}
      whyDescription={EnergyHealing.whyDescription}
      benefits={EnergyHealing.benefits}
      faqs={EnergyHealing.faqs}
    />
  );
};

export default HypnotherapyEnergyHealing;
