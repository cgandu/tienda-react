/*jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.js";
import Spinner from "./Spinner.js";
import Carousel from "./Carousel.js";

function ItemListContainer({ catalogo }) {
  const falsoLlamadoAServer = new Promise((res, rej) => {
    setTimeout(() => {
      res(catalogo);
    }, 1000);
  });

  const [arrayDeItems, setArrayDeItems] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    falsoLlamadoAServer.then((result) => {
      setArrayDeItems(result);
      setHidden(false);
    });
  });

  return (
    <>
      <Carousel />

      {hidden && <Spinner estilo={{ position: "absolute", top: "60%", left: "48%", width: "3rem", height: "3rem" }} />}
      {!hidden && <ItemList items={arrayDeItems} />}
    </>
  );
}

export default ItemListContainer;
