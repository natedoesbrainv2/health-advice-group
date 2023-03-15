import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return (
        <>
            <div id='homepage-banner'>
                <Row xs={1} md={2}>
                    <Col>
                        <h1 id='homepage-heading'>Forecasting for your area</h1>
                        <Button variant='light' size='s' href='/dashboard'>
                            Get my dashboard →
                        </Button>
                    </Col>
                    <Col>
                        <img alt='dashboard-preview'></img>
                    </Col>
                </Row>
            </div>

            <div id='main-description'>
                <img id='logo' src={require("../assets/logo_transparent.png")} alt='logo'/>
                <h2>
                    We are the Health Advice Group
                </h2>
                <p>A charity with a mission to better the world with our knowledge of enviromental health. We offer free weather updates in your area, including  wather forecasting and air quality data and graphs. We aim to ease the lives of those who face challenges due to their everyday natural environment</p>
            </div>

            <hr/>

            <Row xs={1} md={3}>
                <Col>
                    <Card>
                        <Card.Img variant='top' src={require("../assets/purple_clouds-min.jpg")} alt="purple clouds"/>
                        <Card.Body>
                            <Card.Title>Health tracking tool</Card.Title>
                            <Card.Text>
                                Track your mood and symptoms to see how the environment affects you
                            </Card.Text>
                            <Button variant='secondary' href='./articles'>Explore →</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top' src={require("../assets/woman_drinking_water-min.jpg")} alt="woman drinking water"/>
                        <Card.Body>
                            <Card.Title>Weather Dashboard</Card.Title>
                            <Card.Text>
                                Forecasting visuals for your area; Air Quality, Pollen Levels, Weather and Advice
                            </Card.Text>
                            <Button variant='secondary' href='./articles'>Explore →</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top' src={require("../assets/woman_sneezing-min.jpg")} alt="sneezing woman"/>
                        <Card.Body>
                            <Card.Title>Articles & Assessments</Card.Title>
                            <Card.Text>
                                Articles on how to cope with the climate also risk assessments for your home
                            </Card.Text>
                            <Button variant='secondary' href='./articles'>Explore →</Button>
                        </Card.Body>
                    </Card>                    
                </Col>
            </Row>
        </>
    )
}


export default Home;