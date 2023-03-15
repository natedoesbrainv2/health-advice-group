import React from 'react';
import './login.css';

function Login(){
    return (
        <>
        <div id='background-container'>
            <form>
                <label for="email" > Email Address:</label><br/> 
                <input type="text" name="email"/> <br/> 
                <label for="password" > Password: </label><br/> 
                <input type="text" name="password"/> <br/> 
                <input type="submit" value="Submit"/><br/>
                <text>Dont have an account? <a href="./sign-up">Sign Up</a></text>
            </form>
        </div>
        </>
    )
}

export default Login;