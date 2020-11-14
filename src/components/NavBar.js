import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import StoreIcon from "@material-ui/icons/Store";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const NavBar = function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="LOGOMERCADITOGDE.jpg"
            style={{
              maxHeight: "100px",
              borderRadius: "0%",
              position: "absolute",
              top: "0%"

            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="isologotipo-transparente.png"
            style={{
              maxHeight: "100px",
              borderRadius: "0%",
              position: "absolute",
              top: "0%"

            }}
          />
        </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto">
              <a className="nav-link" href="http://www.google.com.ar">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.google.com.ar">
                Estuches
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.google.com.ar">
                Catalogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.google.com.ar">
                Contactanos
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
          </form>
          <button type="button" className="btn btn-sm btn-light">
            <Link to="/cart">
              <CartWidget />
            </Link>
          </button>
          <div style={{ margin: "10px", color: "white" }}>
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
