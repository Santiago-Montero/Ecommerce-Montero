import { useContext, useState } from "react";
import CartContext from '../../context/CartContext'
import NotificationContext from "../../context/NotificationContext";
import UserContext from "../../context/UserContext";
import {Link} from 'react-router-dom'
import './ItemCount.css'


function ItemCount({item}){
    const waist = item.waist
    const [ waistItem, setWaistItem] = useState(0)
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const {setNotification} = useContext(NotificationContext)

    const addWaistItem = (talle) => setWaistItem(talle) 

    const addItem = () => count < item.stock && setCount(count + 1) 
    
    const removeItem = () => count > 0 && setCount(count - 1) 
    
    const onAddtoCart = () =>{
        if(waistItem === 0){
            setNotification('error', `porfavor seleccione un talle`)
        }else{
            addToCart(item, count, waistItem)
            setCount(count) 
            setNotification('success', `${item.name} ha sido agregado al carrito`)
        }
        
    }


    return(
        <>
        { user ?
        <>
            <div className="waist">
                {waist.map(w => <button key={w} id={w} onClick={() =>addWaistItem(w)} className="btn"> {w} </button>)}
            </div>
            <div className="itemCount">
                <button className="btn" onClick={removeItem}>-</button>
                <h5>{count}</h5>
                <button className="btn" onClick={addItem}>+</button>
            </div>
            <div className="itemCountCarrito">
                    <Link to="/cart" className="btn botonCarrito btn-warning" onClick={() => onAddtoCart()}>  <b>Agregar a Carrito</b> </Link>
            </div>
        </>
            :
            <div className="itemCountText">
                <p>Inicia Sesion para agregar al carrito</p>
            </div>
        }
        </>
    );
}

export default ItemCount;