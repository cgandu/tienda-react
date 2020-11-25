import React, { useContext, useState, useEffect } from "react";
import Alerta from "./Alerta.js";
import { CartContext } from "./CartContext.js";
import CreateOrder from "./CreateOrder.js";
import Fab from "@material-ui/core/Fab";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

function Cart() {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  let total = 0;
  cartItems.forEach((e) => {
    total += e.item.price * e.quantity;
  });

  return (
    <>
      <div
        className="row justify-content-center"
        style={{ alignItems: "center" }}
      >
        {cartItems.length !== 0 ? (
          ""
        ) : (
          <Alerta
            infoPrimary={
              "¡Caramba! Parece que su carrito de compras esta vacío."
            }
            infoSecondary={
              "Agregue productos a su carrito desde nuestro catalogo"
            }
            destino={"/"}
          />
        )}
        <table
          className="table table-hover justify-content-center"
          style={{ marginTop: "10rem", maxWidth: "90%", background: "white" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Articulo</th>
              <th scope="col">Precio</th>
              <th scope="col">Unidades</th>
              <th scope="col">Importe</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((e, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{e.item.title}</td>
                <td>${e.item.price}</td>
                <td>({e.quantity})</td>
                <td>${e.quantity * e.item.price}</td>
                <td className="card-n2">
                  <div onClick={() => removeItemFromCart(e.item.id)}>
                    <HighlightOffIcon
                      className="card-n2"
                      style={{ color: "black" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td>{cartItems.length !== 0 ? "Total:" : ""}</td>
              <td>{cartItems.length !== 0 ? "$" + total : ""}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
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
