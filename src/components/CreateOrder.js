import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext.js";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase";

function CreateOrder() {
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState("");
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
    items: cartItems.map((e) => ({
      id: e.item.id,
      title: e.item.title,
      price: e.item.price,
      quantity: e.quantity,
    })),
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: total,
  };

  async function processOrder() {
    try {
      const doc = await orders.add(newOrder);
      console.log("order created with id: ", doc.id);

      alert("Order crated: " + doc.id);
      clearCart();
      // updates stock
      const itemQueryByManyId = await db
        .collection("items")
        .where(
          firebase.firestore.FieldPath.documentId(),
          "in",
          cartItems.map((e) => e.item.id)
        )
        .get();

      itemQueryByManyId.docs.forEach((doc, idx) => {
        const itemComprado = cartItems.find((e) => e.item.id === doc.id);

        batch.update(doc.ref, {
          stock: doc.data().stock - itemComprado.quantity,
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
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value,
    }));
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          margin: "5%",
          padding: "3%",
        }}
      >
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Name</label>
              <input
                value={buyer.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPhone">Phone</label>
              <input
                value={buyer.phone}
                onChange={handleChange}
                type="text"
                className="form-control"
                name="phone"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              value={buyer.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              name="email"
            />
          </div>

          <button
            type="button"
            onClick={() => processOrder()}
            className="btn btn-primary"
          >
            Continuar compra
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateOrder;
