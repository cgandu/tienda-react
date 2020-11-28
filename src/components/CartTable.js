import React, { useContext } from "react";
import { CartContext } from "./CartContext.js";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function CartTable() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  let total = 0;
  cartItems.forEach((e) => {
    total += e.item.price * e.quantity;
  });

  return (
    <>
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
              <td scope="row">{idx + 1}</td>
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
            <td></td>
            <td></td>
            <td></td>
            <td>{cartItems.length !== 0 ? "Total:" : ""}</td>
            <td>{cartItems.length !== 0 ? "$" + total : ""}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CartTable;
