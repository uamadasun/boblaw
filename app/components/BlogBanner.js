"use client";
import React from "react";
import banner from "../assets/images/blog-banner.svg";
import { Parallax } from "react-scroll-parallax";

export const BlogBanner = () => {
  return (
    
    <header
    className=" w-full h-96 bg-cover bg-left md:bg-center flex items-center justify-center "
    style={{ backgroundImage: `url('${banner.src}')` }}
  >
    <Parallax speed={15}>
    <div className=" max-w-fit w-5/6  mx-auto bg-blue-gray-900 text-white text-left items-center font-bold text-5xl px-6 py-6">
      <h1 className="uppercase">BOB Blogs.</h1>
      <h2 className="text-gold-200 text-sm uppercase">
        Insights and Advocacy from Your Personal Injury Advocate.
      </h2>
    </div>
    </Parallax>
  </header>
  );
};
