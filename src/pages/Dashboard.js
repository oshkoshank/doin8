import React from "react";

// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";

// Asset Imports


const Dashboard = () => {
    let bal = 45000
    let donated = 200
    return (
        <div className="dashboard-container">
            <Header/>
            <div className="personal-container">

                <div className="personal-info-container">
                    <p>Balance : {bal}</p>
                    <img src={require('../assets/suitcat.jpg')} alt="placeholder for userprofilepic" style={{width:"300px",height:"300px"}}/>
                    <p>Total Donated : {donated} </p>
                </div>

                <div className="history-container">
                    <h4>Past Transactions</h4>
                    <ul>
                        <li>1.83981340912</li>
                        <li>2.34928139804</li>
                    </ul>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard