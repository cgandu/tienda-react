import React, { useState } from "react";

export const CartContext = React.createContext();

export default function CartProvider({ contenidoCarritoInicial, children }) {
  const [cartItems, setCartItems] = useState(contenidoCarritoInicial || []);

  function addItemToCart(item, quantity) {
    let posItem = cartItems.map((e) => e.item.id).indexOf(item.id);

    if (posItem === -1) {
      //item no presente en array
      setCartItems([...cartItems, { item: item, quantity }]);
    } else {
      const newCartArray = [...cartItems];
      newCartArray[posItem].quantity += quantity;
      setCartItems(newCartArray);
    }
  }

  function removeItemFromCart(itemId) {
    setCartItems(cartItems.filter((item) => item.item.id !== itemId));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
