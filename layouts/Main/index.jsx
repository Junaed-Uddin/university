import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("./Navbar/index"), {
  loading: () => "Loading...",
});
const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {/*
       * DON'T ADD ANY MARGIN, MAX-WIDTH OR PADDING TO HERE
       * IF YOU WANT TO ADD MARGIN OR PADDING, ADD IT TO THE INDIVIDUAL SECTION
       * IF YOU CAN DON'T ADD ANY BLOCK MARGIN TO THE SECTIONS.
       */}

      {children}

      <Footer></Footer>
    </>
  );
};

export default MainLayout;
