"use client";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export const PageBanner = (props) => {
  const { page } = props;
  return (
    <header
      className=" w-5/6 mx-auto h-60 bg-cover bg-top flex items-center md:bg-center lg:bg-bottom justify-center my-auto"
      style={{ backgroundImage: `url('${page.imageUrl}')` }}
    >
      <Parallax speed={3}>
        <div className=" text-white text-center font-bold  md:text-7xl flex-2">
          <h1 className="uppercase text-3xl md:text-6xl">{page.title}</h1>
        </div>
      </Parallax>
    </header>
  );
};
