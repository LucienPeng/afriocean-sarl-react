import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo.png";

const NavComponent = (props) => {
  let { banner, setBanner } = props;
  const bannerHandle = (e) => {
    setBanner(e.target.innerHTML);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <div className="col col-2">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" onClick={bannerHandle}>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item" onClick={bannerHandle}>
                  <Link className="nav-link" to="/product">
                    Products
                  </Link>
                </li>
                <li className="nav-item" onClick={bannerHandle}>
                  <Link className="nav-link" to="/contact">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
