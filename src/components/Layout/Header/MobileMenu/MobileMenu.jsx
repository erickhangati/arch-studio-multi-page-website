import React, { useState } from "react";

import MobileMenuIcon from "./MobileMenuIcon";

import styles from "./MobileMenu.module.scss";
import MenuModalOverlay from "./MenuModalOverlay";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  const iconClickHandler = () => {
    // Set state to toggle when to show/hide mobile menu.
    setShowMobileMenu((previousState) => {
      return !previousState;
    });
  };

  return (
    <div className={styles["mobile-menu"]}>
      {/* Render Mobile Menu Icon */}
      <MobileMenuIcon onClick={iconClickHandler} />

      {/* Render Mobile Menu Overlay Modal. */}
      {showMobileMenu && <MenuModalOverlay hideMobileMenu={iconClickHandler} />}
    </div>
  );
};

export default MobileMenu;
