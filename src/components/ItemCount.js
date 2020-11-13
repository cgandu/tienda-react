/*jshint esversion: 6 */
import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

function ItemCount({ stock, inicial = 1, msg = "Agregar al carrito", onAdd }) {
  const [cantidad, setCantidad] = useState(inicial);

  function removeOne() {
    if (cantidad > inicial) {
      setCantidad(cantidad - 1);
    }
  }

  function addOne() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  return (
    <>
      <div
        className="btn-group"
        style={{ width: "10rem", alignSelf: "center" }}
      >
        <RemoveCircleIcon onClick={removeOne} />
        <div style={{ width: "10rem", backgroundColor: "#F8F8FF" }}>
          {cantidad}
        </div>
        <AddCircleIcon onClick={addOne} />
      </div>

      <div>
        <button
          onClick={() => onAdd(cantidad)}
          type="button"
          className="btn btn-sm btn-info"
          style={{ width: "10rem", marginTop: "5px", marginBottom: "5px" }}
        >
          {msg}
        </button>
      </div>
    </>
  );
}

export default ItemCount;
