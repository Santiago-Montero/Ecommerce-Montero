import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { getItems } from '../services/firebase/firebase'
import './views.css'


function Home (){
    const [items , setItems] = useState([])
    useEffect(() =>{
        getItems().then(items =>{
            setItems(items);
            
        }).catch((error)=> {
            console.log('Error encontrando los items ' + error)
        })
    },[])
    
    if(items.length === 0){
        return(
            <>
            <div>
                <h1>Cargando</h1>
            </div>
            </>
        );
    }

    return(
        <>

        <h1>Home</h1>
        <ItemListContainer items={items}/>
        </>
    );
}

export default Home;