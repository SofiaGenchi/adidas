import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";


const Item = ({producto}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.img} alt={producto.name} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <p>$ {producto.price}</p>
                <p>Stock disponible: {producto.stock}</p>
                <ItemCount initial={1} stock={producto.stock}/>
                {/* <Button variant="primary">Comprar</Button> */}
            </Card.Body>
        </Card>
    )
}


export default Item;