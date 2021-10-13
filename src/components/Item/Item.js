import './Item.css'
import { Link } from 'react-router-dom'

function Item({item}){
    return(
        <>
        
        <Link to={`/product/${item.id}`} className="itemContainerLink">
            <div className="itemContainer">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <p><b>$ {item.price}</b></p>
            </div>
        </Link>
        
        
        </>
    );
}

export default Item;