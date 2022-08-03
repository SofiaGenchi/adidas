import React, { useEffect, useState } from "react"
import '../scss/_itemListContainer.scss'
import ItemList from "./ItemList";
import { data } from "../mock/FakeApi";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const {categoryId} = useParams();
    console.log(categoryId)

    const [loading, setLoading] = useState(true)
    const[listaProductos, setListaProductos] = useState([])
    const[mensaje, setMensaje] = useState(false)
    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carro`)
    }


    useEffect(() => {
        data
        .then((res) => {
            setListaProductos(res);
            console.log(res)
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <>
        <div className="divListContainer">
            {loading ? <h1>Adidas</h1> : <ItemList listaProductos={listaProductos}/>}
            {mensaje && <span>{mensaje}</span>}
        </div>
        </>
        
    )
}

export default ItemListContainer;