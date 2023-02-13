import React from "react";
 

const Layout = ({ children }) => {
  return (
    <>
    
      <div className="--pad">
        {children}
      </div>
    </>
  );
};

export default Layout;