import type { Metadata } from "next";
import { OvercomePhobia } from "@/lib/globals";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: OvercomePhobia.metaTitle,
  description: OvercomePhobia.metaDescription,
};

const HypnotherapyOvercomePhobia = () => {
  return (
    <Landing
      title={OvercomePhobia.title}
      description={OvercomePhobia.description}
      whyTitle={OvercomePhobia.whyTitle}
      whyDescription={OvercomePhobia.whyDescription}
      benefits={OvercomePhobia.benefits}
      faqs={OvercomePhobia.faqs}
    />
  );
};

export default HypnotherapyOvercomePhobia;
