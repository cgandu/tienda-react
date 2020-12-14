/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CartWidget from "./CartWidget";

const NavBar = function () {


  const categoriasNavBar = [
    [{ pathname: `/categories/ofertas` }, "Ofertas"],
    [{ pathname: `/categories/estuches` }, "Estuches"],
    [{ pathname: `/` }, "Catalogo completo"]
  ];

 

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
              top: "0",
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
            {categoriasNavBar.map(([ruta, categoria], idx) => (
              <li key={idx} className="nav-item">
                <Link
                  to={ruta}
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                >
                  {categoria}
                </Link>
              </li>
            ))}
          </ul>

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
