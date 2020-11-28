import React, { useContext, useState, useEffect } from "react";
import Alerta from "./Alerta.js";
import CartTable from "./CartTable.js";
import { CartContext } from "./CartContext.js";
import CreateOrder from "./CreateOrder.js";
import Fab from "@material-ui/core/Fab";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

function Cart() {
  const { clearCart, cartItems } = useContext(CartContext);


  return (
    <>
      <div className="row justify-content-center align-items-center">
        {cartItems.length !== 0 ? (
          ""
        ) : (
          <Alerta
            h1={"¡Caramba! Parece que su carrito de compras esta vacío."}
            h2={"Agregue productos a su carrito desde nuestro catalogo"}
            to={"/"}
          />
        )}

        <CartTable context={useContext(CartContext)} />
      </div>
      <Fab title="Vaciar el carrito" onClick={() => clearCart()}>
        <DeleteSweepIcon />
      </Fab>
      <br />
      <br />
      <br />
      <br />
      <br />
      <CreateOrder />
    </>
  );
}

export default Cart;
