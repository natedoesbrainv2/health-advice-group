import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Footer = () => {
    return (
        <>
        <div class="container-fluid my-5 bg-dark ">
            <footer class="d-flex justify-content-between">
                
                <section className='company'>
                    <div class="container justify-content-center text-center text-md-start mt-5 text-white">
                    <div class="row mt-3 justify-content-center">
                        <div col-md-3 col-lg-4 col-xl-3 mx-auto mb-4>
                            <img className="logo" src={require("../assets/logo_transparent.png")} width="60px" height="30px" alt="logo"/>
                            <h6>Health <br/>Advice <br/>Group</h6>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6>Explore...</h6>
                            <Link to='dashboard'>Dashboard</Link><br/>
                            <Link to='articles'>Articles</Link><br/>
                            <Link to='articles'>Assessments</Link><br/>
                            <Link to='health-tracking'>Health Tracking</Link>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6>Other...</h6>
                            <a>Privacy Policy</a><br/>
                            <a>Terms and Conditions</a><br/>
                            <a>Settings</a>
                        </div>
                        <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6><a>Want to send feedback? Click Here!</a></h6>
                            <a>Email: help@hag.co.uk</a><br/>
                            <a>Phone: 012345678901</a>
                        </div>
                    </div>
                    </div>
                </section>
            </footer>

            <div className='copyright-text'>
                2023 N.Stevenson, Health Advice Group. All Rights Reserved
            </div>    
        </div>

        </>
    )
}