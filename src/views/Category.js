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
            <h1> Categorias</h1>
            <h2>No se encontro resultado</h2>
            </>
        );
    }
    return(
        <>
        <h1>{categoryId}</h1>
        <ItemListContainer items={itemsCategory}/>
        </>
    );
}

export default Category;