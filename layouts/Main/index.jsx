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
      <main className="!max-w-[1440px]  flex flex-col gap-6 mx-auto min-h-[calc(100vh-300px)]">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
