import React from "react";
import { Link } from "react-router-dom";

import ArrowIcon from "./ArrowIcon";

import styles from "./Button.module.scss";

const Button = ({ children, className, onClick, to }) => {
  // Generating button classes from local css from component modules and props className.
  const classes = `${styles.button}${className ? ` ${className}` : ""}`;
  return (
    <Link className={classes} onClick={onClick} to={to}>
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
};

export default Button;
