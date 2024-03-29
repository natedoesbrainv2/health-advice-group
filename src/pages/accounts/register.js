import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './accounts.css';

function RegisterPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    async function Register(event){
        event.preventDefault()
        //sends the registration to the backend
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        })
        if(response.status === 200){
            alert('Registration success')
        } else {
            alert('Username already taken')
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

                <input type="password" 
                        name="password"
                        id="account-input"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        placeholder='Password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required/> <br/> 
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