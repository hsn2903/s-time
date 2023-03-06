import React from "react";
import MainFooter from "./MainFooter";
import MainNavbar from "./MainNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};

export default Layout;
