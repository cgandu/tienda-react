import React, { useState } from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const [qAdded, setQAdded] = useState(1);
  const [hidden, setHidden] = useState(false);
  function onQAdded(q) {
    setQAdded(q);
    setHidden(true);
  }

  return (
    <>
      <Item item={item} />
      <div className="card">
        {!hidden && (
          <ItemCount
            inicial={1}
            stock={20}
            msg={"Agregar al carrito"}
            onAdd={onQAdded}
          />
        )}

        {hidden && (
          <>
            <Link to="/cart">
              <button
                className="btn btn-success btn-lg btn-block"
                onClick={() =>
                  console.log("Esto se loguea desde ItemDetail: ", qAdded)
                }
              >
                Terminar la compra
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default ItemDetail;
