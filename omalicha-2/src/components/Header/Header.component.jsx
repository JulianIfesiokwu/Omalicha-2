import React, { useState } from "react";
import NavList from "../NavList/Navlist.component";
import { GrMenu, GrClose } from "react-icons/gr";

import StyledHeader from "../Styled/Header.styled";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  const [menu, openMenu] = useState(true);

  return (
    <StyledHeader>
      <div className="img-container">
        <img src={logo} alt="logo" />
      </div>
      {menu ? (
        <GrMenu
          size="35"
          className="menu-icon"
          onClick={() => openMenu(!menu)}
        />
      ) : (
        <GrClose
          size="35"
          className="menu-icon"
          onClick={() => openMenu(!menu)}
        />
      )}
      <NavList menu={menu} />
    </StyledHeader>
  );
};

export default Header;
