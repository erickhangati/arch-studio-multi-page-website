import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div>
        <h3>Small team, big ideas.</h3>
        <Link to="/about">
          <Button>About Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
