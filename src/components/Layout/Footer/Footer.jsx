import React from "react";
import { Link, NavLink } from "react-router-dom";

import FooterLogo from "./FooterLogo";
import Button from "../../UI/Button/Button";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Render Footer Logo with a link to the home page. */}
      <Link to="/">
        <div className={styles["footer__logo"]}>
          <FooterLogo />
        </div>
      </Link>

      {/* Render Footer Navigation Links. */}
      <nav className={styles["footer__nav"]}>
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

      {/* Render Footer Portfolio Button */}
      <Button to="/portfolio" className={styles["footer__button"]}>
        See Our Portfolio
      </Button>
    </footer>
  );
};

export default Footer;
