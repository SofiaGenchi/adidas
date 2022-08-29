import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useCart } from '../Checkout/Checkout';
import "./Cart.scss"

const Cart = () => {

    const navegar = useNavigate();
    const {cart, emptyCart, cartTotal, removeItem, cartQuantity} = useCart();

    return(
        <div className='cart'>
            <div className='carritoVacio' style={{display: cart.length > 0 && 'none'}}>
                <h2>El carrito está vacío</h2>
                <p>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</p>
                <Link to={`/`}>
                <button>Empezar</button>
                </Link>
            </div>
            <div className='cartTotal' style={{ display: cart.length < 1 && 'none' }}>
                <div className='tuCarrito'>
                    <h2>TU CARRITO</h2>
                    <p>TOTAL ({cartQuantity()} producto) <span>${cartTotal()}</span></p>
                    <p>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</p>
                    <Button className='btnEliminar' onClick={emptyCart} variant="outline-danger">Eliminar Carrito</Button>
                    <div className='pago'>
                        <h5>¡COMPRÁ AHORA Y PAGÁ EN 6 CUOTAS!</h5>
                        <p>Podés pagar con tus tarjetas Visa, MasterCard o American Express, al hacerlo, podrás pagar hasta en 6 cuotas sin interés.</p>
                    </div>
                </div>
                <div className='cardBody'>
                    {cart.map((product, index) => {
                        return(
                            <>
                                <div className='cartProduct' key={index}>
                                    <img src={product.img}></img>
                                    <div>
                                    <h5>{product.name}</h5>
                                    <span>Cantidad: {product.quantity}</span>
                                    <p>(Precio por unidad ${product.price})</p>
                                    <p>SubTotal ${product.price * product.quantity}</p>
                                    </div>
                                    
                                    <a onClick={() => removeItem(product.id)}><ion-icon name="trash-outline"></ion-icon></a>
                                </div>
                            </>
                        );
                    })}
                    <button className='btnPagar' onClick={() => navegar('/checkout')}>Ir a pagar</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;