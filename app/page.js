import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import banner from "./assets/images/banner.svg";
import Button from "./components/Button";
import board from "./assets/images/highlights/board.svg";
import freeEval from "./assets/images/highlights/freeEval.svg";
import noFees from "./assets/images/highlights/noFees.svg";
import personalized from "./assets/images/highlights/personalized.svg";
import success from "./assets/images/highlights/success.svg";
import Highlights from "./components/Highlights";
import Banner from "./components/Banner";

export default async function Home() {
  return (
    <div>
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <Banner />
      {/* --------------------------------- */}

      {/* HIGHLIGHTS SECTION */}
      <section className="flex flex-col md:flex-row justify-around gap-3 py-5 bg-blue-900 md:-mt-96">
        <Highlights imageHref={freeEval.src} message={`Free case evaluation`} />
        <Highlights
          imageHref={noFees.src}
          message={`No fees unless we recover money for you`}
        />
        <Highlights
          imageHref={board.src}
          message={`Board-certified & Georgia-Licensed Attorneys`}
        />
        <Highlights imageHref={success.src} message={`High success rate`} />
        <Highlights
          imageHref={personalized.src}
          message={`Personalized service`}
        />
      </section>
    </div>
  );
}
