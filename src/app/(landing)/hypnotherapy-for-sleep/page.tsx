import type { Metadata } from "next";
import { ImprovedSleep } from "@/lib/globals";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: ImprovedSleep.metaTitle,
  description: ImprovedSleep.metaDescription,
};

const HypnotherapyImprovedSleep = () => {
  return (
    <Landing
      title={ImprovedSleep.title}
      description={ImprovedSleep.description}
      whyTitle={ImprovedSleep.whyTitle}
      whyDescription={ImprovedSleep.whyDescription}
      benefits={ImprovedSleep.benefits}
      faqs={ImprovedSleep.faqs}
    />
  );
};

export default HypnotherapyImprovedSleep;
