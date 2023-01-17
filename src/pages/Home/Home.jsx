import React, { useState } from "react";

import { HeroSlider, Welcome, CTA, Featured } from "./index";

const Home = () => {
  // State to manage the active slider.
  const [activeSlider, setActiveSlider] = useState(0);

  const setActiveSliderHandler = (sliderNum) => {
    // Set active slider.
    setActiveSlider(() => sliderNum);
  };

  return (
    <>
      {/* Render Slider */}
      <HeroSlider
        activeSlider={activeSlider}
        setActiveSlider={setActiveSliderHandler}
      />

      {/* Render Welcome Section */}
      <Welcome />

      {/* Render CTA Section */}
      <CTA />

      {/* Render Featured Section */}
      <Featured />
    </>
  );
};

export default Home;
