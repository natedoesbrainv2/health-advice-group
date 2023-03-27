import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dashboard.css';

//Weather dashboard

//the getAdvice() function takes the temperature of the location
//and provides advice dependent on the temperatures.
//use this guide as a summary:
/*
Extremely Hot           (Above 35)
Hot Summer Day          (25 to 35)
Warm Day                (17 to 25)
Jacket Weather          (10 to 17)
Cold Day                (0 to 10)
Very Cold Day           (0 to -10)
Freezing Temperatures   (Below -10)
*/

function getAdvice(temp){
        if(temp >= 35){
            return <><h6>Extremely Hot Temperatures</h6><p>Dress in lightweight, light-coloured clothing. Keep windows and doors shut during the day. Stay hydrated and keep cool, avoid alcohol consumption. Stay in the shade and be cautious of any heat related symptoms.</p></>;
        } else if (temp >= 25) {
            return <><h6>Hot Temperatures</h6><p>Wear lightweight clothing and stay hydrated. Keep yourself and your home cool, consider a cool shower or using fans. Use suncream if you are outside or find shade.</p></>;
        } else if (temp >= 17) {
            return <><h6>Warm Temperatures</h6><p>Wear more lightweight clothing but bring a jacket incase of dropping temperatures.</p></>;
        } else if (temp >= 10) {
            return <><h6>Cool Temperatures</h6><p>Wear a jacket or lightweight outerwear when outside.</p></>;
        } else if (temp >= 0) {
            return <><h6>Cold Temperatures</h6><p>Dress warm and wear a coat when outside. Check road conditions before travelling. Avoid staying outside for prolonged periods of time.</p></>;
        } else if (temp >= -10) {
            return <><h6>Very Cold Temperatures</h6><p>Dress warm with gloves, hat and a coat when leaving buildings. Minimise travelling and check road conditions before travelling. Avoid staying outside for prolonged periods of time.</p></>;
        } else if (temp < -10) {
            return <><h6>Freezing Temperatures</h6><p>Keep all doors and windows shut. Wear multiple layers of warm clothing. Minimize Travel. Keep pets inside. Ensure you have no leaks to avoid frozen water blocking your pipes</p></>;
        } else {
            return <div>No advice currently available.<br/>Search a city for your forecast</div>;
        }
}


function DashboardPage(){

    var defaultData = require('./forecast.json')
    const[data, setData] = useState({})
    const[location, setLocation] = useState('')
    const[temp, setTemp] = useState('fish')
    const[icon, setIcon] = useState('')
    
    const weatherURL =`http://api.weatherapi.com/v1/forecast.json?key=ee1a507182a24446b74205921232603&q=${location}&days=3&aqi=yes&alerts=no`;

    //ee1a507182a24446b74205921232603
    //https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=14d0ba84180d28085a2422ce2d825d7b

    //takes the users location and on 'Enter' creates an API call, the response is then set to 'data'
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            console.log(defaultData)

            axios.get(weatherURL).then((response) => {
                setData(Object.value(response.data))
                console.log(data)
                //setTemp(response.data.current.temp_c)
                //setIcon(response.data.current.condition.icon)
                console.log(temp)
                console.log(data.location.name)
            })
            setLocation('')
        }
    }

    return (
        <>
        <h3>Enter your city in the search bar below for your forecast</h3>
        <Container id='dashboard'>
            <Row>
                <Col md={5}>
                    <div id='search-bar'>
                        <input
                        value= {location}
                        onChange= {event => setLocation(event.target.value)}
                        onKeyPress= {searchLocation}
                        placeholder='Enter Your City'
                        type="text"/>
                    </div>
                </Col>
                <Col>
                    <div id='location'>
                        <p>{data.location}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm>
                        <div id='temp'>
                        </div>
                        <div id='description'>
                        </div>
                    
                </Col>
                <Col sm>
                    <div id='advice'>
                        {getAdvice(temp)}
                    </div>
                </Col>
                <Col sm> 
                    <div id='feels-like'>
                        <p id='dashboard-bold'>Feels Like:</p>
                    </div>
                    <div id='humidity'>
                        <p id='dashboard-bold'>Humidity:</p>
                    </div>
                    <div id='wind-speed'>
                        <p id='dashboard-bold'>Wind Speed:</p>
                    </div>
                </Col>
            </Row>
            <Row sm={1} md={2}>
                <Col>
                    <div id='air-quality'>
                        <h2>Current Air Quality</h2>
                        <div id='aq-overall'>
                            <p>Moderate</p>
                        </div>
                        <div id='defra'>
                            2
                        </div>
                        <div id='epa'>
                            2
                        </div>

                    </div>
                </Col>
                <Col>
                    <div id='forecast'>
                        <h2>3-Day Forecast</h2>
                        <Row>
                            <div id='day-1'>
                                <p>22/3/33</p>
                                <div id='fc-temp'>
                                    <p>3</p>
                                </div>
                                <div id='fc-weather'>
                                    <p>cloudy</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                        <div id='day-2'>
                            <p>22/3/33</p>
                                <div id='fc-temp'>
                                    <p>3</p>
                                </div>
                                <div id='fc-weather'>
                                    <p>cloudy</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                        <div id='day-3'>
                            <p>22/3/33</p>
                                <div id='fc-temp'>
                                    <p>3</p>
                                </div>
                                <div id='fc-weather'>
                                    <p>cloudy</p>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default DashboardPage;