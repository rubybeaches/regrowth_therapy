import type { Metadata } from "next";
import { WeightLoss } from "@/lib/globals";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: WeightLoss.metaTitle,
  description: WeightLoss.metaDescription,
};

const HypnotherapyWeightLoss = () => {
  return (
    <Landing
      title={WeightLoss.title}
      description={WeightLoss.description}
      whyTitle={WeightLoss.whyTitle}
      whyDescription={WeightLoss.whyDescription}
      benefits={WeightLoss.benefits}
      faqs={WeightLoss.faqs}
    />
  );
};

export default HypnotherapyWeightLoss;
