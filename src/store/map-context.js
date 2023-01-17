import { createContext } from "react";

const MapContext = createContext({
  activeLocation: null,
  setActiveLocation: () => {},
});

export default MapContext;
