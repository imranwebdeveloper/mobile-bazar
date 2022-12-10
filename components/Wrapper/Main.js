import React from "react";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";

const Main = ({ children }) => {
  return (
    <Header>
      <main className="container px-2 md:px-8  ">{children}</main>
    </Header>
  );
};

export default Main;
