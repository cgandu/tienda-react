import React from "react";
import { Link } from "react-router-dom";

function Alerta({ h1, h2, to}) {
  return (
    <>



      <div
        className="alert alert-warning alert-dismissible align-middle fade show justify-content-center"
        role="alert"
        style={{
          position: "relative",
          marginTop: "10rem",
          zIndex: "1000",
          paddingRight: " 20px",
          paddingLeft: " 20px"
        }}
      >
        <strong>{h1}</strong> 
        
        <hr />
        {h2} haciendo click
        <Link to={{ pathname: to }} style={{ textDecoration: "none" }}>
          {" "}
          acá
        </Link>
        
      </div>
    </>
  );
}

export default Alerta;