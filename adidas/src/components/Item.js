import ItemCount from "./ItemCount";

const Item = (props) => {
    return (
        <>
            <p style={{margin: 'auto', height: '40px', width: '40px'}}>{props.name}</p>
            <ItemCount stock={props.stock}></ItemCount>
        </>
    )
}


export default Item;