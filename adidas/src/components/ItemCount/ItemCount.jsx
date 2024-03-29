import Button from 'react-bootstrap/Button';
import "./ItemCount.scss";
import {Link} from 'react-router-dom';


const ItemCount = ({stock, onAdd, setContador, contador}) => {
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const restar = () => {
    if (contador >= 0 ) {
      setContador(contador - 1)
    }
  }

  return (
    <>
      <div className='divItemCount'>
        <Button className='btn' variant="outline-dark" size="sm" disabled={contador === 0} onClick={restar}> - </Button>
        <span className='cantidadContador'>{contador}</span>
        <Button className='btn' variant="outline-dark" size="sm" disabled={contador === stock} onClick={sumar}> + </Button>
        <Link hidden={contador <= 0} to={`/cart`}>
          <Button className='btnComprar' variant="outline-success" size="sm" onClick={() => onAdd(contador)}>Agregar</Button>
        </Link>
      </div>
    </>
    
  )
}

export default ItemCount;