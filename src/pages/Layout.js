import React from "react";
import {Outlet} from "react-router-dom";
//eslint-disable-next-line
import styles from "../index.css"

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default Layout;