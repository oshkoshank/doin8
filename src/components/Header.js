import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div style={{backgroundColor:"lightpink"}}>
            <Link to="/home">
                <img src={require("../assets/logo_transparent.png")} alt="doin8/home" style={{width:'100px',height:'100px'}}/>
            </Link>
            <p>Doin8</p>
        </div>
    )
}

export default Header