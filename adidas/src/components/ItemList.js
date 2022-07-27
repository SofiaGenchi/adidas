const ItemList = ({listaProductos}) => {
    return (
        <div>
            {listaProductos.map((producto)=> <p key={producto.id}>{producto.name}</p>)}
        </div>
    )
}

export default ItemList;