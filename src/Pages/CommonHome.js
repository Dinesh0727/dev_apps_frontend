import React from "react";
import Navbar from "../Components/Navbar";
import DevApp from "../Components/DevApp";
import Footer from "../Components/Footer";
import { useAuth } from "../context/AuthContext";

export default function CommonHome() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      <DevApp />
      <div className="my-0"></div>
      <Footer />
    </div>
  );
}
