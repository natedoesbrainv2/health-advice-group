import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component{
    render(){
    return (
        <nav className="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' class="navbar-brand my-0 mr-md-auto font-weight-normal">
                <img src={require("../assets/logo_transparent.png")} width="40" height="30" alt="logo"/>
                Health Advice Group
            </Link>

            <button collapseOnSelect class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span collapseOnSelect class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to='dashboard' class="nav-link">
                            Dashboard
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='articles' class="nav-link">
                            Articles
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='health-tracking' class="nav-link">
                            Health Tracking
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='login' class="nav-link">
                            Account
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
}

export default Navbar;