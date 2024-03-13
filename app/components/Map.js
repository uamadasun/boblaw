"use client";
import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Link from "next/link";

export default function Map() {
  const center = useMemo(
    () => ({ lat: 33.88999347320507, lng: -84.46541223913069 }),
    []
  );

  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="max-w-full  w-screen h-80 mx-auto">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} onClick={() => setSelectedMarker(center)} />

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="text-sm">
              <h3 className="font-bold">BOB Law Firm</h3>
              <p className="mb-0.5"><span className="font-normal">Located in: </span>Braves Lot B11</p>
              <p className="mb-0.5">
                <span className="font-normal">Address: </span>
                <Link
                  href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIJCAMQABgNGIAEMhAIBBAuGAgYDRgeGMcBGNEDMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIyNWowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KQtxhxm2EfWIMdVu2GiAJ8dv&daddr=1100+Circle+75+Pkwy+%23460,+Atlanta,+GA+30339"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-600"
                >
                  1100 Circle 75 Pkwy #460, Atlanta, GA 30339
                </Link>
              </p>
              <p className="mb-0.5">
              <span className="font-normal">Phone:{" "}</span>
                <Link
                  href="tel:+14045965518"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-600"
                >
                  +1 (404) 596-5518
                </Link>
              </p>
              <Link
                className="underline text-blue-600"
                href="https://www.google.com/maps/dir//1100+Circle+75+Pkwy+%23460,+Atlanta,+GA+30339/@33.8897479,-84.5478188,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f511b61987710b:0x6fc7278068d86ed5!2m2!1d-84.4654176!2d33.8897753?entry=ttu"
                rel="noopener noreferrer"
                target="_blank"
              >
                Get Directions
              </Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
