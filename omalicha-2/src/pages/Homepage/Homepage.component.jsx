import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Button from "../../components/Button/Button.component.jsx";
import Welcome from "../../components/Welcome/Welcome.component.jsx";
import Services from "../../components/Services/Services.component.jsx";
import carouselImages from "../../data.js";

import StyledHomepage from "../../components/Styled/Homepage.styled";

const Homepage = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselImages.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(carouselImages) || carouselImages.length === 0) {
    return null;
  }

  return (
    <StyledHomepage>
      <div className="carousel">
        <MdArrowBackIosNew size="35" onClick={prevSlide} className="back-btn" />
        <div className="img-container">
          {carouselImages.map((image, index) => {
            const { source, id, title } = image;
            return (
              <div
                key={id}
                className={index === current ? "slide show" : "slide hide"}
              >
                <img src={source} alt="landing" />
                <div className="shop">
                  <Button title={title} />
                </div>
              </div>
            );
          })}
        </div>
        <MdArrowForwardIos
          size="35"
          onClick={nextSlide}
          className="forward-btn"
        />
      </div>
      <Welcome />
      <Services />
    </StyledHomepage>
  );
};

export default Homepage;
