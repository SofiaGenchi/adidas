import { createContext } from 'react';
import { useState } from 'react';


export const CartContext = createContext({});


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const isInCart = () => {}
  
    const cleanCart = () => {
        setCart([]);
    }
  
    const addToCart = (item, quantity) => {
        console.log({item, quantity});
        //verifico si el carrito esta vacio
        if (cart.length === 0) {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            setCart([itemToAdd])
            return
        }

        //logica de duplicado y consistente
        //obtenemos el indice del elemento si estuvies duplicado
        const itemDuplicateIndex = cart.findIndex((itemInTheCart) => itemInTheCart.id === item.id)
        //si es mayor o igual a 0, el item esta duplicado en el carrito
        if (itemDuplicateIndex >= 0) {

            //creamos un objeto con la cantidad actualizada
            const itemToUpdate = {
                ...item,
                quantity: cart[itemDuplicateIndex].quantity + quantity
            }

            //creamos un borrador del carrito para poder actualziar sin dañar el estado de react
            const cartDraft = [...cart]

            //actualizamos el borrador con el item con canitdad actualziada
            cartDraft[itemDuplicateIndex] = itemToUpdate


            //actualizamos el carrito con el carrrito borrador actualziado
            setCart(cartDraft)

        } else {
            //el item no esta duplicado
            //creamos el item con la cantidad que user ingreso
            const itemToAdd = {
                ...item,
                quantity: quantity
            }

            //creamos un carrito borrador para agregar el item nuevo
            const cartDraft = [...cart, itemToAdd]

            //actualizamos el carrito con el carrito borrador
            setCart(cartDraft)

            console.log('no esta duplicado');
        }
    }
  
    const removeToCart = (item, quantity) => {}

    const valueToShare = {
        cart,
        isInCart,
        cleanCart,
        addToCart,
        removeToCart,
        cantInCart: cart.length
    }

    return (
        <CartContext.Provider value={valueToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;