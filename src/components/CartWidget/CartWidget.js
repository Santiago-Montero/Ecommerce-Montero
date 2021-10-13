import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import UserContext from '../../context/UserContext';
import Imagenes from '../../img/Imagenes';
import './CartWidget.css';


function CartWidget (){
    const { cartQuantity } = useContext(CartContext)
    const { user } = useContext(UserContext)

    return(
        <>  {
            user &&
                <Link to='/cart' className="cartWidget"> 
                    <div className="cartWidgetImg">
                        <img src={Imagenes.cart} alt="carrito"/>
                    </div>
                    <div className="cartWidgetP">
                        <p>{cartQuantity}</p>
                    </div>
                </Link>   
            }    
        </>
    );
}

export default CartWidget;