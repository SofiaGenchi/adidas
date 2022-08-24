import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss'
import { useCart } from "../Checkout/Checkout";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({productDetail}) => {

    const [compra, setCompra] = useState(false);
    const [contador, setContador] = useState(1);
    const {name, id, description, stock, img, price} = productDetail;
    const {addToCart} = useCart();
    const navegar = useNavigate();

    const onAdd = () => {
        let itemAComprar = {
            id,
            name,
            img,
            stock,
            price,
            quantity: contador
        }
        setCompra(true)
        addToCart(itemAComprar)
    }
    return (
        <>
            <div className="itemDetail">
                <img className="img" src={img}></img>
                <div className="detail">
                <h4>{name}</h4>
                <p>{description}</p>
                <h6>${price}</h6>
                <p>En Stock: {stock}</p>
                { !compra ? <ItemCount stock={stock} onAdd={onAdd} contador={contador} setContador={setContador} />
                    :<div>
                        <button  className='btn btn-success'onClick={()=> navegar('/')}>Seguir Comprando</button>
                        <button className='btn btn-secondary'onClick={()=> navegar('/cart')}>Ir al Carrito</button>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default ItemDetail;