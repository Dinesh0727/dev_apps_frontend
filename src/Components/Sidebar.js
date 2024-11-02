import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaVault } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoGridOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function Sidebar({ collapsed }) {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div>
        <a
          href="/"
          className="d-flex align-items-center m-3 mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi m-3" width="40" height="32">
            <FaVault size={30} />
          </svg>
          {!collapsed && <span className="fs-4 pb-1">Sidebar</span>}
        </a>

        <ul className="nav nav-pills flex-column mb-auto p-3">
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${activeItem === "Home" ? "active" : "text-white"}`}
              onClick={() => handleItemClick("Home")}
            >
              <svg className="bi me-2" width="25" height="25">
                <FaHome size={25} />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${activeItem === "Dashboard" ? "active" : "text-white"}`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <svg className="bi me-2" width="25" height="25">
                <AiOutlineDashboard size={25} />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${activeItem === "Products" ? "active" : "text-white"}`}
              onClick={() => handleItemClick("Products")}
            >
              <svg className="bi me-2" width="25" height="25">
                <IoGridOutline size={25} />
              </svg>
              <span>Products</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link ${activeItem === "Customers" ? "active" : "text-white"}`}
              onClick={() => handleItemClick("Customers")}
            >
              <svg className="bi me-2" width="25" height="25">
                <CgProfile size={25} />
              </svg>
              <span>Customers</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown p-3">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          
          {!collapsed && <strong className="fs-4">You</strong>}
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li className="dropdown-divider"></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
      </div>
      
    </div>
  );
}
