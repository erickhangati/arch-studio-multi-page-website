import React, { useState } from "react";

import styles from "./FeaturedCard.module.scss";

const FeaturedCard = ({ featuredItem, number, className }) => {
  // Set hover state.
  const [isHover, setIsHover] = useState(false);

  const normalBackground =
    "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))";

  const hoveredBackground =
    "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))";

  // Background style object.
  const backgroundStyle = {
    background: `${isHover ? hoveredBackground : normalBackground}, url(${
      featuredItem.image
    })`,
  };

  // Change background state on mouse hover.
  const mouseEnterHandler = () => {
    setIsHover(() => true);
  };

  // Change background state on mouse hover.
  const mouseLeaveHandler = () => {
    setIsHover(() => false);
  };

  // Setting classes to pick local component module css plus any props css
  const classes = `${styles["featured-card"]}${
    className ? ` ${className}` : ""
  }`;

  return (
    <article
      className={classes}
      // Setting background image dynamically from featuredItem.
      style={backgroundStyle}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {/* Setting title dynamically from featuredItem */}
      <h4>{featuredItem.title}</h4>

      {/* Setting date dynamically from featuredItem */}
      <p>{featuredItem.date}</p>
      <span>{number}</span>
    </article>
  );
};

export default FeaturedCard;
