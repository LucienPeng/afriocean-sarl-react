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
          <Link className="navbar-brand" to="/afriocean-sarl-react">
            <img id="logo" src={logo} alt="" className="d-lg-block d-none" />
          </Link>
          <div className="toggler">
            <img
              id="logo-toggler"
              className="d-lg-none"
              src={logo}
              alt=""
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <i
              className="bi bi-caret-down-fill d-lg-none text-white"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></i>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  onClick={bannerHandle}
                  className="nav-link active"
                  aria-current="page"
                  to="/afriocean-sarl-react"
                >
                  Acueil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={bannerHandle}
                  className="nav-link"
                  to="/afriocean-sarl-react/about"
                >
                  Entreprise
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={bannerHandle}
                  className="nav-link"
                  to="/afriocean-sarl-react/product"
                >
                  Produits
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={bannerHandle}
                  className="nav-link"
                  to="/afriocean-sarl-react/contact"
                >
                  Contacts
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Langues
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item disabled" to="#">
                      English
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item disabled" to="#">
                      中文
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;

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
</button>;
