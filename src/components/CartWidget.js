import React, { useContext, useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import { CartContext } from "./CartContext.js";

function CartWidget() {
  const { cartItems } = useContext(CartContext);
  const [numItems, setNumItems] = useState();

  useEffect(() => {
    let qTotal = 0;

    cartItems.forEach((i) => {
      qTotal += i.quantity;
    });

    setNumItems(qTotal);
  }, [cartItems]);

  return (
    <>
      <Badge
        badgeContent={numItems}
        color="secondary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <ShoppingCartOutlinedIcon fontSize="default" />
      </Badge>
    </>
  );
}

export default CartWidget;
