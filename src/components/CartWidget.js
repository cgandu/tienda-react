import React, { useContext, useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import { CartContext } from "./CartContext.js";

function CartWidget() {
  const { cartItems } = useContext(CartContext);
  const [numItems, setNumItems] = useState();

  useEffect(() => {
    setNumItems(cartItems.length);
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
