import type { Metadata } from "next";
import { GoalSetting } from "@/lib/globals";
import Landing from "@/components/ui/landing";

export const metadata: Metadata = {
  title: GoalSetting.metaTitle,
  description: GoalSetting.metaDescription,
};

const HypnotherapyGoalSetting = () => {
  return (
    <Landing
      title={GoalSetting.title}
      description={GoalSetting.description}
      whyTitle={GoalSetting.whyTitle}
      whyDescription={GoalSetting.whyDescription}
      benefits={GoalSetting.benefits}
      faqs={GoalSetting.faqs}
    />
  );
};

export default HypnotherapyGoalSetting;
