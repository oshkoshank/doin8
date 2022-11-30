import React from "react";

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
