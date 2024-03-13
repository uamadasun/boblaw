import React from "react";
import staff from "../assets/images/staff.svg";

export const MissionSection = () => {
  return (
    <div
      className=" bg-top bg-cover bg-no-repeat text-center text-white px-2 py-6"
      style={{
        backgroundImage: `url('${staff.src}')`,
      }}
    >
      <h1 className="font-bold uppercase">Our Mission</h1>
      <pre className=" text-wrap text-center text text-white font-semibold px-4">
        {`We help people - particularly people who have been hurt by others.
        \nWe educate you about how the claim works so that we can together make
        decisions about how to pursue your claim.
        \nWe work with you personally to make sure your case has the best outcome possible.`}
      </pre>
    </div>
  );
};
