import Button from 'react-bootstrap/Button';
import Validator from './validator'
import React, { useState } from 'react';
import './accounts.css';

function RegisterPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    async function Register(event){
        event.preventDefault()
        console.log(password)
        const valid = Validator(password)
        console.log(valid)
        if (valid){
            //sends the registration to the backend
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type':'application/json'},
            })
            if(response.status === 200){
                alert('Registration success')
            } else {
                alert('registration failed')
            }
        } 
    }

    return (
        <>
            <form id="account-form" onSubmit={Register}>
            <h2>Register</h2>
            <div>
                <input type="text" 
                            name="username"
                            id="account-input"
                            placeholder='Username'
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            /> <br/>

                <input type="text" 
                        name="password"
                        id="account-input"
                        
                        placeholder='Password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        /> <br/> 
                        <p id="account-error">-</p>
            </div>
                <Button type="submit" 
                        value="Submit"
                        id="account-submit">
                        Submit </Button><br/>
                <hr/>
                <p>Already have an account? <a href="./log-in">Log in</a></p>
            </form>
        </>
    )
}

export default RegisterPage;