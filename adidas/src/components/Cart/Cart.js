import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext);
    let total = 0;

    for (let i = 0; i < cart.length; i++){
        total += cart[i].price;
    }



    const [show, setShow] = useState(true);
    return(
        <div className='cartSection'>
            <Container>
            <Row>
                <Col xs></Col>

                <Col xs={{ order: 12 }}>
                    {/* <Card border="warning" style={{ width: '18rem', display: cart.length > 0 && 'none' }}>
                        <Card.Header>ADIDAS</Card.Header>
                        <Card.Body>
                            <Card.Title>Tu carrito: <span>({cart.length})</span></Card.Title>
                            <Card.Text style={{display: cart.length > 0 && "none"}}>Todavia no has seleccionado ninguna prenda.</Card.Text>
                            <div className="cart-options" style={{display: cart.length > 0 && "none"}}>
                                <Link to={`/`} className="co-clear">
                                    <Button variant="outline-warning">Continuar comprando</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card> */}
                    <Alert show={show} variant="success" style={{display: cart.length > 0 && 'none'}}>
                                    <Alert.Heading>El carrito esta vacio!</Alert.Heading>
                                    <p>
                                    Todavia no has seleccionado ninguna prenda.
                                    </p>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Link to={`/`} className="co-clear">
                                        <Button onClick={() => setShow(false)} variant="outline-secondary">
                                    Continuar comprando
                                    </Button>
                                        </Link>
                                    
                                    </div>
                                    <Link to={`/`} className="co-clear">
                                        {!show && <Button onClick={() => setShow(true)}>Continuar comprando</Button>}
                                    </Link>
                                </Alert>

                                

                    <Card border="dark" style={{ width: '18rem', display: cart.length < 1 && 'none' }}>
                        <Card.Header>
                            <div style={{display: cart.length > 0 ? "inherit" : 'none'}}>
                            <Button onClick={() => clearCart()} variant="outline-danger">Eliminar Carrito</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                        {cart.map((product, index) => {
                            return(
                                <>
                                    <div className='cartProduct' key={index}>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Img variant="top" src={product.img}/>
                                        <Card.Text>${product.price}</Card.Text>
                                        <Button variant="outline-danger" onClick={()=> removeItem(product.id)}>Eliminar</Button>
                                    </div>
                                </>
                            );
                        })}
                        <Card.Text style={{display: cart.length < 1 && "none"}}>Total: ${total}</Card.Text>
                        <div className="cart-payment" style={{display: cart.length < 1 && "none"}}>
                            <Button variant="outline-secondary">Comprar</Button>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
        </div>
    );
}

export default Cart;