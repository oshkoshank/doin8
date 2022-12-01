import React from "react";
import {Link} from "react-router-dom";

// Components Import
import Footer from "../components/Footer";
import Button from "../components/Button";
import Header from "../components/Header";

// Assets Import

const Home = () => {
    return (
        <div className="landing-page-container">
            <Header />
            <div className="logo-container">
                <img src={require('../assets/doin8.png')} className="logo-img" alt="doin8"/>
            </div>

            <h3>buttons start here</h3>

            <div className="button-container">
                
                <Link to="/">
                    <Button name = "findcharities-button" text = "Find Charities" />
                </Link>
                <Link to="/dashboard">
                    <Button name = "dashboard-button" text = "Personal Dashboard" />
                </Link>
                <Link to="/register">
                <Button name = "registercharity-button" text = "Register As A Charity" />
                </Link>
            </div>
            <h3> Footer starts here </h3>
            <Footer/>

        </div>

    )
}

export default Home