import React, { useContext, useState, useEffect } from "react";
import Alerta from "./Alerta.js";
import CartDetail from "./CartDetail.js";
import { CartContext } from "./CartContext.js";
import CreateOrder from "./CreateOrder.js";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";


const style={
  textAlign: "center",
  marginRight: "40%",
  marginLeft: "40%",
  marginTop: "10px",
  marginBottom: "20px"
}

const alertaVacio = {
  h1: "¡Caramba! Parece que su carrito de compras esta vacío.",
  h2: "Agregue productos a su carrito desde nuestro catalogo",
  to: "/"
}


function Cart() {
  const [hidden, setHidden] = useState(true);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.length === 0) {
      setHidden(true);
    }
  }, [cartItems.length]);

  return (
    <>
      {cartItems.length !== 0 ? (
        <>
          <CartDetail />

          <div
            className="justify-content-center align-items-center"
            style={style}
          >
            <a href="#form-buyer">
              <button
                onClick={() => setHidden(!hidden)}
                className="btn btn-success btn-sm btn-block"
              >
                Terminar la compra ¡Check-out!
                <ShoppingCartOutlinedIcon fontSize="default" />
              </button>
            </a>
          </div>
        </>
      ) : (
        <div className="row justify-content-center align-items-center">
          <Alerta info={alertaVacio} />
        </div>
      )}

      {!hidden && <CreateOrder />}
    </>
  );
}

export default Cart;
