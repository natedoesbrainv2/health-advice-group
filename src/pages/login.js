import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends Component{
    render(){
    return (
        <>
        <div id='background-container'>
            <form>
                <label for="email" > Email Address:</label><br/> 
                <input type="text" name="email"/> <br/> 
                <label for="password" > Password: </label><br/> 
                <input type="text" name="password"/> <br/> 
                <input type="submit" value="Submit"/><br/>
                <text>Dont have an account? <a href="./signup">Sign Up</a></text>
            </form>
        </div>
        </>
    )
}
}

export default Login;