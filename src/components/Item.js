import React from "react";



function Item({ item }) {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl 


    return <>    
    <div className="card">
      <img src={item.pictureUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">$ {item.price} Mini descripcion </p>
      </div>
    </div>
  
    </>




}

export default Item;
