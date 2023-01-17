import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./DesktopMenu.module.scss";

const DesktopMenu = () => {
  return (
    <nav className={styles["desktop-menu"]}>
      <ul>
        <NavLink
          to="/portfolio"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          <li>Portfolio</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
