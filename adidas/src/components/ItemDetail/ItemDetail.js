import React, {useContext, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './ItemDetail.scss'
import { useCart } from "../Checkout/Checkout";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({productDetail}) => {

    const [compra, setCompra] = useState(false);
    const [contador, setContador] = useState(1);
    const {name, id, description, stock, img, price} = productDetail;
    const {addToCart} = useCart();
    const navegar = useNavigate();

    const onAdd = () => {
        let itemAComprar = {
            id,
            name,
            img,
            stock,
            price,
            quantity: contador
        }
        setCompra(true)
        addToCart(itemAComprar)
    }
    return (
        <>
            <Container className="itemDetail">
                <Row className="itemCard">
                    <Col className="img">
                        <Card >
                            <Card.Img variant="top" src={img} />
                        </Card>
                    </Col>
                    <Col>
                    <div style={{margin: '10px auto'}}>
                        <h2>{name}</h2>
                        <h3>${price}</h3>
                        <p>{description}</p>
                        <p>En Stock: {stock}</p>
                    </div>
                    { !compra ? <ItemCount stock={stock} onAdd={onAdd} contador={contador} setContador={setContador} />
                    :<div>
                        <button  className='btn btn-success'onClick={()=> navegar('/')}>Seguir Comprando</button>
                        <button className='btn btn-secondary'onClick={()=> navegar('/cart')}>Ir al Carrito</button>
                    </div>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemDetail;