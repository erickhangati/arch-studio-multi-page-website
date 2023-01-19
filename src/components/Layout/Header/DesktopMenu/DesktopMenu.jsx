import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./DesktopMenu.module.scss";

const DesktopMenu = () => {
  return (
    <nav className={styles["desktop-menu"]}>
      <ul>
        <li>
          <NavLink
            to="/portfolio"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
