import React, {Component} from 'react';
import PrivacyPolicy from '../other/privacy-policy';
import TermsAndConditions from '../other/terms-and-conditions';
import MedicalDisclaimer from '../other/medical-disclaimer';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


function Footer(){
    return (
        <>
        <div id="main-footer" class="bg-dark">
            <footer class="d-flex justify-content-center">
                
                <section id='company'>
                    <div class="container justify-content-center text-center text-md-start mt-5 text-white">
                    <div class="row mt-3 justify-content-center">
                        <div class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4" id='company-name'>
                            <img id="logo" src={require("../assets/logo_transparent.png")} width="60px" height="30px" alt="logo"/>
                            <Link to='/'><h6>Health <br/>Advice <br/>Group</h6></Link>
                        </div>
                        <div id='explore-links' class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6>Explore...</h6>
                            <Link to='dashboard'>Dashboard</Link><br/>
                            <Link to='articles'>Articles</Link><br/>
                            <Link to='articles'>Assessments</Link><br/>
                            <Link to='health-tracking'>Health Tracking</Link>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6>Other...</h6>
                            <PrivacyPolicy/> <br/>
                            <TermsAndConditions/><br/>
                            <MedicalDisclaimer/>
                        </div>
                        <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6>Want to send feedback?</h6>
                            <p>Email: help@hag.co.uk</p>
                            <p>Phone: 012345678901</p>
                        </div>
                    </div>
                    </div>
                </section>
            </footer>

            <div id='copyright-text'>
                2023 N.Stevenson, Health Advice Group. All Rights Reserved
            </div>    
        </div>

        </>
    )
}


export default Footer;