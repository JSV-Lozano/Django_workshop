import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

function Layaout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}

export { Layaout };
