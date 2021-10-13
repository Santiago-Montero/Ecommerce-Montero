import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getDoc, Timestamp, doc, writeBatch } from 'firebase/firestore';
import {  db } from '../../services/firebase/firebase'
import UserContext from "../../context/UserContext";
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart (){
    const { cartItems } = useContext(CartContext)
    const { itemsPrice } = useContext(CartContext)
    const { buy } = useContext(CartContext)
    const { clear } = useContext(CartContext)
    const { user } = useContext(UserContext)

    const confirmarCompra = () =>{
        buy();

        const objOrder = {
            buyer : user,
            items: cartItems,
            total: itemsPrice,
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod, i) =>{
            getDoc(doc(db, 'items', prod.id)).then(DocumentSnapshot =>{
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantityItem){
                    batch.update(doc(db, 'items', DocumentSnapshot.id),{
                        stock : DocumentSnapshot.data().stock - objOrder.items[i].quantityItem
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        })

        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), objOrder).then(()=> {
                batch.commit()
            }).catch((error)=>{
                console.log(error)
            })
        }
    }

    

    return(
        <>
            {
                cartItems.length === 0 ? 
                    <div className="views container carrito">
                        <div className=" sinProductos">
                            <h2>No hay Productos</h2>
                            <div className="voler">
                                <Link to={`/`} className="btn btn-danger">Volver</Link>
                            </div>
                            
                        </div>
                    </div>
                :
                <div className="cart container">
                    <div className="cartTitle">
                        <h2>Mi carrito</h2>
                        <h3>Total : {itemsPrice} </h3>
                    </div>
                    
                    <div className="cartDescription container">
                        <div className="cartDescriptionItems">
                            {cartItems.map(item => <ItemCart key={item.id} item={item} />)}
                        </div>
                        <div className="cartDescriptionTicketBtn">
                            <button className="btn btn-danger" onClick={clear}>Borrar</button>
                            <button className="btn btn-success" onClick={confirmarCompra}>Comprar</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;

/*
<div className="cart">
    <div className="cartTitle">

    </div>
    <div className="cartDescription">
        <div className="cartDescriptionItems">

        </div>
        <div className="cartDescriptionTicket">

        </div>
    </div>
</div>
*/
