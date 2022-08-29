import Item from "../Items/Item";
import './_ItemList.scss'

const ItemList = ({listaProductos}) => {
    return (
        <div className="itemList">
            {listaProductos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList;