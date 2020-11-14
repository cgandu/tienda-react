import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Cart from "./components/Cart.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";

const catalogo = generoArrayDeItemsConDatosRandom(15);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer catalogo={catalogo} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer catalogo={catalogo} />
          </Route>
          <Route exact path="/categories/:categoryid"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

function generoItemConDatosRandom(i) {
  const palabras = [
    "ANGELICA ZAPATA",
    "NIETO SENETINER",
    "LUIGI BOSCA",
    "FINCA LA LINDA",
    "CADUS",
    "MALBEC",
    "CABERNET SAUVIGNON",
    "CHARDONNAY",
    "SAUVIGNON BLANC",
    "MERLOT"
  ];
  const price = Math.round(10000 * Math.random());
  const title = `${palabras[Math.floor(10 * Math.random())]} ${
    palabras[Math.floor(10 * Math.random())]
  }`;
  const stock = Math.round(100 * Math.random());
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const id = i;
  const rating = Math.ceil(Math.random() * Math.floor(5));
  const fotonum = Math.floor(Math.random() * 7);
  const ano = Math.floor(Math.random() * (2012 - 2003) + 2003);
  return {
    title: title,
    price: price,
    pictureName: `thumb-botella-${fotonum}.jpg`,
    stock: stock,
    desc: desc,
    id: id,
    rating: rating,
    ano: ano
  };
}

function generoArrayDeItemsConDatosRandom(cantidadDeArticulos) {
  const arrayDeArticulosRandom = [];

  for (let i = 0; i < cantidadDeArticulos; i++) {
    arrayDeArticulosRandom.push(generoItemConDatosRandom(i));
  }

  return arrayDeArticulosRandom;
}
