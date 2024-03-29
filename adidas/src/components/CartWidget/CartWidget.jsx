import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartWidget.scss";

const CartWidget = () => {
    
    const { cart, cartQuantity } = useContext(CartContext);

    return (
        <>
            <div className="cartWidget">
                <Link to={`/cart`}>
                    <ion-icon name="bag-outline"></ion-icon>
                </Link>
                <span style={{display: cart.length < 1 && "none"}}>{cartQuantity()}</span>
            </div>
        </>
        
    );
}

export default CartWidget;