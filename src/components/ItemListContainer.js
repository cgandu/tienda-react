import { logDOM } from '@testing-library/react';
import React from 'react';
import ItemCount from "./ItemCount.js";

function ItemListContainer({title}){
    return <>
    <div style={{textAlign: "center"}}>
      <h1>{title}</h1>
      <ItemCount inicial={1} stock={20} onAdd={(q) => console.log(q) }/>

    </div>
    </>
}


export default ItemListContainer;