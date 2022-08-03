import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { productos } from "../mock/FakeApi";
import "../scss/_itemDetailContainer.scss"


const ItemDetailContainer = () => {
    const [loadig, setLoading] = useState(true);
    const [productDetail, setProductDetail] = useState({});
    const {id} = useParams();

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(product => product.id === parseInt(id)))
        },2000)
    })

    useEffect(() => {
        getItem
        .then((response) => setProductDetail(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <>
        <div className="itemDetailContainer">
            {loadig ? <h1>Adidas</h1> : <ItemDetail productDetail={productDetail}/>}
        </div>
        </>
    )
}

export default ItemDetailContainer;