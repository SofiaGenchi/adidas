import React, { useEffect, useState } from "react"
import '../scss/_itemListContainer.scss'
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { data } from "../mock/FakeApi";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const[listaProductos, setListaProductos] = useState([])
    const[mensaje, setMensaje] = useState(false)
    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carro`)
    }


    useEffect(() => {
        data
        .then((res)=>setListaProductos(res))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <>
        <div>
            <h1>Adidas</h1>
            {mensaje && <span>{mensaje}</span>}
            {/* <ItemCount initial={1} stock={8} onAdd={onAdd}/> */}
        </div>
        <div>
            {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
        </div>
        </>
        
    )
}

export default ItemListContainer;