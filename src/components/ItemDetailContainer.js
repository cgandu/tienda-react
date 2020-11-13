import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import Spinner from "./Spinner.js";


function ItemDetailContainer({catalogo}){

    const [hidden, setHidden] = useState(true);
    const [item, setItem] = useState({});

    const {id} = useParams();

    const falsoLlamadoAServer = new Promise((res, rej) => {

        setTimeout(() => {
            
            res(catalogo);

        }, 1000);


    });

    useEffect(() => {
    
        falsoLlamadoAServer.then((result) => {
            setHidden(false)
            setItem(result[id]);
        }); 
      
      });

    return <>
    <div style={{marginTop: "5rem"}}>
      {hidden && <Spinner estilo={{position: "absolute", top: "50%"}}/>}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center" style={{marginTop: "2rem"}} >
    <div className="col mb-4">
      
      
       {!hidden && <ItemDetail item={item}/> 
  }

       </div>
 {  !hidden &&    <div style={{marginTop: "2rem", color: "grey"}}>

       
        
        <ul style={{backgroundColor: "transparent"}} className="list-group list-group-flush">
        <li style={{backgroundColor: "transparent"}} className="list-group-item">Angelica Zapata Malbec 750cc </li>
        <li style={{backgroundColor: "transparent"}} className="list-group-item">Año: 2008</li>
        <li style={{backgroundColor: "transparent"}} className="list-group-item">Presentacion: Caja x 6 unidades</li>
        <li style={{backgroundColor: "transparent"}} className="list-group-item">Stock: disponible</li>
        <li style={{backgroundColor: "transparent"}} className="list-group-item">Precio: $5400</li>
        </ul> 


       </div>}
       </div>
       </div>

    </>
}




export default ItemDetailContainer;