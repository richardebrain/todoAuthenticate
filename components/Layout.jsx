import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div className="flex flex-col  justify-between items-center h-[100vh] dark:bg-slate-900">
      <Header />
      <div className="container mx-auto my-6 max-w-xl h-[80%] ">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
