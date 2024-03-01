import React from "react";
import { ServiceIcon } from "./ServiceIcon";

export const Services = (props) => {
  const { allPages } = props;
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2  gap-2 px-16">
      {allPages &&
        allPages.pages.map((page) =>
          page.type === "service" ? (
            <ServiceIcon eachPage={page} key={page} />
          ) : (
            null
          )
        )}
    </div>
  );
};
