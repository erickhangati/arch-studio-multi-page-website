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

      {/* Render Footer Portfolio Button */}
      <Link to="/portfolio">
        <Button>See Our Portfolio</Button>
      </Link>
    </footer>
  );
};

export default Footer;
