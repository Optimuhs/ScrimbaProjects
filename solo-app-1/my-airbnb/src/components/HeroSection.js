import React from "react";

function HeroSection() {
  return (
    <div className="section--hero">
      <img
        src="./images/ImageGroup.png"
        alt="Group of images"
        className="section--hero__images"
      />
      <div className="section--hero__content">
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities let by one-of-a-kind hosts--all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
