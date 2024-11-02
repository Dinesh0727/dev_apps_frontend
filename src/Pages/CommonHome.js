import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import DevApp from "../Components/DevApp";
import Footer from "../Components/Footer";

export default function CommonHome({ isLogged }) {
  return (
    <div>
      <Navbar isLogged={isLogged}/>
      <DevApp />
      <div className="my-0"></div>
      <Footer />
    </div>
  );
}
