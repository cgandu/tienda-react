import React from "react";


function Spinner({estilo}){

    return <>

<div className="spinner-border text-primary" role="status" style={estilo}>
<span className="sr-only">Loading...
</span>
</div> 

    </>


}

export default Spinner;