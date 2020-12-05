import React, { useContext } from "react";
import { CartContext } from "./CartContext.js";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Fab from "@material-ui/core/Fab";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

function CartDetail() {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  let total = 0;
  cartItems.forEach(({ item: { price }, quantity }) => {
    total += price * quantity;
  });

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <table
          className="table table-hover justify-content-center"
          style={{ marginTop: "10rem", maxWidth: "80%", background: "white" }}
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
            {cartItems.map(({ item: { title, price, id }, quantity }, idx) => (
              <tr key={idx}>
                <td scope="row">{idx + 1}</td>
                <td>{title}</td>
                <td>${price}</td>
                <td>({quantity})</td>
                <td>${quantity * price}</td>
                <td className="card-n2">
                  <div onClick={() => removeItemFromCart(id)}>
                    <HighlightOffIcon
                      className="card-n2"
                      style={{ color: "black" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
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
    </>
  );
}

export default CartDetail;
