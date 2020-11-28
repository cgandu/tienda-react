import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item.js";

function ItemList({ items }) {
  // Desarrolla la vista utilizando un array de items que recibe y un map

  return (
    <>
      <div className="card-deck" style={{marginRight: "0", marginLeft: "0"}}>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl- justify-content-center"
          style={{ marginLeft: "2rem", marginRight: "2rem" }}
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              style={{ textDecoration: "none", color: "black" }}
              to={{ pathname: `/item/${item.id}` }}
            >
              <Item item={item} key={idx} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemList;
