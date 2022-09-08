import React from "react";
import Button from "../Button/Button.component";
import StyledServices from "../Styled/Services.styled";

const Services = () => {
  return (
    <StyledServices>
      <h2 className="title">Our Services</h2>
      <div className="all-services">
        <div className="hair">
          <h2 className="title">Hair</h2>
          <p>Brazilian</p>
          <p>African</p>
          <p>Indian</p>
          <p>Bone-straight</p>
          <Button title="view more" />
        </div>
        <div className="nails">
          <h2 className="title">Nails</h2>
          <p>Pedicure</p>
          <p>Manicure</p>
          <p>Full body</p>
          <p>Bla bla</p>
          <Button title="view more" />
        </div>
        <div className="make-up">
          <h2 className="title">Make-Up</h2>
          <p>Pencil</p>
          <p>Pancake</p>
          <p>Lipstick</p>
          <p>eye shadow</p>
          <Button title="view more" />
        </div>
      </div>
    </StyledServices>
  );
};

export default Services;
