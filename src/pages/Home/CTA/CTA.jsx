import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div>
        <h3>Small team, big ideas.</h3>
        <Button to="/about">About Us</Button>
      </div>
    </section>
  );
};

export default CTA;
