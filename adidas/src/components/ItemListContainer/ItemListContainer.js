import React, { useEffect, useState } from "react"
import './_itemListContainer.scss'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";



const ItemListContainer = () => {

    const {categoryId} = useParams();

    const [loading, setLoading] = useState(true)
    const [listaProductos, setListaProductos] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carro`)
    }


    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, 'items');


        if(categoryId){
            const q = query(itemsCollection, where('category', '==', categoryId));

            getDocs(q)
            .then((snapshot) => {
                const d = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
                setListaProductos(d);
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
        } else {
            getDocs(itemsCollection)
                .then((snapshot) => {
                    setListaProductos(
                        snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    );
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
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