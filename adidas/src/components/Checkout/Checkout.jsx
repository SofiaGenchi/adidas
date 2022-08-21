import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const useCart = () => useContext(CartContext)
const Checkout = () => {

    const [comprador, setComprador] = useState({});
    const [orderId, setOrderId] = useState('');

    const {cart, cartTotal, emptyCart} = useCart();


    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }
console.log(comprador);



const finalizarCompra = (e) => {
    const db = getFirestore();
    e.preventDefault()

    if(Object.values(comprador).length !== 3){
        alert('todos los campos son obligatorios')
    }else{
    const ventasCollection = collection(db, 'ventas')
    addDoc(ventasCollection, {
        comprador,
        items: cart,
        total: cartTotal(),
        date: serverTimestamp()
    })
    .then((res) => {
        setOrderId(res.id)
        emptyCart()
    })
    .catch((error) => console.log(error))
    }
}

const navegar = useNavigate();
    return(
        <>
        {!orderId
            ?<div>
            <h2>Checkout</h2>
            <form onSubmit={finalizarCompra}>
                <input type="text" placeholder="Nombre Completo" name="name" onChange={datosComprador}/>
                <input type="number" placeholder="Numero de telefono" name="teledono" onChange={datosComprador}/>
                <input type="text" placeholder="tuemail@email.com" name="email" onChange={datosComprador}/>
                <button type='submit'>Finalizar Compra</button>
            </form>
        </div>
        :<div>
            <h2>Muchas Gracias por tu compra!</h2>
            <h3>Su orden es: {orderId}</h3>
            <button onClick={() => navegar('*')}>Volver al inicio</button>
        </div>
        }
        </>
    );
}

export default Checkout;