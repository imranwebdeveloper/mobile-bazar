import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";

const Main = ({ children }) => {
  return (
    <Header>
      <main className="container mx-auto px-2  lg:px-8 ">{children}</main>
      <Footer />
    </Header>
  );
};

export default Main;
