import React from "react";

import styles from "./TwitterIcon.module.scss";

const TwitterIcon = () => {
  return (
    <svg
      width="40"
      height="33"
      viewBox="0 0 40 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles["twitter-icon"]}
    >
      <g id="iconmonstr-twitter-1">
        <path
          id="Path"
          d="M40 4.26167C38.5283 4.915 36.9467 5.355 35.2867 5.55333C36.9817 4.53833 38.2833 2.93 38.895 1.01333C37.31 1.95333 35.5533 2.63667 33.6833 3.005C32.1883 1.41 30.0533 0.413334 27.6933 0.413334C22.395 0.413334 18.5017 5.35667 19.6983 10.4883C12.88 10.1467 6.83333 6.88 2.785 1.915C0.635 5.60333 1.67 10.4283 5.32333 12.8717C3.98 12.8283 2.71333 12.46 1.60833 11.845C1.51833 15.6467 4.24333 19.2033 8.19 19.995C7.035 20.3083 5.77 20.3817 4.48333 20.135C5.52667 23.395 8.55667 25.7667 12.15 25.8333C8.7 28.5383 4.35333 29.7467 0 29.2333C3.63167 31.5617 7.94667 32.92 12.58 32.92C27.8167 32.92 36.425 20.0517 35.905 8.51C37.5083 7.35167 38.9 5.90667 40 4.26167Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default TwitterIcon;