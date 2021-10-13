import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import { getCategories } from '../../services/firebase/firebase';
import CarWidget from '../CartWidget/CartWidget';
import Login from '../Login/Login';
import './NavBar.css'

function NavBar(){
    const [categories, setCategories] = useState()
    const { user } = useContext(UserContext)

    useEffect(() =>{
        getCategories().then(cate =>{
            setCategories(cate)
        }).catch((error) =>{
            console.log('Error cargando categorias ' + error)
        })
        return () => {
            setCategories()
        }
    },[])

    return(
        <>
        <div className="navbar">
            {
                user ? 
                <marquee><h1>Your Box - {user} </h1></marquee>
                :
                <marquee><h1>Your Box </h1></marquee>
            }
            <ul className="nav nav-pills navegador">
                <li><NavLink to='/' className="navLink">Inicio</NavLink></li>
                <li className="nav-item dropdown" data-bs-toggle="dropdown"  role="button" aria-expanded="false">  </li>
                <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle categorias" data-bs-toggle="dropdown" role="button" aria-expanded="false"> Categorias </p>
                    <ul className="dropdown-menu">
                        {categories?.map(cate =><li key={cate.id}><NavLink to={`/category/${cate.name}`} className="navLink dropdown-item">{cate.name}</NavLink></li>)}
                    </ul>
                </li>
                <li><CarWidget className="navLink"/></li>
                <li><Login user={user} className="navLink"/></li>
            </ul>
        </div>
        </>
    );
}

export default NavBar;
