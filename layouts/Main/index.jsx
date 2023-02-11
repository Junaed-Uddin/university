import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {/*
       * DON'T ADD ANY MARGIN, MAX-WIDTH OR PADDING TO HERE
       * IF YOU WANT TO ADD MARGIN OR PADDING, ADD IT TO THE INDIVIDUAL SECTION
       * IF YOU CAN DON'T ADD ANY BLOCK MARGIN TO THE SECTIONS.
       */}
      <main className="!max-w-[1440px]  flex flex-col gap-6">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
