import React from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';



function Item({ item }, listado) {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl ...}


    return <>    
        <div className="card card-n" style={{margin: "2rem 2rem", maxHeight: "16rem"}}>
    <img src={"/"+item.pictureName} className="card-img-top" alt="..." style={{maxHeight: "8rem", objectFit: "scale-down"}} />
    <div className="card-body">
      <h6 className="card-title text-align-center">{item.title}</h6>
    </div>
    <div className="card-footer">
      <small className="text-muted"><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></small>
    </div>
  </div>
  
    </>




}

export default Item;

