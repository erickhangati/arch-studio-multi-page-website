import React from "react";

import styles from "./LinkedInIcon.module.scss";

const LinkedInIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles["linkedIn-icon"]}
    >
      <path
       
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0H36C38.2 0 40 1.8 40 4V36C40 38.2 38.2 40 36 40H4C1.8 40 0 38.2 0 36V4C0 1.8 1.8 0 4 0ZM12 34V16H6V34H12ZM9 12.6C7 12.6 5.4 11 5.4 9C5.4 7 7 5.4 9 5.4C11 5.4 12.6 7 12.6 9C12.6 11 11 12.6 9 12.6ZM28 34H34V22.6C34 18.8 30.8 15.6 27 15.6C25.2 15.6 23 16.8 22 18.4V16H16V34H22V23.4C22 21.8001 23.4 20.4 25 20.4C26.6 20.4 28 21.8001 28 23.4V34Z"
        fill="white"
      />
    </svg>
  );
};

export default LinkedInIcon;
