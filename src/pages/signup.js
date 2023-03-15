import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';

class Signup extends Component{
    render(){
    return (
        <>
        <div id='background-container'>
            <form>
                <label for="email" > Email Address:</label><br/> 
                <input type="text" name="email"/> <br/> 
                <label for="username" > Username:</label><br/> 
                <input type="text" name="email"/> <br/> 
                <label for="password" > Password: </label><br/> 
                <input type="text" name="password"/> <br/>  
                <input type="submit" value="Submit"/><br/>
                <text>Already have an account? <a href="./log-in">Log in</a></text>
            </form>
        </div>
        </>
    )
}
}

export default Signup;