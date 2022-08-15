import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../scss/cartWidget.scss';

const CartWidget = () => {
    
    const { cart } = useContext(CartContext);
    console.log('Cantidad de productos en el carrito:', cart.length, cart)

    return (
        <>
            <div className="cartWidget" style={{display: cart.length < 1 && "none"}}>
            <Link to={`/cart`}>
                <ion-icon name="bag-outline"></ion-icon>
            </Link>
                <span>{cart.length}</span>
            </div>
        </>
        
    );
}

export default CartWidget;