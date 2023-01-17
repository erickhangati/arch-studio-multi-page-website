import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./index";
import styles from "./Layout.module.scss";

const Layout = () => {
  // Get path location.
  const location = useLocation();

  // Scroll to the top
  useEffect(() => {
    // Stop this behavior on contact page.
    if (location.pathname === "/contact") return;

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Layout Header */}
      <Header />

      {/* Layout Body */}
      <main className={styles.layout}>
        <Outlet />
      </main>

      {/* Layout Footer */}
      <Footer />
    </>
  );
};

export default Layout;
