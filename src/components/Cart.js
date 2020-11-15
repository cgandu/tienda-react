import React, { useContext } from "react";
import { CartContext } from "./CartContext.js";
import InteractiveList from "./InteractiveList.js";

function Cart() {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  return (
    <>
      <h1 style={{ marginTop: "5rem" }}>CARRITOOOOOOOOOOOOOO</h1>
      <ul
        style={{ backgroundColor: "white" }}
        className="list-group list-group-flush"
      >
        {cartItems.map((e, idx) => (
          <li key={idx}>
            {e.item.title} / / / {e.quantity} / / /{" "}
            <button onClick={() => removeItemFromCart(e.item.id)}>x</button>
          </li>
        ))}
        <div style={{ textAlign: "center" }}>
          <button onClick={() => clearCart()}>VACIAR CARRITO</button>
        </div>
      </ul>
      <InteractiveList />
    </>
  );
}

export default Cart;
