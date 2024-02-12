import React from "react";
import Highlights from "./Highlights";
import board from "../assets/images/highlights/board.svg";
import freeEval from "../assets/images/highlights/freeEval.svg";
import noFees from "../assets/images/highlights/noFees.svg";
import personalized from "../assets/images/highlights/personalized.svg";
import success from "../assets/images/highlights/success.svg";

const HighlightsSection = () => {
  return (
    
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
    
  );
};

export default HighlightsSection;
