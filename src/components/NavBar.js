import React from 'react';
import CartWidget from './CartWidget';
import StoreIcon from '@material-ui/icons/Store';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const NavBar = function(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light" >
<a className="navbar-brand" href="http://www.google.com.ar"><StoreIcon style={{ fontSize: "3rem" }}/> Tienda Online</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="http://www.google.com.ar">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://www.google.com.ar">Ofertas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://www.google.com.ar">Combos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://www.google.com.ar">Contacto</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://www.google.com.ar">Donde estamos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://www.google.com.ar">Liquidaciones</a>
      </li>
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="http://www.google.com.ar" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="http://www.google.com.ar">Categoria 1</a>
          <a className="dropdown-item" href="http://www.google.com.ar">Categoria 2</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="http://www.google.com.ar">Categoria 3</a>
        </div>
      </li>

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
      
           
    </form>
    <button type="button" className="btn btn-sm btn-outline-dark"><CartWidget /></button>
    <div style={{margin: "10px"}}><AccountCircleIcon fontSize="large" /></div>
    
    
    
  </div>



    </nav>
}

export default NavBar;
