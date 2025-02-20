import type { Metadata } from "next";
import { AddictionChange } from "@/lib/globals";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: AddictionChange.metaTitle,
  description: AddictionChange.metaDescription,
};

const HypnotherapyAddictionChange = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      <Header />
      <Landing
        title={AddictionChange.title}
        description={AddictionChange.description}
        whyTitle={AddictionChange.whyTitle}
        whyDescription={AddictionChange.whyDescription}
        benefits={AddictionChange.benefits}
        faqs={AddictionChange.faqs}
      />
      <Footer />
    </div>
  );
};

export default HypnotherapyAddictionChange;
