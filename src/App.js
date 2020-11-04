import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import { Domain } from '@material-ui/icons';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {
  return (
    
    <div className="App">

   
    <NavBar/>
    <ItemListContainer title=""/>
    <ItemDetailContainer />

    </div>
  );
}

export default App;
