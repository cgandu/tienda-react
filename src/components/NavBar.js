import React from 'react';
import CartWidget from './CartWidget';
import StoreIcon from '@material-ui/icons/Store';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const NavBar = function(){
    return <nav class="navbar navbar-expand-lg navbar-light bg-light" >
<a class="navbar-brand" href="#"><StoreIcon style={{ fontSize: "3rem" }}/> Tienda Online</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Ofertas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Combos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Donde estamos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Liquidaciones</a>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Categoria 1</a>
          <a class="dropdown-item" href="#">Categoria 2</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Categoria 3</a>
        </div>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
      
           
    </form>
    <button type="button" class="btn btn-sm btn-outline-dark"><CartWidget /></button>
    <div><AccountCircleIcon fontSize="large" /></div>
    
    
    
  </div>



    </nav>
}

export default NavBar;
