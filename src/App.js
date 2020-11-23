import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {getFirestore} from "./firebase";
import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Cart from "./components/Cart.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import CartProvider from "./components/CartContext.js";



function App() {




  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/categories/:categoryid">
            <ItemListContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

