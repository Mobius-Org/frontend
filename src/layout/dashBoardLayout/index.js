import React from "react";
import Nav from "../../component/Navbar";
import SideNav from "../../pages/dashboard";

const DashBoardLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <SideNav />
      {children}
    </>
  );
};

export { DashBoardLayout };
