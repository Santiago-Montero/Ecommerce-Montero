import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getItemsCategory } from "../services/firebase/firebase";

function Category (){
    const { categoryId } = useParams()
    const [ itemsCategory, setItemsCategory] = useState([])

    useEffect(() =>{
        getItemsCategory(categoryId).then(itemsC =>{
            setItemsCategory(itemsC)
        }).catch((error) =>{
            console.log('Error cargando items por categoria ' + error)
        })
    },[categoryId])

    if(itemsCategory.length === 0){
        return(
            <>
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div> 
            </>
        );
    }
    return(
        <>
        <div className="container"> 
            <h1>{categoryId}</h1>
            <ItemListContainer items={itemsCategory}/>
        </div>
        </>
    );
}

export default Category;