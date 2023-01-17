import React from "react";
import { Link } from "react-router-dom";

import styles from "./MenuModalOverlay.module.scss";

const MenuModalOverlay = ({ hideMobileMenu }) => {
  return (
    <div className={styles.overlay}>
      <nav className={styles["overlay__modal"]}>
        <ul>
          <Link to="/portfolio">
            <li onClick={hideMobileMenu}>Portfolio</li>
          </Link>

          <Link to="/about">
            <li onClick={hideMobileMenu}>About</li>
          </Link>

          <Link to="/contact">
            <li onClick={hideMobileMenu}>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MenuModalOverlay;
