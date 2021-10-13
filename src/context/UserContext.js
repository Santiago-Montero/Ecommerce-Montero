import React, { useState } from 'react'

const UserContext = React.createContext()


export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()

    const iniciar = (objUser) => {
        setUser(objUser.formName)
    }

    const salir = () => {
        setUser()
    }

    return (
        <UserContext.Provider 
            value={{
                user,
                iniciar,
                salir
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext