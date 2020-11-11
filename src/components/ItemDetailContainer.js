import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";

function ItemDetailContainer({ catalogo }) {
  const [hidden, setHidden] = useState(true);
  const [item, setItem] = useState({});

  const { id } = useParams();

  const falsoLlamadoAServer = new Promise((res, rej) => {
    setTimeout(() => {
      res(catalogo);
    }, 3000);
  });

  useEffect(() => {
    falsoLlamadoAServer.then((result) => {
      setHidden(false);
      setItem(result[id]);
    });
  });

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
        <div className="col mb-16">
          {" "}
          {hidden && (
            <div
              className="spinner-border float-center"
              style={{ position: "relative", top: "50%" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center"
        style={{ marginTop: "2rem" }}
      >
        <div className="col mb-4">{!hidden && <ItemDetail item={item} />}</div>
        <div style={{ paddingTop: "2rem" }}>{!hidden && item.desc}</div>
      </div>
    </>
  );
}

export default ItemDetailContainer;
