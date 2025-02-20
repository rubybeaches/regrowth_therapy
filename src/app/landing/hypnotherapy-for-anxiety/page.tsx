import type { Metadata } from "next";
import { StressRelief } from "@/lib/globals";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Landing from "@/components/ui/landing";
import Link from "next/link";

export const metadata: Metadata = {
  title: StressRelief.metaTitle,
  description: StressRelief.metaDescription,
};

const HypnotherapyStressRelief = () => {
  return (
    <>
      <Landing
        title={StressRelief.title}
        description={StressRelief.description}
        whyTitle={StressRelief.whyTitle}
        whyDescription={StressRelief.whyDescription}
        benefits={StressRelief.benefits}
        faqs={StressRelief.faqs}
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

export default HypnotherapyStressRelief;
