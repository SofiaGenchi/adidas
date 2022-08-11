import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //add to cart
    const addToCart = (item, quantity) => {
        const addItem = { ...item, quantity: quantity };
        setCart([...cart, addItem]);
        //verifica si el item esta en el carrito
    };

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;