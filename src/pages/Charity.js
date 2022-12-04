import React from "react";
//eslint-disable-next-line
import styles from "../index.css"
import HeadNav from "../components/HeadNav";

const Charity = () => {
    const charity = "placeholder"
    return (
        <div>
            <HeadNav/>
            <h1>
                Donate to {charity}
            </h1>
        </div>
    )
}

export default Charity