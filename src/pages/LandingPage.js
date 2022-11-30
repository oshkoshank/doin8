import React from "react";
import {Link} from "react-router-dom";

// Components Import
import Footer from "../components/Footer";
import Button from "../components/Button";

// Assets Import

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div className="logo-container">
                <img src={require('../assets/doin8.png')} className="logo-img" alt="doin8"/>
            </div>

            <h3>buttons start here</h3>

            <div className="button-container">
                
                <Link to={}<Button name = "findcharities-button" text = "Find Charities" />
                <Button name = "dashboard-button" text = "Personal Dashboard" />
                <Button name = "registerchar bity-button" text = "Register As A Charity" />
            </div>
            <h3> Footer starts here </h3>
            <Footer/>

        </div>

    )
}

export default LandingPage