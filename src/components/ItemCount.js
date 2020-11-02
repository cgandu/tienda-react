/*jshint esversion: 6 */
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