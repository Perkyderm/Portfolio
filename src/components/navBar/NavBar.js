import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark sticky-top"
      style={{ backgroundColor: "#2C1C47", marginBottom: "50px" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ fontWeight: "bolder" }}>
          <img src={Logo} alt="logo" />
          Nick Goedecke
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          style={{ float: "right" }}
        >
          <ul className="navbar-nav mr-auto hover">
            <li>
              <Link className="nav-link" to="/home">
                About Me
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
