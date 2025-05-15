import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../Components/Sidebar";
import CardContainer from "../Components/CardContainer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorVaultPage() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };


  return (
    <div>
      <header style={{ position: "sticky", top: 0, zIndex: 1}}>
        <div className="EVP_Navbar">
          <div className="EVP_Navbar_logo">
            <div className="toggle-btn" onClick={toggleSidebar}>
              <FaBars color="white" />
            </div>
            <a className="text-white errorVault_logo_link" href="#">
              ErrorVault
            </a>
          </div>
          <div>
          <center><Link to="/newErrorPage" target="_blank"><button type="button" className="btn btn-primary">Create Error File</button></Link></center>
          </div>
          <form className="EVP_Navbar_form">
            <Input
              placeholder="Search text"
              borderRadius={"5px"}
              marginRight={"1%"}
              width={"50%"}
            />
            <button
              className="btn btn-outline-light EVP_Navbar_searchButton"
              type="submit"
            >
              Search
            </button>
            <CgProfile size={30} color="blue" className="EVP_Navbar_profile" />
          </form>
        </div>
      </header>
      <div className="errorVault_page_body">
        <Sidebar collapsed={collapsed} />
        <CardContainer collapsed={collapsed}/>
      </div>
    </div>
  );
}
