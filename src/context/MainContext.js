import React, {createContext, useState} from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const login = () => setIsSignedIn(true)
    const logout = () => setIsSignedIn(false)

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const changeEmail = value => setEmail(value)
    const changePassword  = value => setpassword(value)

    return (
        <Context.Provider value={{isSignedIn, login, logout, email, password, changeEmail, changePassword}}>
            {props.children}
        </Context.Provider>
    )
}