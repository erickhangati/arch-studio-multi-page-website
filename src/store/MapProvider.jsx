import React, { useState } from "react";

import MapContext from "./map-context";

const MapProvider = ({ children }) => {
  const [activeLocation, setActiveLocation] = useState(null);

  const mapContext = {
    activeLocation,
    setActiveLocation,
  };

  return (
    <MapContext.Provider value={mapContext}>{children}</MapContext.Provider>
  );
};

export default MapProvider;
