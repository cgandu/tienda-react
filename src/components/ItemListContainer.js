/*jshint esversion: 6 */
import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList.js"
import Spinner from "./Spinner.js";




function ItemListContainer({catalogo}){

  
const falsoLlamadoAServer = new Promise((res, rej) => {

  setTimeout(() => {

  res(catalogo);

  }, 1000);


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
    <div style={{marginTop: "4rem"}}>
      <br></br>
      {hidden && <Spinner estilo={{position: "absolute", top: "50%"}}/>}
      {!hidden && <ItemList items={arrayDeItems}/>}
      
    
    </div>  
    
    
    </>
}


export default ItemListContainer;





  
