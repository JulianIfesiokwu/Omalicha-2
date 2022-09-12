import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import StyledNavlist from "../Styled/NavList.styled";

const NavList = ({ menu }) => {
  return (
    <StyledNavlist className={menu ? "close" : "open"}>
      <NavLink
        to="/"
        className="link"
        style={({ isActive }) => {
          return { color: isActive ? "#bc4864" : "#212427" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className="link"
        style={({ isActive }) => {
          return { color: isActive ? "#bc4864" : "#212427" };
        }}
      >
        Products
      </NavLink>
      <NavLink
        to="/contact"
        className="link"
        style={({ isActive }) => {
          return { color: isActive ? "#bc4864" : "#212427" };
        }}
      >
        Contact
      </NavLink>
      <NavLink
        to="/checkout"
        className="link"
        style={({ isActive }) => {
          return { color: isActive ? "#bc4864" : "#212427" };
        }}
      >
        <GiShoppingBag size="30" className="icon" />
      </NavLink>
    </StyledNavlist>
  );
};

export default NavList;
