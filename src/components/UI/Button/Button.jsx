import React from "react";

import ArrowIcon from "./ArrowIcon";

import styles from "./Button.module.scss";

const Button = ({ children, className, onClick }) => {
  // Generating button classes from local css from component modules and props className.
  const classes = `${styles.button}${className ? ` ${className}` : ""}`;
  return (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
      <ArrowIcon />
    </button>
  );
};

export default Button;
