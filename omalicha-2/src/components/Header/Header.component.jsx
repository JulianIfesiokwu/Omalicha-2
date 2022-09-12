import React, { useState } from "react";
import NavList from "../NavList/Navlist.component";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import StyledHeader from "../Styled/Header.styled";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  const [menu, openMenu] = useState(true);

  return (
    <StyledHeader>
      <div className="logo">
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
        <p className="company-name">Omalicha</p>
      </div>
      {menu ? (
        <AiOutlineMenu
          size="35"
          color="#bc4864"
          className="menu-icon"
          onClick={() => openMenu(!menu)}
        />
      ) : (
        <AiOutlineClose
          size="35"
          color="#bc4864"
          className="menu-icon"
          onClick={() => openMenu(!menu)}
        />
      )}
      <NavList menu={menu} />
    </StyledHeader>
  );
};

export default Header;
