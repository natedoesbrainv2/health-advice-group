import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dashboard.css';

//Weather dashboard

function getAdvice(temp){
    /*takes the temperature of the location
    and provides advice dependent on the temperatures.
    use this guide as a summary:

    Extremely Hot           (Above 35)
    Hot Summer Day          (25 to 35)
    Warm Day                (17 to 25)
    Jacket Weather          (10 to 17)
    Cold Day                (0 to 10)
    Very Cold Day           (0 to -10)
    Freezing Temperatures   (Below -10)
    */
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

function getAirQuality(defra){

    /*Uses the defra index to figure how bad the air quality is
        colour is changed dependent on the outcome (see id)*/
    if(defra <= 3){
        return <><h6 id='green'>Good</h6></>
    } else if (defra <= 5) {
        return <><h6 id='yellow'>Moderate</h6></>
    } else if (defra <= 9) {
        return <><h6 id='red'>Bad</h6></>
    } else if (defra === 10) {
        return <><h6 id='black'>Very Bad</h6></>
    } else {
        return <div>Search a city for your forecast</div>;
    }
}


function DashboardPage(){

    const[data, setData] = useState({})
    const[location, setLocation] = useState('')
    const[temp, setTemp] = useState('-')
    const[defra, setDefra] = useState('-')
    
    const weatherURL =`http://api.weatherapi.com/v1/forecast.json?key=ee1a507182a24446b74205921232603&q=${location}&days=3&aqi=yes&alerts=no`;

    //takes the users location and on 'Enter' creates an API call, the response is then set to 'data'
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(weatherURL).then((response) => {
                setData(response.data)
                setTemp(response.data.current.temp_c)
                setDefra(response.data.current.air_quality["gb-defra-index"])
            })
            setLocation('')
        }
    }

    //each bit of data follows this syntax is within a conditonal statement so it will not show when it is undefined
    return (
        <>
        {data.current == undefined && <h3>Enter your city in the search bar below for your forecast</h3>}
        <Container id='dashboard'>
            <Row id='dashboard-topbar'>
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
                        {data.location ? <h2><i class="fa-solid fa-location-dot"/> {data.location.name}</h2> : undefined}
                    </div>
                </Col>
            </Row>
            <Row id='dashboard-current'>
                <Col sm>
                        <div id='temp'>
                            {data.current ? <h2>{temp.toFixed()}°C</h2> : undefined}
                        </div>
                        <div id='description'>
                            {data.current ?<img src={data.current.condition.icon}/> : undefined}
                            {data.current ? <p>{data.current.condition.text}</p> : undefined}
                        </div>
                    
                </Col>
                <Col sm>
                    <div id='advice'>
                        {getAdvice(temp)}
                    </div>
                </Col>
                <Col sm id='dashboard-current-details'> 
                    {data.current ? <p id='dashboard-bold'>Feels Like: {data.current.feelslike_c.toFixed()}°C</p> : undefined}
                    {data.current ? <p id='dashboard-bold'>Humidity: {data.current.humidity} %</p> : undefined}
                    {data.current ?  <p id='dashboard-bold'>Wind Speed: {data.current.wind_mph} MPH</p> : undefined}
                </Col>
            </Row>
            <hr/>
            <Row xs={1} sm={1} md={2} id='dashboard-lower'>
                <Col>
                    <div id='air-quality'>
                        <h2>Current Air Quality</h2>
                        <div id='aq-overall'>
                            <h6>Air Quality Rating:</h6>{getAirQuality(defra)}
                        </div>
                        <div id='defra'>
                            <h6>DEFRA index: {defra}</h6>
                        </div>
                        <div id='epa'>
                            {data.current ? <h6>EPA Index: {data.current.air_quality["us-epa-index"]}</h6> : undefined}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div id='forecast'>
                        <h2>3-Day Forecast</h2>
                        <Row id='forecast-days'>
                        <Col id='day'>
                                {data.forecast ? <h6>{data.forecast.forecastday[0].date}</h6> : undefined}
                                <div id='fc-weather'>
                                    {data.current ?<img src={data.forecast.forecastday[0].day.condition.icon}/> : undefined}
                                </div>
                                <div id='fc-temp'>
                                    {data.forecast ? <p>{data.forecast.forecastday[0].day.avgtemp_c.toFixed()}°C</p> : undefined}
                                </div>
                        </Col>
                        <Col id='day'>
                                {data.forecast ? <h6>{data.forecast.forecastday[1].date}</h6> : undefined}
                                <div id='fc-weather'>
                                    {data.current ?<img src={data.forecast.forecastday[1].day.condition.icon}/> : undefined}
                                </div>
                                <div id='fc-temp'>
                                    {data.forecast ? <p>{data.forecast.forecastday[1].day.avgtemp_c.toFixed()}°C</p> : undefined}
                                </div>
                        </Col>
                        <Col id='day'>
                                {data.forecast ? <h6>{data.forecast.forecastday[2].date}</h6> : undefined}
                                <div id='fc-weather'>
                                    {data.current ?<img src={data.forecast.forecastday[2].day.condition.icon}/> : undefined}
                                </div>
                                <div id='fc-temp'>
                                {data.forecast ? <p>{data.forecast.forecastday[2].day.avgtemp_c.toFixed()}°C</p> : undefined}
                                </div>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default DashboardPage;