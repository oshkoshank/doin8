import React from "react";
//eslint-disable-next-line
import styles from "../index.css";
import {Link} from "react-router-dom";

const Scratch2 = () => {
    return (
        <div className={"mb-6 md:mb-0"}>
            <div className={"md:flex flex-row"}>
                <Link to={"/charity"}>
                    <p className={"ButtonLinkUI bg-amber-600 inline-block"}>
                        Find Charities
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Scratch2;