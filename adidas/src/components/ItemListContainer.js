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
            const productList = res;
            const categoyItems = [];
            for(let i = 0; i < productList.length; i++){
                if (productList[i].category === categoryId) {
                    categoyItems.push(productList[i]);
                }
            }
            setListaProductos(categoyItems.length >= 1 ? categoyItems : productList);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [categoryId])

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