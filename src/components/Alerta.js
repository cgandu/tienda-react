import React from "react";
import { Link } from "react-router-dom";

function Alerta({ infoPrimary, infoSecondary, destino}) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show justify-content-center"
        role="alert"
        style={{
          position: "absolute",
          top: "50%",
          zIndex: "1000"
        }}
      >
        <strong>{infoPrimary}</strong> <hr />
        {infoSecondary} haciendo click
        <Link to={{ pathname: destino }} style={{ textDecoration: "none" }}>
          {" "}
          acá
        </Link>
      </div>
    </>
  );
}

export default Alerta;