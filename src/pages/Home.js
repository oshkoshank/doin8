import React from "react";
import {Link} from "react-router-dom";
//eslint-disable-next-line
import styles from "../index.css"

// Components Import
import Footer from "../components/Footer";
import Button from "../components/Button";
import HeadNav from "../components/HeadNav";

// Assets Import

const Home = () => {
    return (
        // Main Div Start
        <div
            className={"flex h-screen w-full items-center " +
                "justify-center bg-gray-100 bg-cover " +
                "bg-no-repeat bg-[url('assets/rosebanner.jpg')]"}>
            {/* --> Frosted Container Start <-- */}
            <div
                className={"rounded-3xl bg-none px-8 py-5 w-2/3 h-2/3 backdrop-blur-sm flex flex-col place-content-between" +
                    "max-sm:px-4 max-sm:w-screen max-sm:h-screen max-sm:backdrop-blur-sm"}
            >
                {/* --> Image and Logo Start <-- */}
                <div className={"flex flex-row items-center justify-center space-x-60 px-8"}>
                    <h1 className={"mb-8 text-6xl font-gogh text-white"}>
                        Donate to charities, with
                        <span className={"font-bold text-[#FFD046] "}> doin8
                            </span>
                    </h1>
                    <img src={require("../assets/white_logo.png")} alt={"doin8"} width={"200"}/>
                </div>
                {/* --> Image and Logo End <-- */}

                {/* --> Buttons Start <-- */}
                <div className={"px-8 flex flex-row items-center justify-center space-x-40 py-16"}>

                    <Link to={"/charity"}>
                        <p className={"font-elegance FancyTextLink"}>
                            Explore Charities
                        </p>
                    </Link>

                    <Link to={"/dashboard"}>
                        <p className={"font-elegance FancyTextLink"}>
                            Dashboard
                        </p>
                    </Link>

                    <Link to={"/register"}>
                        <p className={"font-elegance FancyTextLink"}>
                            Register Charity
                        </p>
                    </Link>

                </div>
                {/* --> Buttons End <-- */}
            </div>
            {/* --> Frosted Container End <-- */}
        </div>

    )
}

export default Home