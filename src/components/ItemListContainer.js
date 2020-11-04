/*jshint esversion: 6 */
import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList.js"




function ItemListContainer({title}){

  const [arrayDeItems, setArrayDeItems] = useState([]);
  const [hidden, setHidden] = useState(true);


  useEffect(() => {
    
    falsoLlamadoAServer.then((result) => {
      setArrayDeItems(result)
      setHidden(false);
    }); 
  
  });
  

  const falsoLlamadoAServer = new Promise((res, rej) => {

    setTimeout(() => {

      const datosItem1 = {id: 1, title: "ItemListContainer", price: 100000, pictureUrl: "https://dummyimage.com/600x400/000/fff.jpg"};
      const datosItem2 = {id: 2, title: "ItemListContainer", price: 300000, pictureUrl: "https://dummyimage.com/600x400/000/fff.jpg"};
      const datosItem3 = {id: 3, title: "ItemListContainer", price: 500000, pictureUrl: "https://dummyimage.com/600x400/000/fff.jpg"};
      const elarray = [datosItem1, datosItem2, datosItem3];

      res(elarray);

    }, 3000);


  });





    return <>
    <div>
      <h1>{title}</h1>
      {hidden && <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div> }
      {!hidden && <ItemList items={arrayDeItems}/>}
      
    
    </div>  
    
    
    </>
}


export default ItemListContainer;
