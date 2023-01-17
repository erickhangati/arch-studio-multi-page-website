import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

import Logo from "../../Logo/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  // State to manage when to show mobile menu.
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Getting route path.
  const { pathname } = useLocation();

  // Extract path name only
  const breadcrumb = pathname.slice(1);

  // Convert path name uppercase.
  const pageTitle = breadcrumb.toUpperCase();

  // Generate class from path name.
  const breadcrumbClass = `header__breadcrumb--${
    pathname === "/" ? "home" : breadcrumb
  }`;

  // Hide mobile menu on Logo click.
  const logoClickHandler = () => {
    setShowMobileMenu(false);
  };

  return (
    <header className={styles.header}>
      {/* Render breadcrumb. */}
      <div
        className={`${styles["header__breadcrumb"]} ${
          styles[`${breadcrumbClass}`]
        }`}
      >
        <hr />

        {/* Setting up breadcrumb title dynamically using route. */}
        <span>{pathname === "/" ? "HOME" : pageTitle}</span>
      </div>

      {/* Render Logo */}
      <Link to="/">
        <Logo onClick={logoClickHandler} />
      </Link>

      {/* Render Desktop Menu */}
      <DesktopMenu />

      {/* Render Mobile Menu */}
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
    </header>
  );
};

export default Header;
