import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";

function App() {
  return (
    
    <div className="App">
    <NavBar/>
    <ItemListContainer title="Productos de Categoria 1"/>
      
    </div>
  );
}

export default App;
