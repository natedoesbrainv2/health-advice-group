import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(){
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={require("../assets/logo_transparent.png")} alt='logo' width='40' height='30'/>
                    Health Advice Group
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                    <Nav.Link href='/articles'>Articles</Nav.Link>
                    <Nav.Link href='/health-tracking'>Health Tracking</Nav.Link>
                    <Nav.Link href='/sign-up'>Sign Up</Nav.Link>
                    <Nav.Link href='/log-in'>Log In</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;