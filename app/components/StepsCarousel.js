"use client";
import Image from "next/image";
import { Carousel } from "./ThemeProvider";
import results from "../assets/images/featuresImages/results.svg";
import { StepsCard } from "./StepsCard";
import talk from "../assets/images/stepsImages/talk.svg"
import engage from "../assets/images/stepsImages/engage.svg"
import work from "../assets/images/stepsImages/work.svg"
import recover from "../assets/images/stepsImages/recover.svg"


export const StepsCarousel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-2 px-6 md:px-36 md:gap-6">
      <StepsCard
      image={talk}
        stepNumber={1}
        headerText={"We Talk - Free consultation call"}
        description={
          "We give you a free consultation to evaluate the possible outcomes of your case. You can ask any questions during this free consultation, and we freely give information that will be useful to you."
        }
      />
      <StepsCard
      image={engage}
        stepNumber={2}
        headerText={`We Engage`}
        description={`If we agree to work together then we will sign a contract together. We will make a plan for how we can recover money for your damages.`}
      />
      <StepsCard
      image={work}
        stepNumber={3}
        headerText={`We Work Together`}
        description={`During this time we will work as a team on the case. You will let us know about changes in your status, in your treatment and any other issue. We will let you know about our progress in identifying sources of payment, in establishing liability and in proving damages.`}
      />
      <StepsCard
      image={recover}
        stepNumber={4}
        headerText={`We Recover Money`}
        description={`When we receive compensation for your damages, we will plan together on how that money is spent, which will include compensation to you.`}
      />
    </div>
  );
};

{
  /* <Carousel className="bg-gradient-to-r from-blue-gray-300 via-white to-blue-gray-300 flex items-center">
        <StepsCard />
        <StepsCard />
        <StepsCard />
        <StepsCard />
      </Carousel> */
}
