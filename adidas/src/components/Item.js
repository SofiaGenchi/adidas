import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({producto}) => {
    return (
        <Link to={`item/${producto.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.img} alt={producto.name} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <h4>$ {producto.price}</h4>
                    <p>Stock disponible: {producto.stock}</p>
                    <Link to={`/item/${producto.id}`}>
                    <Button variant="secondary">Detalles del producto</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item;