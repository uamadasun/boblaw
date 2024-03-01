import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export const ServiceIcon = ({ eachPage }) => {
  // console.log(`Here is page ${eachPage.title}`);
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="relative w-5/6 md:w-fit">
        <a href="/personal-injury">
          <Image
            src={eachPage.image}
            alt={`image of service: ${eachPage.title}`}
            className="mx-auto w-fit m-4 h-fit rounded-md absolute top-0 left-0 opacity-100 hover:opacity-0 px-2"
            width={50}
            height={50}
          />
        </a>
        <div className="group group-hover:relative flex flex-col ">
          <Link href={`/${eachPage.slug}`}>
            <Image
              src={eachPage.shade}
              alt={`image of service: ${eachPage.title}`}
              className="mx-auto w-fit m-4 h-fit rounded-md px-2"
              width={50}
              height={50}
            />
          </Link>

          <Link href={`/${eachPage.slug}`}>
            <Button purpose={'learn'}/>
          </Link>
        </div>
      </div>
    </div>
  );
};
