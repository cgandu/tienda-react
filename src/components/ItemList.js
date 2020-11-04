import React from "react";
import Item from "./Item.js";

function ItemList({ items }) {
    // Desarrolla la vista utilizando un array de items y un map    

    return <>
    
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center" >            

            {items.map((item, idx) => <div className="col mb-4"><Item item={item} key={idx}/></div> )}

        </div>
   
    </>
}


export default ItemList;