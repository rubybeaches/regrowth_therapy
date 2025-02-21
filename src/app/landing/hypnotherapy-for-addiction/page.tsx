import type { Metadata } from "next";
import { AddictionChange } from "@/lib/globals";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: AddictionChange.metaTitle,
  description: AddictionChange.metaDescription,
};

const HypnotherapyAddictionChange = () => {
  return (
    <Landing
      title={AddictionChange.title}
      description={AddictionChange.description}
      whyTitle={AddictionChange.whyTitle}
      whyDescription={AddictionChange.whyDescription}
      benefits={AddictionChange.benefits}
      faqs={AddictionChange.faqs}
    />
  );
};

export default HypnotherapyAddictionChange;
