import React from "react";
import Button from "./Button";
import mobileBanner from "../assets/images/mobile-banner.svg";
import banner from "../assets/images/banner.svg";

import Image from "next/image";

const Banner = () => {
  return (
    <div >
      {/* DESKTOP HERO BANNER */}
      <header className=" desk-banner  w-full mt-32 hidden  md:flex -mb-28 ">
        <div className="flex-2 md:flex-1 h-auto flex flex-col justify-center pl-2  content-center">
          <h1 className="font-black text-3xl md:text-6xl   text-black">
            HAVE YOU BEEN SERIOUSLY INJURED?
          </h1>
          <h2 className="text-1xl md:text-4xl text-left  text-blue-700 font-extrabold">
            WE WANT YOU TO CALL US.
          </h2>
          <Button
            mobile={false}
            classInfo={
              "bg-gold-400  hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-2xl mt-4  rounded-sm  hover:scale-110"
            }
            purpose={"call"}
          />
        </div>

        <Image
          src={banner.src}
          width={600}
          height={600}
          className="main-banner"
          alt="benjamin o bengston"
        />
      </header>

      {/* MOBILE HERO BANNER */}
      <header
        className=" w-full my-auto py-10 px-1  h-fit flex flex-col mt-20 bg-right bg-cover bg-no-repeat md:invisible"
        style={{
          backgroundImage: `url('${mobileBanner.src}')`,
        }}
      >
        <div className="flex-2 md:flex-1 h-auto align-middle justify-center my-auto mt-4 px-4 flex flex-col w-4/5">
          <h1 className=" text-4xl md:text-6xl  text-black font-extrabold">
            HAVE YOU BEEN SERIOUSLY INJURED?
          </h1>
          <h2 className="text-1xl md:text-4xl  text-blue-800 font-black my-5">
            WE WANT YOU TO CALL US.
          </h2>
          <div>
            <Button
              mobile={true}
              classInfo={
                " bg-gold-400 font-semibold py-2 text-md rounded-sm w-1/2 mt-3 text-black "
              }
              purpose={"call"}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
