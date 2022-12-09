import React from "react";
//eslint-disable-next-line
import styles from "../index.css";
import {Link} from "react-router-dom";
import HeadNav from "../components/HeadNav";
import Footer from "../components/Footer";

const Scratch2 = () => {
    return (
        //Main Div Start
        <div>
            {/* Header Start */}
            {/*<HeadNav />*/}
            {/* Header End */}

            {/* Main Container Start */}
            <div>

                {/* Heading Container */}
                <div>
                    Register As Charity
                </div>
                {/* Heading Container End */}

                {/* Forms Container */}
                <div>

                    {/* Form 1 */}
                    <form method={"get"}>

                        {/*Charity Name Input*/}
                        <div>
                            <input required="required"
                                   type="text"
                                   className={"FancyInput"}
                                   placeholder={"Charity Name"}
                            />
                        </div>

                        2


                    </form>
                    {/* Form 1 End */}


                </div>
                {/* Forms Container End */}

            </div>

            {/* Footer Start */}
            {/*<Footer />*/}
            {/* Footer End */}

        </div>
    )
}

export default Scratch2;