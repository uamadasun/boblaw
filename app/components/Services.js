import React from "react";
import { ServiceIcon } from "./ServiceIcon";
import Button from "./Button";

export const Services = (props) => {
  const { allPages } = props;
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {allPages &&
          allPages.pages.map((page) =>
            page.type === "service" ? (
              <ServiceIcon eachPage={page} key={page} />
            ) : null
          )}
      </div>

      <div className="flex flex-col items-center ">
        <Button
          mobile={false}
          classInfo={
            " bg-gold-400 hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-lg rounded-sm  hover:scale-110 min-w-full"
          }
          purpose={"call"}
        />
        <Button
          mobile={true}
          classInfo={
            " bg-gold-400 font-semibold px-8 py-2 mt-4 text-sm rounded-sm w-full text-black"
          }
          purpose={"call"}
        />
      </div>
    </div>
  );
};
