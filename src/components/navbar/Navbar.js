import { useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation(){

    const{setUserInfo, userInfo} = useContext(UserContext)

    /*useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, []);*/

    function Logout(){
        fetch ('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null)
    }

    const username = userInfo?.username;

    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>
                    <img id='navbar-logo-image' src={require("../../assets/logo_transparent.png")} alt='logo' width='50' height='auto'/>
                    Health Advice Group
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                    <Nav.Link href='/articles'>Articles</Nav.Link>
                    <Nav.Link href='/health-tracking'>Health Tracking</Nav.Link>
                    {username ? (
                        <>
                        <Nav.Link href='/article-create'>Create Article</Nav.Link>
                        <Nav.Link onClick={Logout}>Log Out</Nav.Link>
                        </>
                    ): null}
                    
                    {!username ? (
                        <>
                        <Nav.Link href='/register'>Register</Nav.Link>
                        <Nav.Link href='/log-in'>Log In</Nav.Link>
                        </>
                    ): null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;