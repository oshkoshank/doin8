import React from "react";

// Component Imports
import Button from "./Button";

// Asset Imports

const Footer = () => {
    return (
        <div style={{backgroundColor    :"blanchedalmond"}}>
            <div className="sitemap-container">
                <h4>Sitemap</h4>
                <ul>
                    <li>Explore Charities</li>
                    <li>Personal Dashboard</li>
                    <li>Register As Charity</li>
                </ul>
            </div>
            <div className= "logo-container">
                <img src={require('../assets/doin8.png')} style={{width:"160px",height:"80px"}} alt="lgoo"/>
            </div>
            <div className="newsletter-container">
                <input type="text"/>
                <Button name = "newsletter-button" text = "Sign Up" />
                <p>Sign Up for Newsletter!</p>
            </div>
            <div className="about-us-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default Footer