import React from "react";

import styles from "./Logo.module.scss";

const Logo = ({ onClick }) => {
  return (
    <svg
      width="97"
      height="40"
      viewBox="0 0 97 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logo}
      onClick={onClick}
    >
      <g id="Arch 3">
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0822 33.0137L10.8219 39.2694H0L15.3425 1.59814H24.6575L40 39.2694H29.1781L26.9178 33.0137H13.0822ZM20 15.2511L16.5068 24.2009H23.4931L20 15.2511Z"
          fill="#1B1D23"
        />
        <path
          id="Path"
          d="M45.2968 39.2694V27.8082C45.2968 27.0319 45.5175 26.309 45.9589 25.6392C46.4003 24.9695 46.9825 24.4254 47.7055 24.0068C48.4284 23.5883 49.1933 23.379 50 23.379C50.6393 23.379 51.3432 23.5083 52.1119 23.7671C52.8805 24.0258 53.5464 24.3683 54.1096 24.7945V24.7945L58.0822 16.8036C57.4277 16.3166 56.5982 15.9208 55.5936 15.6164C54.589 15.312 53.6377 15.1598 52.7397 15.1598C51.3546 15.1598 50.0114 15.5137 48.71 16.2214C47.4087 16.9292 46.2709 17.9147 45.2968 19.1781V19.1781V15.8904H35.7991V39.2694H45.2968Z"
          fill="#1B1D23"
        />
        <path
          id="Path_2"
          d="M64.2923 40C65.7992 40 67.2337 39.7907 68.596 39.3721C69.9582 38.9535 71.0351 38.4627 71.8266 37.8995V37.8995L68.7215 31.5068C68.4323 31.7047 68.0328 31.8835 67.5229 32.0434C67.013 32.2032 66.4537 32.2831 65.8448 32.2831C64.8555 32.2831 63.9955 32.0662 63.2649 31.6324C62.5343 31.1986 61.975 30.624 61.5868 29.9086C61.1987 29.1933 61.0046 28.417 61.0046 27.5799C61.0046 26.9102 61.1683 26.21 61.4955 25.4794C61.8228 24.7488 62.3403 24.1324 63.048 23.6301C63.7558 23.1278 64.6728 22.8767 65.7992 22.8767C66.9864 22.8767 67.9605 23.1354 68.7215 23.6529V23.6529L71.8266 17.2602C71.0655 16.6819 69.9849 16.1872 68.5846 15.7762C67.1843 15.3653 65.7383 15.1598 64.2467 15.1598C62.3441 15.1598 60.5823 15.5061 58.9613 16.1986C57.3403 16.8911 55.9323 17.8272 54.7375 19.0068C53.5427 20.1864 52.6142 21.5182 51.9521 23.0023C51.29 24.4863 50.959 26.0198 50.959 27.6027C50.959 29.2922 51.3129 30.8866 52.0206 32.3858C52.7284 33.8851 53.6987 35.2055 54.9316 36.347C56.1645 37.4886 57.5838 38.3828 59.1896 39.0297C60.7954 39.6765 62.4963 40 64.2923 40Z"
          fill="#1B1D23"
        />
        <path
          id="Path_3"
          d="M78.9955 39.2694V26.3927C78.9955 25.6012 79.1553 24.9163 79.475 24.3379C79.7946 23.7595 80.2436 23.3105 80.822 22.9909C81.4004 22.6712 82.0701 22.5114 82.8311 22.5114C83.9879 22.5114 84.9164 22.8653 85.6165 23.5731C86.3167 24.2808 86.6668 25.2207 86.6668 26.3927V26.3927V39.2694H96.1645V24.3379C96.1645 22.5875 95.7535 21.0236 94.9316 19.6461C94.1097 18.2686 92.9948 17.1766 91.5868 16.3699C90.1789 15.5632 88.5846 15.1598 86.8037 15.1598C85.4034 15.1598 84.0222 15.4148 82.6599 15.9247C81.2977 16.4346 80.0762 17.1537 78.9955 18.0822V18.0822V0H69.4978V39.2694H78.9955Z"
          fill="#1B1D23"
        />
      </g>
    </svg>
  );
};

export default Logo;
