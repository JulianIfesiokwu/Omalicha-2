import React from "react";
import StyledHeader from "../Styled/Header.styled";
import Nav from "../Nav/Nav.component";
import Logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
