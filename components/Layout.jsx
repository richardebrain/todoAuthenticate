import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-6 max-w-xl">{children}</div>
    </div>
  );
}

export default Layout;
