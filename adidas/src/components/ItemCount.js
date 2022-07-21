import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/_ItemCount.scss'

function ItemCount() {
const[producto, setNumber] = useState(0);
  const agregar = () => {
    setNumber(producto + 1);
  }
  const eliminar = () => {
    setNumber(producto - 1)
  }
  return (
    <div className='count'>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Producto Adidas</Card.Title>
                <Card.Text><p>{producto}</p></Card.Text>
                <Button onClick={agregar} variant="primary">Agregar</Button>
                <Button onClick={eliminar} variant="primary">Eliminar</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default ItemCount;