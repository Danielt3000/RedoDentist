import React from "react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "320px",
  height: "400px",
};
const center = {
  lat: 39.47561190877598, // default latitude
  lng: -119.80542671085254, // default longitude
};

const AddressMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAZuwZ7uBFMDan_m43RHFZMGJhHLI-kLMw",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className=" rounded-lg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export { AddressMap };
