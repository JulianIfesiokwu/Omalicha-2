import React from "react";
import StyledWelcome from "../Styled/Welcome.styled";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Welcome = () => {
  return (
    <StyledWelcome>
      <div className="column-one">
        <h2 className="title">
          Welcome to <span className="company">Omalicha</span>
        </h2>
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
        <h2 className="title">Available Hours</h2>
        <p className="info">
          Monday-Friday: <span className="details">9.00 - 5.00</span>
        </p>
        <p className="info">
          Saturday: <span className="details">10.00 - 3.00</span>
        </p>
        <p className="info">
          Sunday: <span className="details">Closed</span>
        </p>
        <p className="info">
          <span>
            <MdEmail size="16" color="#bc4864" />
          </span>
          blabal@gmail.com
        </p>
        <p className="info">
          <span>
            <FaPhone size="16" color="#bc4864" />
          </span>
          07026782345
        </p>
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
