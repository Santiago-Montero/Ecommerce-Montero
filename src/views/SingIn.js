import UserContext  from '../context/UserContext'
import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';
import './views.css'
import { Link } from 'react-router-dom';

function SingIn() {
    const { iniciar } = useContext(UserContext)
    const {setNotification } = useContext(NotificationContext)
    const { user } = useContext(UserContext)
    
    const guardarDatos = (event) =>{
        event.preventDefault()

        let formName = document.getElementById("formName").value
        let formPass = document.getElementById("formPass").value

        if(formPass !== '' && formName !==''){
            const userObj = {
            formName,
            formPass
            }
            iniciar(userObj)
            
        }else{
            setNotification('error', `Complete todos los campos`)
        }
    }
    return (
        <>
        {
            user ? 
                <Link to={'/'}>
                    <button className="btn btn-secondary btnInicio">Inicio</button>
                </Link>
            :
                <form className="views form container" onSubmit={guardarDatos}>
                    <h2>Inicia Sesion</h2>
                    <p><input className="formLlenar" id ="formName" placeholder="Ingresa tu nombre"></input></p>
                    <p><input className="formLlenar" id ="formPass" type="password" placeholder="Ingresa tu contraseña"></input></p>
                    <div className="boton">
                        <input type="submit" className="btn btn-secondary" label="Enviar"/>
                    </div>
                </form>
        }
        </>
    );
}

export default SingIn;