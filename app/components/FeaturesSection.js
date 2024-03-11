import React from "react";
import background from "../assets/images/blue-background.svg";
import { FeatureCard } from "./FeatureCard";
import expertise from "../assets/images/featuresImages/expertise.svg";
import results from "../assets/images/featuresImages/results.svg";
import transparency from "../assets/images/featuresImages/transparency.svg";
import quality from "../assets/images/featuresImages/quality.svg";

export const FeaturesSection = () => {
  return (
    <div
      className=" bg-right bg-cover bg-no-repeat flex flex-col md:flex-row py-16 px-0 md:px-5 gap-8 md:gap-4 items-center"
      style={{
        backgroundImage: `url('${background.src}')`,
      }}
    >
      <FeatureCard
        title={"Expertise"}
        description={
          "We know how to prove your damages and obtain compensation for them."
        }
        icon={expertise.src}
      />
      <FeatureCard
        title={"Results"}
        description={
          "When you have been injured, there is a lot of turmoil and uncertainty and chaos in your life. We provide an anchor of calm security."
        }
        icon={results.src}
      />
      <FeatureCard
        title={"Transparency"}
        description={
          "We work together with you to execute the plan. Your attorney will regularly talk with you about the case, about how it is progressing and about what to expect."
        }
        icon={transparency.src}
      />
      <FeatureCard
        title={"Quality"}
        description={
          "We know how the system works, we know how to make it work for you and how to explain all of the legal issues to you in a way that you can easily get."
        }
        icon={quality.src}
      />
    </div>
  );
};
