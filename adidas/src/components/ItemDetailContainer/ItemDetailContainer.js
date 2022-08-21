import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./_itemDetailContainer.scss"
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
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