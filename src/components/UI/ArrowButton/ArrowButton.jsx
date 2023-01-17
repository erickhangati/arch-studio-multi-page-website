import React from "react";

import ArrowIcon from "../Button/ArrowIcon";

import styles from "./ArrowButton.module.scss";

const ArrowButton = () => {
  return (
    <button className={styles["arrow-button"]}>
      <ArrowIcon />
    </button>
  );
};

export default ArrowButton;
