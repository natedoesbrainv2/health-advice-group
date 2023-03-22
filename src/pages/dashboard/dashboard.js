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

    const[data, setData] = useState({})
    const[location, setLocation] = useState('')
    const[temp, setTemp] = useState('fish')
    const[icon, setIcon] = useState('')
    
    const weatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=14d0ba84180d28085a2422ce2d825d7b`;

    //takes the users location and on 'Enter' creates an API call, the response is then set to 'data'
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(weatherURL).then((response) => {
                setData(response.data)
                console.log(response.data)
                setTemp(response.data.main.temp)
                setIcon(response.data.weather[0].icon)
                console.log(icon)
            })
            setLocation('')
        }
    }

    return (
        <>
        {data.name == undefined && <h3>Enter your city in the search bar below for your forecast</h3>}
        <Container className='dashboard'>
            <Row>
                <Col md={5}>
                    <div className='search-bar'>
                        <input
                        value= {location}
                        onChange= {event => setLocation(event.target.value)}
                        onKeyPress= {searchLocation}
                        placeholder='Enter Your City'
                        type="text"/>
                    </div>
                </Col>
                <Col>
                    <div className='location'>
                        {data.name !== undefined && <i class="fa-solid fa-location-dot"/> }
                        <p>{data.name}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm>
                        <div className='temp'>
                            {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
                        </div>
                        <div className='description'>
                            {data.main ? <p>{data.weather[0].main}</p> : null}
                            {data.name !== undefined && <img src={`http://openweathermap.org/img/w/${icon}.png`}/> }
                        </div>
                    
                </Col>
                <Col sm>
                    <div className='advice'>
                        {getAdvice(temp)}
                    </div>
                </Col>
                <Col sm>
                    <div className='feels-like'>
                        {data.name !== undefined &&
                        <p className='dashboard-bold'>Feels Like:</p>
                        }
                        {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
                    </div>
                    <div className='humidity'>
                        {data.name !== undefined &&
                        <p className='dashboard-bold'>Humidity:</p>
                        }
                        {data.main ? <p>{data.main.humidity} %</p> : null}
                    </div>
                    <div className='wind-speed'>
                        {data.name !== undefined &&
                        <p className='dashboard-bold'>Wind Speed:</p>
                        }
                        {data.main ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default DashboardPage;