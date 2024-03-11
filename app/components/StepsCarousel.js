"use client";
import Image from "next/image";
import { Carousel } from "./ThemeProvider";
import results from "../assets/images/featuresImages/results.svg";
import { Steps } from "./Steps";

export const StepsCarousel = () => {
  return (
    <Carousel className="bg-gradient-to-r from-blue-gray-500 via-white to-blue-gray-500 mt-10 flex items-center">
      <Steps />
      <Steps />
      <Steps />
      <Steps />
    </Carousel>
  );
};
