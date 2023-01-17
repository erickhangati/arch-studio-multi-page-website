import React, { useContext } from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import contacts from "../contacts";
import MapContext from "../../../store/map-context";

import marker from "./markerIcon.svg";
import styles from "./ContactMap.module.scss";

const ContactMaps = () => {
  // Initialize map context.
  const ctx = useContext(MapContext);

  // Creating a custom marker.
  const markerIcon = new L.Icon({
    iconUrl: marker,
  });

  const pinClickHandler = (location) => {
    // Set active location in state.
    ctx.setActiveLocation(() => location);
  };

  return (
    <section className={styles["contact-map"]} id="map">
      <MapContainer
        // Center the map on load.
        center={[35.952461, -83.991531]}
        // Change zoom with desktop on phone.
        zoom={window.innerWidth <= 475 ? 4 : 5}
        // Include all markers in bounds.
        maxBounds={[
          [35.952461, -83.991531],
          [29.89743, -97.827507],
        ]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {contacts.map((location, index) => (
          // Loop contacts to render markers using coords.
          <Marker
            key={index}
            position={location.coords}
            icon={markerIcon}
            eventHandlers={{ click: pinClickHandler.bind(null, location) }}
          />
        ))}

        {ctx.activeLocation && (
          // Render popup with location details.
          <Popup position={ctx.activeLocation.coords}>
            <div>
              <h5>{ctx.activeLocation.office}</h5>
              <p>{ctx.activeLocation.address}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </section>
  );
};

export default ContactMaps;
