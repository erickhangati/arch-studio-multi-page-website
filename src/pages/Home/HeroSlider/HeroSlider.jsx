import React from "react";

import Button from "../../../components/UI/Button/Button";
import NumberButton from "../../../components/UI/NumberButton/NumberButton";
import sliderDetails from "../HeroSlider/sliderDetails";

import styles from "./HeroSlider.module.scss";

const HeroSlider = ({ activeSlider, setActiveSlider }) => {
  // Select active slider.
  const slider = sliderDetails[activeSlider];

  const buttonClickHandler = (sliderIndex) => {
    // Set active slider when button clicked.
    setActiveSlider(sliderIndex);
  };

  return (
    // Set background images dynamically from active slider.
    <div
      className={styles.sliders}
      // Setting background image dynamically from featuredItem.
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${slider.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Slider Heading */}
      <h2>{slider.heading}</h2>

      {/* Slider Description */}
      <p>{slider.description}</p>

      {/* Slider Button */}
      <Button to="/portfolio">See Our Portfolio</Button>

      {/* Slider Navigation Butons */}
      <div className={styles["sliders__buttons"]}>
        {sliderDetails.map((_, index) => (
          <NumberButton
            key={index}
            onClick={buttonClickHandler.bind(null, index)}
            className={activeSlider === index ? styles.active : ""}
          >{`0${index + 1}`}</NumberButton>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
