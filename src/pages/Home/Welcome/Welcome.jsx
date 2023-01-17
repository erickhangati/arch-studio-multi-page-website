import React from "react";

import welcomeImage from "../../../assets/images/image-welcome.jpg";

import styles from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <h1>Welcome</h1>
      <div className={styles["welcome__description"]}>
        <div className={styles["welcome__text"]}>
          <h3>Welcome to Arch Studio</h3>
          <div className={styles["welcome__text-paragraphs"]}>
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
        <img src={welcomeImage} alt="welcome image" />
      </div>
    </section>
  );
};

export default Welcome;
