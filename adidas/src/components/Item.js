import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../scss/Item.scss'



const Item = ({producto}) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`item/${producto.id}`}>
            <Card className="item" style={{ maxWidth: '18rem' }}>
                <Card.Img variant="top" src={producto.img} alt={producto.name} />
                <Card.Body className="cardBody">
                    <Card.Title>{producto.name}</Card.Title>
                    <h4>$ {producto.price}</h4>
                    <p>En Stock: {producto.stock}</p>
                    <Link to={`/item/${producto.id}`}>
                    <Button className="itemButton" variant="secondary">Detalles del producto</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item;