import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "../scss/ItemCount.scss";

const ItemCount = ({stock, onAdd}) => {
  const [contador, setContador] = useState(1)

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const restar = () => {
    if (contador > 1 ) {
      setContador(contador - 1)
    }
  }

  return (
    <>
      <div className='divItemCount'>
        <Button variant="outline-light" size="sm" disabled={contador === 1} onClick={restar}> - </Button>
        <span className='cantidadContador'> {contador} </span>
        <Button variant="outline-light" size="sm" disabled={contador === stock} onClick={sumar}> + </Button>
        <Button className='btnComprar' variant="outline-success" size="sm" onClick={()=>onAdd(contador)}>Comprar</Button>
      </div>
    </>
    
  )
}

export default ItemCount;