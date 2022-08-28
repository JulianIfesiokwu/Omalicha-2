import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header.component";
import Footer from "./Footer/Footer.component";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
