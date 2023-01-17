import React from "react";

import portfolioDetails from "./portfolioDetails";
import FeaturedCard from "../Home/Featured/FeaturedCard";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      {portfolioDetails.map((featuredItem, index) => (
        <FeaturedCard
          key={index}
          featuredItem={featuredItem}
          number={index + 1}
          className={styles["portfolio__card"]}
        />
      ))}
    </section>
  );
};

export default Portfolio;
