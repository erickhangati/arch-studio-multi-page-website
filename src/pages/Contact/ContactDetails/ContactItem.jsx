import React, { useContext } from "react";

import MapContext from "../../../store/map-context";
import Button from "../../../components/UI/Button/Button";

import styles from "./ContactItem.module.scss";

const ContactItem = ({ office, mail, address, phone, contactItem }) => {
  // Initializing map context.
  const mapCtx = useContext(MapContext);

  const viewMapHandler = () => {
    // Get map section ID.
    const map = document.getElementById("map");

    // Scroll to view.
    if (map) {
      map.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Set the active location in state.
    mapCtx.setActiveLocation(() => contactItem);
  };

  return (
    <article className={styles["contact-item"]}>
      <h4>{office}</h4>
      <div className={styles["contact-details"]}>
        <div className={styles["contact-details__contacts"]}>
          <span>Mail: {mail}</span>
          <span>Address: {address}</span>
          <span>Phone: {phone}</span>
        </div>

        <Button
          className={styles["contact-details__button"]}
          onClick={viewMapHandler}
        >
          View on map
        </Button>
      </div>
    </article>
  );
};

export default ContactItem;
