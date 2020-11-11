import React from "react";
import {Link} from "react-router-dom";
import Item from "./Item.js";

function ItemList({ items }) {
    // Desarrolla la vista utilizando un array de items que recibe y un map    

    return <>
    
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl- justify-content-center" style={{margin: "2px"}}>            

            {items.map((item, idx) => <Link style={{textDecoration: "none", color: "black"}} to={{pathname: `/item/${item.id}`}}><div className="col mb-4"><Item item={item} key={idx} /></div></Link> )}

        </div>
   
    </>
}


export default ItemList;