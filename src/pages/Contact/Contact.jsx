import React from "react";

import Hero from "../../components/UI/Hero/Hero";
import ContactDetails from "./ContactDetails/ContactDetails";
import ContactMaps from "./ContactMaps/ContactMaps";
import ContactForm from "./ContactForm/ContactForm";

import styles from "./Contact.module.scss";

// Hero Details.
const heading = "Contact";
const subheading = "Tell us about your project";
const text =
  "We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!";

const Contact = () => {
  return (
    <>
      {/* Render Hero Section */}
      <Hero
        heading={heading}
        subheading={subheading}
        text={text}
        className={styles.hero}
        heroImageClass={styles["hero__image"]}
        textClass={styles["hero__text"]}
        descriptionClass={styles["hero__description"]}
      />

      {/* Render Contact Details */}
      <ContactDetails />

      {/* Render Map */}
      <ContactMaps />

      {/* Render Contact Form */}
      <ContactForm />
    </>
  );
};

export default Contact;
