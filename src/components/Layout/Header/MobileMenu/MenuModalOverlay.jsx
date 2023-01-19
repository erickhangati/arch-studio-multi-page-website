import React from "react";
import { Link } from "react-router-dom";

import styles from "./MenuModalOverlay.module.scss";

const MenuModalOverlay = ({ hideMobileMenu }) => {
  return (
    <div className={styles.overlay}>
      <nav className={styles["overlay__modal"]}>
        <ul>
          <li onClick={hideMobileMenu}>
            <Link to="/portfolio">Portfolio</Link>
          </li>

          <li onClick={hideMobileMenu}>
            <Link to="/about">About</Link>
          </li>

          <li onClick={hideMobileMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuModalOverlay;
