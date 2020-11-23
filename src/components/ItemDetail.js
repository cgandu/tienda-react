import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Spinner from "./Spinner.js";
import { CartContext } from "./CartContext.js";

function ItemDetail({ item }) {
  const [qAdded, setQAdded] = useState(1);
  const [hidden, setHidden] = useState(false);
  const [hidden2, setHidden2] = useState(true);
  const { addItemToCart } = useContext(CartContext);

  function onQAdded(q) {
    setQAdded(q);
    setHidden(true);

    setTimeout(() => {
      setHidden2(false);
      addItemToCart(item, q);
    }, 2000);
  }

  return (
    <>
      <Item item={item} />
      <div
        className="card"
        style={{ margin: "-1rem 2rem 2rem 2rem", maxHeight: "16rem" }}
      >
        {!hidden && <ItemCount stock={item.stock} onAdd={onQAdded} />}
      </div>

      {hidden && hidden2 && <Spinner />}

      {!hidden2 && (
        <>
          <div className="alert alert-success" role="alert">
            Agregaste {item.title} ({qAdded}) a tu carrito de compras
          </div>

          <Link to="/cart">
            <button className="btn btn-success btn-sm btn-block">
              Terminar la compra ¡Check-out!
              <ShoppingCartOutlinedIcon fontSize="default" />
            </button>
          </Link>

          <br />

          <Link to="/">
            <button className="btn btn-info btn-sm btn-block">
              Volver al catalogo
            </button>
          </Link>
        </>
      )}
    </>
  );
}

export default ItemDetail;
