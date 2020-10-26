import React, {useState} from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


function ItemCount({stock, inicial = 1, onAdd}){


const [cantidad, setCantidad] = useState(inicial);



function removeOne(){
    if (cantidad>inicial) {
        setCantidad(cantidad-1);
    }

}

function addOne(){
    if (cantidad < stock) {
        setCantidad(cantidad+1);
    }

}

return <>

<div>
<img style={{maxWidth: "12rem", alignSelf: "center"}} src="https://d26lpennugtm8s.cloudfront.net/stores/652/596/products/family-game-apevtech-retro-joysticks-114-juegos-envio-gratis_iz800651927xvzxxpz1xfz76517406-695296511-1-jpgxsz76517406xim1-ca18554681a567833415276908943456-1024-10241-c9671ec6e8d7bb335415732223729777-1024-1024.jpg" className="card-img-top" alt="..." />
</div>
 
    <div className="btn-group" style={{border: "solid"}}>
        <RemoveCircleIcon onClick={removeOne}/>
        <div style={{width: "12rem"}}>{cantidad}</div>
        <AddCircleIcon onClick={addOne} />
    </div>
   
    <div>

    <button onClick={() => onAdd(cantidad)} type="button" className="btn btn-outline-primary" style={{width: "15rem", marginTop: "5px"}}>Agregar al carrito</button>
    </div>    
    
    
</>

}


export default ItemCount ;