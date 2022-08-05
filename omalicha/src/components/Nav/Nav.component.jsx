import React from "react";
import StyledNav from "../Styled/Nav.styled";
import { FaShoppingBag } from "react-icons/fa";

const Nav = () => {
  return (
    <StyledNav>
      <li>Home</li>
      <li>Products</li>
      <li>Contact</li>
      <li>
        <FaShoppingBag />
      </li>
    </StyledNav>
  );
};

export default Nav;
