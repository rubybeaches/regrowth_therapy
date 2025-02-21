import type { Metadata } from "next";
import { ImprovedSleep } from "@/lib/globals";
import Landing from "@/components/ui/landing";
import Link from "next/link";

export const metadata: Metadata = {
  title: ImprovedSleep.metaTitle,
  description: ImprovedSleep.metaDescription,
};

const HypnotherapyImprovedSleep = () => {
  return (
    <>
      <Landing
        title={ImprovedSleep.title}
        description={ImprovedSleep.description}
        whyTitle={ImprovedSleep.whyTitle}
        whyDescription={ImprovedSleep.whyDescription}
        benefits={ImprovedSleep.benefits}
        faqs={ImprovedSleep.faqs}
      />
      <div className="bg-sage-100 py-4">
        <p className="max-w-4xl mx-auto text-cream-100 text-center text-sm">
          <sup>[1]</sup>Want to check my sources?{" "}
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/31251710/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Check these collection of studies
          </Link>{" "}
          and see what I can do for you!
        </p>
      </div>
    </>
  );
};

export default HypnotherapyImprovedSleep;
