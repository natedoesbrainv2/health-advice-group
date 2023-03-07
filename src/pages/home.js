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
                <img src='./assets/logo_transparent.png' alt='logo'/>
                <h2>
                    We are the Health Advice Group
                </h2>
                <p>A charity with a mission to better the world with our knowledge of enviromental health. We offer free weather updates in your area, including  wather forecasting and air quality data and graphs. We aim to ease the lives of those who face challenges due to their everyday natural environment</p>
            </div>


        </>
    )
}