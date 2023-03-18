import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";




export const CartWidget = () => {
    const numero = 5;
    return(
        <>
        <p><Link to={"/cart"}><ShoppingCartIcon fontSize="medium"/></Link>{numero}</p>
        </>
    )
}