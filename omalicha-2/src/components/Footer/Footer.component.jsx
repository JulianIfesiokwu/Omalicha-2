import React from "react";
import logo from "../../assets/logo.jpeg";
import StyledFooter from "../Styled/Footer.styled";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="col-one">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="social">
          <FaFacebookF size="20" />
          <FaTwitter size="20" />
          <FaWhatsapp size="20" />
        </div>
      </div>
      <div className="col-two">
        <p className="title">About Us</p>
        <p>Book online</p>
      </div>
      <div className="col-three">
        <p className="title">Services</p>
        <p className="hair">Hair</p>
        <p className="nails">Nails</p>
        <p className="make-up">Make up</p>
      </div>
      <div className="col-four">
        <p className="title">Contact</p>
        <p className="email">abc@gmail.com</p>
        <p className="phone">090 1234 13456</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
