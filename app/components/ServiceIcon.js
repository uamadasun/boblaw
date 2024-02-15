import Image from "next/image";
import React from "react";
import Button from "./Button";

export const ServiceIcon = (props) => {
  const { service, serviceShade, name } = props;
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="relative w-5/6 md:w-fit">
        <a href="#">
          <Image
            src={service}
            alt={`image of service: ${name}`}
            className="mx-auto w-fit m-4 h-fit rounded-md absolute top-0 left-0 opacity-100 hover:opacity-0 px-2"
          />
        </a>
        <div className="group group-hover:relative flex flex-col ">
          <Image
            src={service}
            alt={`image of service: ${name}`}
            className="mx-auto w-fit m-4 h-fit rounded-md px-2"
          />
          <button
            className="invisible group-hover:visible  absolute inset-x-8 bottom-1/4 md:p-1
              
             bg-gold-400 text-black font-extrabold rounded-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
