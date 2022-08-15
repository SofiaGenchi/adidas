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

    const removeItem = itemId => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = itemId => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === itemId) {
                return true;
            };
        };
    };

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            clearCart,
            isInCart
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;