import React from "react";
import {Link} from "react-router-dom";
//eslint-disable-next-line
import styles from "../index.css"

const HeadNav = () => {
    return (
        <div
        className="navbar px-0 py-0 h-20vh mx-auto bg-pink-300 rounded-xl shadow border p-8 m-10 flex items-center w-full justify-between">
            <div className="mb-4">
                <Link to="/home">
                    <img src={require("../assets/logo_transparent.png")} alt="doin8/home"
                     className="rounded-full w-1/12 lg"/>
                </Link>

            </div>

            <p className="text-sm text-white">Doin8</p>
        </div>
    )
}

export default HeadNav