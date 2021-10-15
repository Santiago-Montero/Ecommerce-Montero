import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { getItems } from '../services/firebase/firebase'
import './views.css'
import  Carousel  from '../components/Carousel/Carousel';


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
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div> 
            </>
        );
    }

    return(
        <>
        <Carousel />
        <div className="container home">
            <h3>Todos los Productos</h3>
            <ItemListContainer items={items}/>
        </div>
        </>
    );
}

export default Home;