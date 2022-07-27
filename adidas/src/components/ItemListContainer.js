import React, { useEffect, useState } from "react"
import '../scss/_itemListContainer.scss'
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const[listaProductos, setListaProductos] = useState([])
    const[mensaje, setMensaje] = useState(false)
    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carro`)
    }


    const productos = [
        {   id: '01',
            name: 'CAMISETA TITULAR BOCA JUNIORS 22/23',
            description: 'Inspirada en un modelo icónico. . Esta camiseta titular de Boca Juniors adidas irradia la energía de principios de los 90 con su cuello distintivo y la franja cosida en el pecho. En contraste con sus detalles retro, los modernos paneles de mesh y la tecnología de absorción AEROREADY se combinan para mantener cómodos a los hinchas del club. El escudo tejido es el toque final que completa este estilo de fútbol.',
            price: 14.999,
            img: 'https://api.lorem.space/image/shoes?w=150&h=150',
            stock: 8
        },
        {
            id: '02',
            name: 'CAMISETA TITULAR AJAX AMSTERDAM 22/23',
            description: 'Un uniforme clásico para un club de fútbol con clase. Manteniéndose fiel al rico legado del Ajax de Amsterdam, esta camiseta titular adidas conserva un look atemporal. Una segunda mirada revela detalles de finas rayas y hebras de oro que celebran una historia de éxito resplandeciente. Diseñada para jugadores e hinchas, esta camiseta brinda comodidad en todo momento gracias a sus paneles de malla y tecnología de absorción AEROREADY.',
            price: 14.999,
            img: 'https://api.lorem.space/image/shoes?w=150&h=150',
            stock: 4
        },
        {
            id: '03',
            name: 'CAMISETA UNIFORME DE TITULAR JUVENTUS 22/23',
            description: 'Durante su historia repleta de trofeos, las estrellas se han convertido en una parte tan importante de la identidad de la Juventus como las franjas. Esta camiseta de fútbol de adidas une ambas cosas, formando las icónicas rayas negras del club a partir de los pequeños símbolos en forma de estrella. Confeccionada especialmente para hinchas del club, combina comodidad y orgullo con tecnología de absorción AEROREADY y un escudo bordado.',
            price: 14.999,
            img: 'https://api.lorem.space/image/shoes?w=150&h=150',
            stock: 24
        },
        {
            id: '04',
            name: 'CAMISETA TITULAR MANCHESTER UNITED 21/22',
            description: 'Juventud. Coraje. Éxito. Los tres pilares del lema del Manchester United le han traído al club más de un siglo de triunfos. Con su diseño sencillo en rojo y cuello redondo acanalado blanco, esta camiseta de fútbol de titular adidas se inspira en el uniforme icónico que los llevó a algunos de sus momentos más memorables. Diseñada para hinchas, esta camiseta brinda comodidad mientras ves a una nueva generación de jugadores perseguir la gloria en la cancha gracias a su tejido suave con tecnología de absorción AEROREADY. El escudo tejido en el pecho y el detalle del diablo en la parte trasera del cuello ponen de manifiesto tu lealtad al fútbol.',
            price: 14.999,
            img: 'https://api.lorem.space/image/shoes?w=150&h=150',
            stock: 10
        }
    ]

    const data = new Promise((resolve, reject) => {

        let condition = true
        setTimeout(() => {
            if(condition) {
                resolve(productos)
            }else{
                reject('salio mal no hay sushi')
            }

        },3000)

    })

    console.log(data)

    useEffect(() => {
        data
        .then((res)=>setListaProductos(res))
        .catch((error)=>console.log(error))
    }, [])

    return (
        <>
        <div>
            <h1>Adidas</h1>
            {mensaje && <span>{mensaje}</span>}
            <ItemCount initial={1} stock={8} onAdd={onAdd}/>
        </div>
        <div>
            <ItemList listaProductos={listaProductos}/>
        </div>
        </>
        
    )
}

export default ItemListContainer;