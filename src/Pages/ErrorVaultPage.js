import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../Components/Sidebar";
import CardContainer from "../Components/CardContainer";

export default function ErrorVaultPage() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <header>
        <div className="EVP_Navbar">
          <div className="EVP_Navbar_logo">
            <div className="toggle-btn" onClick={toggleSidebar}>
              <FaBars color="white" />
            </div>
            <a className="text-white errorVault_logo_link" href="#">
              ErrorVault
            </a>
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
