import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ isAuthenticated }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Dev Apps
          </Link>
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
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to={isAuthenticated ? "/errorVault" : "/"}
                >
                  ErrorVault
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  DevNotes
                </Link>
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
              {!isAuthenticated ? (
                <Link
                  className="btn btn-black text-white"
                  to="/login"
                >
                  Login
                </Link>
              ) : (
                <button
                  className="btn btn-danger text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}