import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItem } from '../../services/firebase/firebase'
import { useParams } from "react-router-dom";

function ItemListDetailContainer (){
    const { itemId } = useParams()
    const [item , setItem] = useState(undefined)

    useEffect(() =>{
        getItem(itemId).then(item =>{
            setItem(item)
        }).catch((error)=> {
            console.log('Error encontrando los items ' + error)
        })
        return (() => {
            setItem(undefined)
        })
    },[itemId])

    return(
        <>
        <div>
            {!item ? 
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div> 
                    :
                    <ItemDetail key={item.id} item={item}/>
            }
        </div>
        
        </>
    );
}

export default ItemListDetailContainer ;