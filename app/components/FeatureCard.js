import Image from "next/image";
import React from "react";

export const FeatureCard = (props) => {
  const { title, description, icon } = props;

  return (
    <div className=" bg-white w-2/4 h-96 flex-1 rounded-3xl flex flex-col items-center justify-center align-middle  pt-2 px-4 uppercase text-blue-900">
      <Image
        src={icon}
        alt="results card"
        width={50}
        height={50}
        className="mt-3"
      />
      <h3 className=" font-black my-2">{title}</h3>
      <h2 className="text-center text-sm text-blue-700  font-semibold mb-6">
        {description}
      </h2>
    </div>
  );
};
