import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isLogged }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Dev Apps
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  href="#errorVault"
                  to={isLogged ? "/errorVault" : "/"}
                >
                  ErrorVault
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#devNotes">
                  DevNotes
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-info mx-2" type="submit">
                Search
              </button>
              {
                !isLogged && <Link
                className="btn btn-black text-white"
                type="submit"
                to={"/login"}
              >
                Login
              </Link>
              }
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}