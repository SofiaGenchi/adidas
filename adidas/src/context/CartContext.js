import { createContext } from 'react';
import { useState } from 'react';


export const CartContext = createContext({});


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = () => {}
  
    const cleanCart = () => {}
  
    const addToCart = () => {
        setCart([])
    }
  
    const removeToCart = (item, quantify) => {
        setCart([...cart, {...item, quantify}])
    }

    return (
        <CartContext.Provider 
        value={{
            cart, isInCart, cleanCart, addToCart,
            removeToCart, cantInCart: cart.length
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;