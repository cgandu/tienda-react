import React from "react";



function Item({ item }) {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl ...}


    return <>    
    <div className="card d-flex align-items-center" style={{alignItems: "center"}}>
      <img src={`${item.pictureUrl}`} style={{width: "150px", height: "150px", objectFit: "scale-down"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">$ {item.price} </p>
      </div>
    </div>
  
    </>




}

export default Item;
