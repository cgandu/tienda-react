import React, { useContext, useState, useEffect } from "react";
import Alerta from "./Alerta.js";
import CartTable from "./CartTable.js";
import { CartContext } from "./CartContext.js";
import CreateOrder from "./CreateOrder.js";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Fab from "@material-ui/core/Fab";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

const style={
  textAlign: "center",
  marginRight: "40%",
  marginLeft: "40%",
  marginTop: "10px",
  marginBottom: "20px"
}

const h1 = "¡Caramba! Parece que su carrito de compras esta vacío.";
const h2 = "Agregue productos a su carrito desde nuestro catalogo";
const to = "/";

function Cart() {
  const [hidden, setHidden] = useState(true);

  const { clearCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.length === 0) {
      setHidden(true);
    }
  }, [cartItems.length]);

  return (
    <>
      {cartItems.length !== 0 ? (
        <>
          <div className="row justify-content-center align-items-center">
            <CartTable onContinue={(a) => console.log(a)} />
          </div>
          <Fab title="Vaciar el carrito" onClick={() => clearCart()}>
            <DeleteSweepIcon />
          </Fab>
          <div className="justify-content-center align-items-center" style={style}>
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
          <Alerta h1={h1} h2={h2} to={to} />
        </div>
      )}

      {!hidden && <CreateOrder />}
    </>
  );
}

export default Cart;
