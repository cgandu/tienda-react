import React, { useContext, useState, useEffect } from "react";
import Alerta from "./Alerta.js";
import CartTable from "./CartTable.js";
import { CartContext } from "./CartContext.js";
import CreateOrder from "./CreateOrder.js";
import Fab from "@material-ui/core/Fab";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

function Cart() {
  const [hidden, setHidden] = useState(true);
  const { clearCart, cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.length !== 0 ? (
        <>
          <div className="row justify-content-center align-items-center">
            <CartTable />
          </div>
          <Fab title="Vaciar el carrito" onClick={() => clearCart()}>
            <DeleteSweepIcon />
          </Fab>
        </>
      ) : (
        <div className="row justify-content-center align-items-center">
          <Alerta
            h1={"¡Caramba! Parece que su carrito de compras esta vacío."}
            h2={"Agregue productos a su carrito desde nuestro catalogo"}
            to={"/"}
          />
        </div>
      )}

      {!hidden && <CreateOrder />}
    </>
  );
}

export default Cart;
