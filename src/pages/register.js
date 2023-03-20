import React, { useState } from 'react';
import './register.css';

function RegisterPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function Register(event){
        event.preventDefault()
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        })
    }

    return (
        <>
            <form onSubmit={Register}>
            <h2>Register</h2>
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
                <p>Already have an account? <a href="./log-in">Log in</a></p>
            </form>
        </>
    )
}

export default RegisterPage;