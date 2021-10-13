import React, { useContext } from 'react'
import NotificationContext from '../../context/NotificationContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const Notification = () => {
    const { notification }  = useContext(NotificationContext)

    if(notification.message === '') {
        return null
    }

    return (
        <>
            <div className="notification">
            {
                notification.severity === "error" ? 
                    <div className="alert alert-danger" role="alert">
                        {notification.message}
                    </div>
                    :
                    <div className="alert alert-success" role="alert">
                        {notification.message}
                    </div>
            }
            </div>
        </>
    )
}

export default Notification