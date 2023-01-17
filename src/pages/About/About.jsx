import React from "react";

import Hero from "../../components/UI/Hero/Hero";
import Heritage from "./Heritage/Heritage";
import Leaders from "./Leaders/Leaders";

import styles from "./About.module.scss";

// Hero section details.
const heading = "About";
const subheading = "Your team of professionals";
const text =
  "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.";

const About = () => {
  return (
    <>
      {/* Render Hero Section */}
      <Hero
        heading={heading}
        subheading={subheading}
        text={text}
        heroImageClass={styles["hero__image"]}
      />

      {/* Render Heritage Section*/}
      <Heritage />

      {/* Render Leaders Section*/}
      <Leaders />
    </>
  );
};

export default About;
