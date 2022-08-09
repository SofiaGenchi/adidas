import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const valueToShare = useContext(CartContext)
    console.log({valueToShare})
    return (
        <>
            <ion-icon name="bag-outline"></ion-icon>
            <span>{valueToShare.cantInCart}</span>
        </>
        
    );
}

export default CartWidget;