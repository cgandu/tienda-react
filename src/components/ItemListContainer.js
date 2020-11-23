/*jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import Spinner from "./Spinner.js";
import Carousel from "./Carousel.js";
import { getFirestore } from "../firebase/index.js";

function ItemListContainer() {

  const { categoryid } = useParams();
  const [arrayDeItems, setArrayDeItems] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(()=>{

    
    const db = getFirestore();
    let query = db.collection("items");
    

    if (categoryid === "ofertas") {
      
      query = query.where("oferta", "==", true);

    } else if (categoryid === "estuches") {

      query = query.where("estuche", "==", true);
      
    } else {
    
    }

    query.get().then((querySnapshot) => {

      if (querySnapshot.size === 0) {
        console.log("No results!")
      }

      const arrayCopia = [];
      querySnapshot.docs.map((doc) => arrayCopia.push({id: doc.id, ...doc.data()}));
      
      setArrayDeItems(arrayCopia);


    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      console.log("esto se ejecuta sin importar si hubo error o no");
      setHidden(false);
    })

  }, [categoryid]);



  return (
    <>
      <Carousel />

      {hidden && <Spinner estilo={{ position: "absolute", top: "50%" }} />}
      {!hidden && <ItemList items={arrayDeItems} />}
    </>
  );
}

export default ItemListContainer;

