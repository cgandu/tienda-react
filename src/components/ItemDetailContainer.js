import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail.js";


function ItemDetailContainer(){

    const [hidden, setHidden] = useState(true);
    const [item, setItem] = useState({});

    const falsoLlamadoAServer = new Promise((res, rej) => {

        setTimeout(() => {
            const item = {id: 1654, title: "ItemDetailContainer", price: 855.35, pictureUrl: "https://dummyimage.com/600x400/000/fff.jpg"};
            res(item);

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
       {hidden && <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> } 
       {!hidden && <ItemDetail item={item}/>}

       <p>Actualmente esta ItemListContainer e ItemDetailContainer todo junto en la misma vista ya que no me quiero adelantar con los routers hasta q precisen como lo quieren.</p>
       </div>
       </div>

    </>
}




export default ItemDetailContainer;