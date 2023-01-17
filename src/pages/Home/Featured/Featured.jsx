import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/UI/Button/Button";
import FeaturedCard from "./FeaturedCard";
import cardDetails from "./cardDetails";

import styles from "./Featured.module.scss";

const Featured = () => {
  return (
    <section className={styles.featured}>
      {/* Render Featured Heading */}
      <div className={styles["featured__heading"]}>
        <h3>Featured</h3>
        <Link to="/portfolio">
          <Button>See All</Button>
        </Link>
      </div>

      {/* Render Featured Cards by looping cardDetails*/}
      <div className={styles["featured__cards"]}>
        {cardDetails.map((featuredItem, index) => (
          <FeaturedCard
            key={index}
            featuredItem={featuredItem}
            number={index + 1}
          />
        ))}
      </div>

      {/* Render button on mobile devices */}
      <Link to="/portfolio" className={styles["featured__mobile-button"]}>
        <Button>See All</Button>
      </Link>
    </section>
  );
};

export default Featured;
