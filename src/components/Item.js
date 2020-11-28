import React from "react";

import StarRating from "./StarRating.js";

function Item({ item }) {
  // Desarrolla la vista de un ítem donde item es de tipo
  // { id, title, price, pictureUrl ...}

  return (
    <>
      <div
        className="card card-n"
        style={{ margin: "2rem 2rem", maxHeight: "16rem" }}
      >
      <div style={{backgroundColor: "#8B0000", color: "white", position: "absolute", zIndex: "1000", top: "00%", width: "100%", display: item.oferta ? "initial" : "none"}}>LIQUIDACION</div>
        <img
          src={"/" + item.pictureName}
          className="card-img-top"
          alt="..."
          style={{
            maxHeight: "8rem",
            objectFit: "scale-down"
          }}
        />
        <div className="card-body">
          <h6 className="card-title text-align-center">{item.title}</h6>
          <h6 className="card-title text-align-center">{item.cepa}</h6>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <StarRating rating={item.rating} /> <sup>({item.rating})</sup>
          </small>
        </div>
      </div>
    </>
  );
}

export default Item;
