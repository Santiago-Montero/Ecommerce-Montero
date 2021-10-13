import './ItemList.css'
import Item from '../Item/Item'

function ItemList({itemList}){
    return(
        <>
        <div className="itemList">
            {itemList.map(item =><Item key={item.id} item={item}/>)}
        </div>
        
        </>
    );
}

export default ItemList;