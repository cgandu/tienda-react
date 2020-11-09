import React from "react";
import ItemCount from "./ItemCount.js"
import Item from "./Item.js"




function ItemDetail({item}){

return <>

    <Item item={item}/>
    <div className="card">
    <ItemCount inicial={1} stock={20} msg={"Agregar al carrito"} desc={item.desc} onAdd={(q) => console.log(q) }/>
    </div>  
</>

}

export default ItemDetail;