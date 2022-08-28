import React from "react";
import { GiShoppingBag } from "react-icons/gi";

import StyledNavlist from "../Styled/NavList.styled";

const NavList = ({ menu }) => {
  return (
    <StyledNavlist className={menu ? "close" : "open"}>
      <li>Home</li>
      <li>Products</li>
      <li>Contact</li>
      <li>
        <GiShoppingBag size="30" className="icon" />
      </li>
    </StyledNavlist>
  );
};

export default NavList;
