import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
