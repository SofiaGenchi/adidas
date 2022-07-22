import { useState } from 'react';
import '../scss/_ItemCount.scss'
import Item from './Item';


const ItemCount = ({stock, initial, onAdd}) => {
  const[count, setCount] = useState(initial || 0);

  const agregar = () => setCount(count +1)
  const eliminar = () => setCount(count - 1)

  onAdd = (count) => {
    console.log('Tenes ' + count + ' camisetas agregadas!')
  }

  return (
    <>
      <div className='contador'>
        <div>
          <h2>Contador</h2>
        </div>
        <div>
          <button onClick={agregar} disabled={count >= stock}> + </button>
          <button onClick={eliminar} disabled={count <= 0}> - </button>
          <br></br>
          <p>{count}</p>
          <button onClick={() => onAdd(count)}>Agregar</button>
        </div>
      </div>
    </>
  )
}


export default ItemCount;