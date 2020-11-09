import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail.js";


function ItemDetailContainer({catalogo}){

    const [hidden, setHidden] = useState(true);
    const [item, setItem] = useState({});

    const {id} = useParams();

    const falsoLlamadoAServer = new Promise((res, rej) => {

        setTimeout(() => {
            
            res(catalogo);

        }, 3000);


    });

    useEffect(() => {
    
        falsoLlamadoAServer.then((result) => {
            setHidden(false)
            setItem(result);
        }); 
      
      });

    return <>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center" style={{marginTop: "2rem"}} >
    <div className="col mb-4">
      
       {hidden && <div className="spinner-border" style={{position: "absolute", top: "50%"}} role="status"><span className="sr-only">Loading...</span></div> } 
       {!hidden && <ItemDetail item={catalogo[id]}/>}

       </div>
       <div style={{paddingTop: "2rem"}}>

           {(catalogo[id].desc).substring(0, 600)}...

       </div>
       </div>

    </>
}




export default ItemDetailContainer;