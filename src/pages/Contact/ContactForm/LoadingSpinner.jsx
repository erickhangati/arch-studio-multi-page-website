import React from "react";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <span className={styles["loading-spinner"]}>
        <span className={styles["loading-spinner-inner"]}></span>
      </span>
    </div>
  );
};

export default LoadingSpinner;
