import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const itemInCart = cart.find((prod) => prod.id === item.id)
        if(itemInCart){
            const updateCart = cart.map((prod) => {
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + item.quantity}
                }else {
                    return prod
                }
            })
            setCart(updateCart)
        }else {
            setCart([...cart, item])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id))

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart, emptyCart, removeItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;