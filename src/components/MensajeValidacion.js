import React, {useEffect, useState} from "react";
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function MensajeValidacion({e1, e2}){
    const [equalMails, setEqualMails] = useState(true);

    useEffect(() => {
        if (e1 === e2) {
            setEqualMails(true);
        }   else {
            setEqualMails(false);
        }

    }, [e1, e2])

    

    

    return <>

    {!equalMails && <ErrorIcon style={{color: "red"}} />}
    {!equalMails && " Las direcciones no coinciden "}
    {equalMails && <CheckCircleIcon style={{color: "green"}} />}
    {equalMails && " Las direcciones  coinciden "}
    

  
    
    </>



}

export default MensajeValidacion;