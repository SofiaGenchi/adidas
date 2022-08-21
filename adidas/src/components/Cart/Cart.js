import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useCart } from '../Checkout/Checkout';

const Cart = () => {

    const navegar = useNavigate();
    const {cart, emptyCart, cartTotal, removeItem} = useCart();
    const [show, setShow] = useState(true);

    return(
        <div className='cartSection'>
            <Container>
            <Row>
                <Col xs></Col>

                <Col xs={{ order: 12 }}>
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
                            <Button onClick={emptyCart} variant="outline-danger">Eliminar Carrito</Button>
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
                                        <Button variant="outline-danger" onClick={removeItem}>Eliminar</Button>
                                    </div>
                                </>
                            );
                        })}
                        <Card.Text style={{display: cart.length < 1 && "none"}}>Total a pagar: ${cartTotal()}</Card.Text>
                        <div className="cart-payment" style={{display: cart.length < 1 && "none"}}>
                            <Button onClick={() => navegar('/checkout')} variant="outline-secondary">Comprar</Button>
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