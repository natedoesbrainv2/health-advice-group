import React, { useState } from 'react';

function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
        <div id='background-container'>
            <h2>Login</h2>
            <form>
                <input type="text" 
                        name="username"
                        placeholder='Username'
                        value={username}
                        /> <br/>

                <input type="text" 
                        name="password"
                        placeholder='Password'
                        value={password}
                        /> <br/> 
                <input type="submit" value="Submit"/><br/>
                <p>Dont have an account? <a href="./register">Sign Up</a></p>
            </form>
        </div>
        </>
    )
}

export default LoginPage;