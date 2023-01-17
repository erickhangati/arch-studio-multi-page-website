import React, { useState } from "react";

import LinkedInIcon from "./LinkedInIcon";
import TwitterIcon from "./TwitterIcon";

import styles from "./LeaderCard.module.scss";

const LeaderCard = ({ name, designation, image }) => {
  // State to show overlay.
  const [showOverlay, setShowOverlay] = useState(false);

  // Mouse hover in handler function.
  const mouseEnterHandler = () => {
    setShowOverlay(() => true);
  };

  // Mouse hover out handler function.
  const mouseLeaveHandler = () => {
    setShowOverlay(() => false);
  };

  return (
    <article className={styles["leader-card"]}>
      <div
        className={styles["leader-card__image"]}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img src={image} alt={name} />

        {/* Hover overlay. */}
        {showOverlay && (
          <div className={styles["leader-card__overlay"]}>
            <LinkedInIcon />
            <TwitterIcon />
          </div>
        )}
      </div>
      <h4>{name}</h4>
      <span>{designation}</span>
    </article>
  );
};

export default LeaderCard;
