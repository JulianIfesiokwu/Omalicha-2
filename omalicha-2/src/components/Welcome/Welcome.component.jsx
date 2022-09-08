import React from "react";
import StyledWelcome from "../Styled/Welcome.styled";

const Welcome = () => {
  return (
    <StyledWelcome>
      <div className="column-one">
        <h2 className="title">Welcome to Omalicha</h2>
        <p className="about">
          Skilled and up to date with the latest hair styles, hair cuts, and
          color trends, our small team of hair professionals are ready to help
          make you feel and look great.
        </p>
      </div>
      <div className="column-two">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/880474/pexels-photo-880474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="woman with hair"
          />
        </div>
      </div>
      <div className="column-three">
        <h2 className="title">Opening Hours</h2>
        <p>
          Monday-Friday: <span>9.00 - 5.00</span>
        </p>
        <p>
          Saturday: <span>10.00 - 3.00</span>
        </p>
        <p>
          Sunday: <span>Closed</span>
        </p>
        <p className="email">blabal@gmail.com</p>
        <p className="phone">07026782345</p>
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
