import React from "react";

import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
     
    </>
  );
};

export default Layout;