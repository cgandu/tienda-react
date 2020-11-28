/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CartWidget from "./CartWidget";

const NavBar = function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="LOGOMERCADITOGDE.jpg"
            style={{
              maxHeight: "100px",
              borderRadius: "100%",
              position: "absolute",
              left: "0",
              top: "0"
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to={{ pathname: `/categories/ofertas` }} className="nav-link" style={{ textDecoration: "none" }}>
              
                Ofertas
            </Link>
            </li>
            <li className="nav-item">
            <Link to={{ pathname: `/categories/estuches` }} className="nav-link" style={{ textDecoration: "none" }}>
                Estuches
              </Link>
            </li>
            <li className="nav-item">
            <Link to={{ pathname: `/` }} className="nav-link" style={{ textDecoration: "none" }}>
                Catalogo
              </Link>
            </li>
            <li className="nav-item">
            <Link to={{ pathname: `/` }} className="nav-link" style={{ textDecoration: "none" }}>
                Contactanos
              </Link>
            </li>
          </ul>
          <form className="form" style={{margin: "0.5rem"}}>
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
