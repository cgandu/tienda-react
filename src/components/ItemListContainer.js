/*jshint esversion: 6 */
import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList.js"




function ItemListContainer({catalogo}){

  
const falsoLlamadoAServer = new Promise((res, rej) => {

  setTimeout(() => {

  res(catalogo);

  }, 3000);


});
  

  const [arrayDeItems, setArrayDeItems] = useState([]);
  const [hidden, setHidden] = useState(true);


  useEffect(() => {
    
    falsoLlamadoAServer.then((result) => {
      setArrayDeItems(result)
      setHidden(false);
    }); 
  
  });

    return <>
    <div>
      <br></br>
      {hidden && <div className="spinner-border text-primary" role="status" style={{position: "absolute", top: "50%"}}><span className="sr-only">Loading...</span></div> }
      {!hidden && <ItemList items={arrayDeItems}/>}
      
    
    </div>  
    
    
    </>
}


export default ItemListContainer;





  
