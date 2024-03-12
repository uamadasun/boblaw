import React from "react";
import { StepsCarousel } from "./StepsCarousel";

export const StepsSection = () => {
  return (
    <div className="bg-blue-gray-50">
      <h1 className="uppercase pt-10 mb-6 text-center font-extrabold text-3xl md:text-4xl">
        How we work
      </h1>
     <StepsCarousel/>

    </div>
  );
};
