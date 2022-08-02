import React from "react";
import ItemCount from "./ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({productDetail}) => {
    
    const {id, name, description, price, img, stock} = productDetail[0];
    console.log(name)
    return (
        <>
            <Container>
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
                        <ItemCount stock={stock}/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemDetail;