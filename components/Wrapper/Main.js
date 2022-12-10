import React from "react";
import Header from "../Header/Header";

const Main = ({ children }) => {
  return (
    <Header>
      <main className="container px-2 md:px-8 my-bg-secondary ">
        {children}
      </main>
    </Header>
  );
};

export default Main;
