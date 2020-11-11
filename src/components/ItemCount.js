/*jshint esversion: 6 */
import React, { useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

function ItemCount({ stock, inicial = 1, onChangeQ }) {
  const [cantidad, setCantidad] = useState(inicial);
  useEffect(() => {
    onChangeQ(cantidad);
  });

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
    </>
  );
}

export default ItemCount;
