import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    
    const { cart } = useContext(CartContext);
    console.log('Cantidad de productos en el carrito:', cart.length, cart)

    return (
        <>
            <ion-icon name="bag-outline"></ion-icon>
            <span>{cart.length}</span>
        </>
        
    );
}

export default CartWidget;