import React from "react";
import Item from "./Item.js";

function ItemList({ items }) {
    // Desarrolla la vista utilizando un array de items y un map  {setTimeout(<Item />, 5000)}





    

    return <>
    {
        items.map((item, idx) => <Item item={item} key={idx}/> )
        
    }

    

  

    </>








}


export default ItemList;