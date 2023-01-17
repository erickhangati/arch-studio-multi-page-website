import React from "react";

import LeaderCard from "./LeaderCard";
import leadersDetails from "./leadersDetails";

import styles from "./Leaders.module.scss";

const Leaders = () => {
  return (
    <section className={styles.leaders}>
      <h3>The Leaders</h3>
      <div className={styles["leaders__cards"]}>
        {/* Looping over leader details to render in cards. */}
        {leadersDetails.map((leaderDetails, index) => (
          <LeaderCard
            key={index}
            name={leaderDetails.name}
            designation={leaderDetails.designation}
            image={leaderDetails.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Leaders;
