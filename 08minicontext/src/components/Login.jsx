import React, { useState, useContext } from 'react'
// useContext is a hook for context matters 
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) //this has taken from the context folder(UserContextProvider). the method only

    const handleSubmit = (e) => {
        e.preventDefault() //just to prevent submitting or going out to another url
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                type='text'
                placeholder='Username' />
            <input
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
            placeholder='Password' type='text' />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login