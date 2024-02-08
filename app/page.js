import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import banner from "./assets/images/banner.svg";
import mobileBanner from "./assets/images/mobile-banner.svg";
import Button from "./components/Button";
import board from './assets/images/highlights/board.svg'
import freeEval from './assets/images/highlights/freeEval.svg'
import noFees from './assets/images/highlights/noFees.svg'
import personalized from './assets/images/highlights/personalized.svg'
import success from './assets/images/highlights/success.svg'
import Highlights from "./components/Highlights";


export default async function Home() {
  return (
    <div>
      {/* DESKTOP HERO BANNER */}
      <header className=" justify-around  w-full mt-32 hidden  md:flex flex-col md:flex-row  " >
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="flex-2 md:flex-1 h-auto align-middle justify-center my-auto pl-2">
          <h1 className="font-black text-3xl md:text-6xl my-6 text-center md:text-left text-gray-500">
            HAVE YOU BEEN SERIOUSLY INJURED?
          </h1>
          <h2 className="text-1xl md:text-4xl text-center md:text-left text-blue-700 font-extrabold">
            WE WANT YOU TO CALL US.
          </h2>
          <Button
            mobile={false}
            classInfo={
              "bg-gold-400 mx-auto hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-2xl mt-4  rounded-sm  hover:scale-110"
            }
          />
        </div>

        <Image
          src={banner.src}
          width={600}
          height={600}
          className="h-full "
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
          <h1 className=" text-4xl md:text-6xl  text-gray-700 font-extrabold">
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
            />
          </div>
        </div>
      </header>

      {/* --------------------------------- */}

      {/* HIGHLIGHTS SECTION */}
      <section className="flex flex-col md:flex-row justify-around gap-3 py-5 bg-blue-700">
        <Highlights imageHref={freeEval.src} message={`Free case evaluation`}/>
        <Highlights imageHref={noFees.src} message={`No fees unless we recover money for you`}/>
        <Highlights imageHref={board.src} message={`Board-certified & Georgia-Licensed Attorneys`}/>
        <Highlights imageHref={success.src} message={`High success rate`}/>
        <Highlights imageHref={personalized.src} message={`Personalized service`}/>

      </section>


    </div>
  );
}
