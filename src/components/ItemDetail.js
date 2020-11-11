/*jshint esversion: 6 */
import React, { useState } from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";

function ItemDetail({ item }) {
  const [itemsAComprar, setItemsAComprar] = useState(1);

  return (
    <>
      <Item item={item} />
      <div className="card">
        <ItemCount inicial={1} stock={20} onChangeQ={setItemsAComprar} />

        <button
          onClick={() => console.log(itemsAComprar)}
          type="button"
          className="btn btn-sm btn-dark"
          style={{ margin: "10px" }}
        >
          Agregar al carrito ({itemsAComprar})
        </button>
      </div>
    </>
  );
}

export default ItemDetail;
