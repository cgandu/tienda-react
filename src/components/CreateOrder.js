import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext.js";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase";
import OrderForm from "./OrderForm.js";

function CreateOrder() {
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      province: "",
      postalCode: ""
    }
  });

  const { cartItems, clearCart } = useContext(CartContext);

  let total = 0;
  cartItems.forEach((e) => {
    total += e.item.price * e.quantity;
  });

  const db = getFirestore();
  const batch = db.batch();
  const orders = db.collection("orders");

  const newOrder = {
    buyer: buyer,
    items: cartItems.map(({item: {id, title, price}, quantity}) => ({
      id: id,
      title: title,
      price: price,
      quantity: quantity
    })),
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: total
  };

  async function processOrder() {
    try {
      const doc = await orders.add(newOrder);
      alert("Order created with id: " + doc.id);
      alert("Redirigir a sitio de pago");
      clearCart();
      
      // actualiza stock de items
      const itemQueryByManyId = await db
        .collection("items")
        .where(
          firebase.firestore.FieldPath.documentId(),
          "in",
          cartItems.map(({item: {id}}) => id)
        )
        .get();

      itemQueryByManyId.docs.forEach((doc, idx) => {
        const itemComprado = cartItems.find(({item: {id}}) => id === doc.id);

        batch.update(doc.ref, {
          stock: doc.data().stock - itemComprado.quantity
        });
      });
      await batch.commit();
      
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    if (["line1", "line2", "city", "province", "postalCode"].includes(name)) {
      setBuyer((prevBuyer) => ({
        ...prevBuyer,
        address: { ...prevBuyer.address, [name]: value }
      }));
    } else {
      setBuyer((prevBuyer) => ({
        ...prevBuyer,
        [name]: value
      }));
    }
  }

  return (
    <>
      <OrderForm
        buyer={buyer}
        handleChange={handleChange}
        processOrder={processOrder}
      />
    </>
  );
}

export default CreateOrder;
