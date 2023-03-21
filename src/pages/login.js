import React, { useState, useContext } from 'react';
import {Navigate} from "react-router-dom";
import { UserContext } from '../components/UserContext';

function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext)

    async function Login(event){
        event.preventDefault()
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
        if(response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })
        } else {
            alert('wrong credentials')
        }
    }
    //redirects the user to homepage if login is successful
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <>
            <form onSubmit={Login}>
                <h2 >Login</h2>
                <input type="text" 
                        name="username"
                        placeholder='Username'
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        /> <br/>

                <input type="text" 
                        name="password"
                        placeholder='Password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        /> <br/> 
                <input type="submit" value="Submit"/><br/>
                <p>Dont have an account? <a href="./register">Sign Up</a></p>
            </form>
        </>
    )
}

export default LoginPage;