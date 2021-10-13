import { useContext } from "react";
import  CartContext  from "../../context/CartContext";
import NotificationContext from "../../context/NotificationContext";
import './ItemCart.css'

function ItemCart ({item}){
    const { removeToCart } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)

    const remove = () => {
        removeToCart(item?.id, item?.price, item?.quantityItem)
        setNotification('error', 'Se elimino del carrito')
    }

    return(
        <>
        <div className="itemCart">
            <img src={item?.img} alt={item?.name} />
            <p>{item?.name}</p> 
            <p> Talle: {item?.waistItem}</p>  
            <p> Cantidad a comprar : {item?.quantityItem}</p>   
            <button className="btn btn-danger" onClick={() => remove()}>X</button>
        </div>
        </>
    );
}

export default ItemCart;