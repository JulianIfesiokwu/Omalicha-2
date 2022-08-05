import React from "react";
import Header from "../Header/Header.component";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.component";

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
