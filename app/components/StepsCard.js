import Image from "next/image";
import React from "react";

export const StepsCard = (props) => {
  const { image, stepNumber, headerText, description } = props;
  return (
    <div className=" w-fit  mx-auto items-top flex rounded-3xl flex-col items-center text-center p-4 md:p-0 md:px-2">
        <Image
          src={image.src}
          alt={`${description}`}
          width={10}
          height={10}
          className="inline-block h-24 w-24 rounded-full"
        />
        <h2 className="uppercase font-black text-2xl py-1">Step {stepNumber}</h2>
        <h3 className="uppercase font-semibold text-xl -mt-3 text-blue-900">{headerText}</h3>
        <p className="text-lg">{description}</p>
    </div>
  );
};
