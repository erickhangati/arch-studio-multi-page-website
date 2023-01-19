import React from "react";

import styles from "./Hero.module.scss";

const Hero = (props) => {
  // Local component classes plus props classes to modify.
  const classes = `${styles.hero}${
    props.className ? ` ${props.className}` : ""
  }`;

  const descriptionClasses = `${styles["hero__description"]}${
    props.descriptionClass ? ` ${props.descriptionClass}` : ""
  }`;

  const textClasses = `${styles["hero__text"]}${
    props.textClass ? ` ${props.textClass}` : ""
  }`;

  const heroImageClasses = `${styles["hero__image"]}${
    props.heroImageClass ? ` ${props.heroImageClass}` : ""
  }`;

  return (
    <section className={classes}>
      <div className={heroImageClasses}></div>
      <div className={descriptionClasses}>
        <h1>{props.heading}</h1>
        <hr />
        <div className={textClasses}>
          <h3>{props.subheading}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
