import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export const ServiceIcon = ({ eachPage }) => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <Link href={`/${eachPage.slug}`}>
        <div className="relative">
          <Image
            src={eachPage.image}
            alt={`image of service: ${eachPage.title}`}
            className="mx-auto w-fit m-4 h-fit rounded-md px-2"
            width={50}
            height={50}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white service-font md:text-4xl lg:text-2xl p-3 text-center font-bold uppercase">
              {eachPage.title}
            </h1>
            <Link href={`/${eachPage.slug}`}>
              <Button purpose={"learn"} />
            </Link>
          </div>
            
          
        </div>
      </Link>
    </div>
  );
};
