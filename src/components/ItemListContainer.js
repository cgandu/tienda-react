/*jshint esversion: 6 */
import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList.js"




function ItemListContainer({title}){

  const [arrayDeItems, setArrayDeItems] = useState([]);

  useEffect(() => {
    
    falsoLlamadoAServer.then((result) => setArrayDeItems(result));
    
  
  })
  

const falsoLlamadoAServer = new Promise((res, rej) => {
  
  setTimeout(() => {

    const datosItem1 = {id: 1, title: "titulo 1", price: 100000, pictureUrl: "https://tinyurl.com/y6rtw6pb"};
    const datosItem2 = {id: 2, title: "titulo 2", price: 300000, pictureUrl: "https://tinyurl.com/y6rtw6pb"};
    const datosItem3 = {id: 3, title: "titulo 3", price: 500000, pictureUrl: "https://tinyurl.com/y6rtw6pb"};
    const elarray = [datosItem1, datosItem2, datosItem3];
    
    res(elarray);

  }, 3000);

  
});





    return <>
    <div>
      <h1>{title}</h1>
      
      <ItemList items={arrayDeItems}/>
    
    </div>  
    
    
    </>
}


export default ItemListContainer;
