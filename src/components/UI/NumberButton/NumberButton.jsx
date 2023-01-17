import React from "react";

import styles from "./NumberButton.module.scss";

const NumberButton = ({ children, onClick, className }) => {
  // Generating button classes from local css from component modules and props className.
  const classes = `${styles["number-button"]}${
    className ? ` ${className}` : ""
  }`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default NumberButton;
