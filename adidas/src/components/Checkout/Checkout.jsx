import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Checkout.scss"

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

const finalizarCompra = (e) => {
    const db = getFirestore();
    e.preventDefault()

    if(Object.values(comprador).length !== 4){
        alert("Todos los campos son obligatorios")
    }else {
        if (comprador.email !== comprador.email2){
            alert("El email es diferente")
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
}

const navegar = useNavigate();
    return(
        <>
        {!orderId
        ?<div className="divFinalizar">
            <h2>Finalizar compra</h2>
            <form className="form" onSubmit={finalizarCompra}>
                <input type="text" placeholder="Nombre Completo" name="name" onChange={datosComprador}/>
                <input type="number" placeholder="Numero de telefono" name="telefono" onChange={datosComprador}/>
                <input id="email" type="email" placeholder="tuemail@email.com" name="email" onChange={datosComprador}/>
                <input id="email2" type="email" placeholder="tuemail@email.com" name="email2" onChange={datosComprador}/>
                <button type='submit'>Finalizar Compra</button>
            </form>
            <div className="divider"></div>
            <h5>Al finalizar se le enviara un email con los detalles de su compra y el pago de la misma.</h5>
            <p>Muchas gracias por confiar en nosotros!</p>
        </div>
        :<div className="compraFinalizada">
            <h2>Muchas Gracias por tu compra!</h2>
            <h3>Su orden es: <span>{orderId}</span></h3>
            <button onClick={() => navegar('*')}>Volver al inicio</button>
        </div>
        }
        </>
    );
}

export default Checkout;