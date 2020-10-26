import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';


function CartWidget(){

    return <>
    <Badge badgeContent={0} color="secondary" showZero anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
    <ShoppingCartOutlinedIcon fontSize="default"/>
    </Badge>
    </>
}

export default CartWidget;