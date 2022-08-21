import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
// import { productos } from "../mock/FakeApi";
import "../scss/_itemDetailContainer.scss"
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
    // const [loadig, setLoading] = useState(true);
    // const [productDetail, setProductDetail] = useState({});
    // const {id} = useParams();

    // const getItem = new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(productos.filter(product => product.id === parseInt(id)))
    //     },2000)
    // })

    // useEffect(() => {
    //     getItem
    //     .then((response) => setProductDetail(response))
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoading(false))
    // }, [id])


    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();

        const coleccionProductos = collection(db, 'items')
        const referenciaDoc = doc(coleccionProductos, id)
        getDoc(referenciaDoc)
        .then((result) => {
            setProductDetail({
                id: result.id,
                ...result.data()
            })
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [id])
    return (
        <>
        <div className="itemDetailContainer">
            {loading ? <h1>Adidas</h1> : <ItemDetail productDetail={productDetail}/>}
        </div>
        </>
    )
}

export default ItemDetailContainer;