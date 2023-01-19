import React from "react";

const MobileMenuIcon = ({ onClick }) => {
  return (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g>
        <rect width="24" height="3" fill="#1B1D23" />
        <rect y="7" width="24" height="3" fill="#1B1D23" />
        <rect y="14" width="24" height="3" fill="#1B1D23" />
      </g>
    </svg>
  );
};

export default MobileMenuIcon;
