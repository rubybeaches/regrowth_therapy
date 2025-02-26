import type { Metadata } from "next";
import { CustomPlan } from "@/lib/globals";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: CustomPlan.metaTitle,
  description: CustomPlan.metaDescription,
};

const HypnotherapyCustomPlan = () => {
  return (
    <Landing
      title={CustomPlan.title}
      description={CustomPlan.description}
      whyTitle={CustomPlan.whyTitle}
      whyDescription={CustomPlan.whyDescription}
      benefits={CustomPlan.benefits}
      faqs={CustomPlan.faqs}
    />
  );
};

export default HypnotherapyCustomPlan;
