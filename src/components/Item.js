import React from "react";
import ItemCount from "./ItemCount.js";


function Item({ item }) {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl 


    return <>
    

<div>
<h3>titulo de item: {item.title}</h3>
<h5>precio de item: $ {item.price}</h5>
<h5>id de item: {item.id}</h5>
<img style={{maxWidth: "12rem", alignSelf: "center"}} src={item.pictureUrl} className="card-img-top" alt="..." />

</div>
<ItemCount inicial={1} stock={20} onAdd={(q) => console.log(q) }/>
<br></br>

    </>




}

export default Item;