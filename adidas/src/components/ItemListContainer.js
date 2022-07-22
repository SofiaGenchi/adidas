import React from "react"
import '../scss/_itemListContainer.scss'
import Item from "./Item"

const ItemListContainer = () => {

    return (
        <>
        <header>
            <h1>adidas</h1>
            <Item name='Camiseta' stock={6}/>
        </header>
            
        </>

    )
}

export default ItemListContainer;