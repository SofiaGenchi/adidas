import Item from "./Item";
import '../scss/_ItemList.scss'

const ItemList = ({listaProductos}) => {
    return (
        <div className="itemList">
            {listaProductos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList;