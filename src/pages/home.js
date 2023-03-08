import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//The main HTML code for the Home Page
export const Home = () => {
    return (
        <>
            <div className='homepage-banner'>
                <div >
                <h1>Forecasting for your area</h1>
                <button className='banner-button'>
                    Get my dashboard →
                </button>
                </div>
                <div>
                    <img alt='dashboard-preview'></img>
                </div>
            </div>

            <div className='main-description'>
                <img className='logo' src={require("../assets/logo_transparent.png")} alt='logo'/>
                <h2>
                    We are the Health Advice Group
                </h2>
                <p>A charity with a mission to better the world with our knowledge of enviromental health. We offer free weather updates in your area, including  wather forecasting and air quality data and graphs. We aim to ease the lives of those who face challenges due to their everyday natural environment</p>
            </div>

            <hr/>

            <div className='features'>
                <div className='card'>
                    <img src={require("../assets/woman_sneezing.jpg")}/>
                    <h3>Health tracking tool</h3>
                    <p>Track your mood and symptoms to see how the environment affects you</p>
                    <button className='explore-button'>Explore →</button>
                </div>

                <div className='card'>
                    <img src={require("../assets/purple_clouds.jpg")}/>
                    <h3>Weather Dashboard</h3>
                    <p>Forecasting visuals for your area; Air Quality, Pollen Levels, Weather and Advice</p>
                    <button className='explore-button'>Explore →</button>
                </div>

                <div className='card'>
                    <img src={require("../assets/woman_drinking_water.jpg")}/>
                    <h3>Articles & Assessments</h3>
                    <p>Articles on how to cope with the climate also risk assessments for your home</p>
                    <button className='explore-button'>Explore →</button>
                </div>

            </div>
        </>
    )
}