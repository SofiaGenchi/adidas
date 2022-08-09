import React, {useContext, useState} from "react";
import ItemCount from "./ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../scss/ItemDetail.scss'
import { CartContext } from "../context/CartContext";

const ItemDetail = ({productDetail}) => {

    const { addToCart } = useContext(CartContext);

    const [amountItem, setAmountItem] = useState(0);
    const onAdd = (amount) => {
        setAmountItem(amount);
        console.log('Add:', amount);
        addToCart(productDetail, amount)
    }
    
    const {id, name, description, price, img, stock} = productDetail[0];
    return (
        <>
            <Container className="itemDetail">
                <Row>
                    <Col>
                        <Card style={{ width: '25rem', margin: '10px auto' }}>
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
                    <div className="count">
                        <ItemCount stock={stock} onAdd={onAdd}/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemDetail;