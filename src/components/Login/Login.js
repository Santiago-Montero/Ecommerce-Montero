import { useContext } from 'react';
import UserContext from '../../context/UserContext'
import {  NavLink} from 'react-router-dom'
import './Login.css'
import NotificationContext from '../../context/NotificationContext';

function Login ({user}){
    const { salir } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)
    

    const cerrarSesion = () =>{
        salir();
        setNotification('error', 'Se cerro la sesion')
    }

    if(!user){
        return(
            <>
            <div className="login">
                <NavLink to="/singin" className="navLink btn" > Inicia Sesion </NavLink>
            </div>
            
            </>
        );
    }
    return(
        <>
        <div className="login">
            <button onClick={cerrarSesion} className="btn"> Cerrar Sesion </button>
        </div>
        
        </>
    );
}

export default Login;