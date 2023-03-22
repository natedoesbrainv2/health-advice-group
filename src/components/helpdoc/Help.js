import React, { useState } from 'react';
import "./Help.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Help(){
    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} className="help-button" type="button">
                ?
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>User Guide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Homepage</b><br/>
                        Use the homepage to navigate to each of our features. The button on the banner at the top labelled 'Get my Dashboard', will take you to the dashboard page.<br/>
                        There are three articles at the bottom of the page labelled, 'Health Tracking Tool', 'Weather Dashboard' and 'Articles and Assessments'. Each card has a grey button 
                        at the bottom with the word 'Explore'. By pushing Explore you will then be able to navigate to that feature.
                    <br/><b>Dashboard</b><br/>
                        You can navigate to the 'Weather Dashboard' using the navbar, footer or this link <a href='/dashboard'>Click Here</a>. 
                        To use the dashboard you must first enter your city (e.g. 'London' or 'New York'), then press the 'Enter' key on your keyboard.
                        The dashboard will show three columns, the first will show your citys current temperature and weather (this is shown through text and a symbol)
                        The second column will feature a little box, this provides advice based on the location you entered.
                        The third column will go more into depth such as humidity, wind speed and what the temperature will feel like.
                    <br/><b>Articles</b><br/>

                    <br/><b>Health Tracking</b><br/>
                    The Health Tracking Tool is currently in development and is not accesible to users. In preparation for its release consider making an account.
                    <br/><b>Account</b><br/>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default Help;
