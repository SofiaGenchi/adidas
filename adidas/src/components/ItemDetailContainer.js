import { useEffect, useState } from "react";
import { data } from "../mock/FakeApi";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState()


    useEffect(() => {
        console.log('aca el componente ya esta en el')
        data()
        .then((producto)=> {
            setItem(producto)
        })
        .catch((error)=> console.log(error))
    }, [])



    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer;