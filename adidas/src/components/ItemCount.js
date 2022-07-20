import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/_ItemCount.scss'

function ItemCount() {
const[number, setNumber] = useState("");
  const agregar = () => {
    setNumber(number + 1);
  }
  const eliminar = () => {
    setNumber(number - 1)
  }
  return (
    <div className='count'>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Producto Adidas</Card.Title>
                <Card.Text><p>{number}</p></Card.Text>
                <Button onClick={agregar} variant="primary">Agregar</Button>
                <Button onClick={eliminar} variant="primary">Eliminar</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default ItemCount;