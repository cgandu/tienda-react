import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import ItemDetail from "./ItemDetail.js";
import Spinner from "./Spinner.js";

function ItemDetailContainer() {
  const [hidden, setHidden] = useState(true);
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const it = itemCollection.doc(id);

    it.get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item id does not exist");
          return;
        }
        setHidden(false);
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        
      });
  }, []);

  const { title, volumen, ano, cepa, desc, price } = item;
  const arrayDetalles = [title, volumen, ano, cepa, desc, price];

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        {hidden && <Spinner estilo={{ position: "absolute", top: "50%" }} />}
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center"
          style={{ marginTop: "2rem" }}
        >
          <div className="col mb-4">
            {!hidden && <ItemDetail item={item} />}
          </div>
          {!hidden && (
            <div style={{ marginTop: "2rem", color: "grey" }}>
              <ul
                style={{ backgroundColor: "transparent" }}
                className="list-group list-group-flush"
              >
                {arrayDetalles.map((e, idx) => (
                  <li
                    key={idx}
                    style={{ backgroundColor: "transparent" }}
                    className="list-group-item"
                  >
                    {e === price ? `$${e}` : e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ItemDetailContainer;
