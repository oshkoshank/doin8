import React from "react";
//eslint-disable-next-line
import styles from "../index.css"

const Button = (props) => {
    return (
        <div>
            <button name={props.name}>
                {props.text}
            </button>
        </div>
    )
}

export default Button
