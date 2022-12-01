import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Component Files Import
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import Explore from "./pages/Explore";
import Charity from "./pages/Charity";
import Register from "./pages/Register";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout />}>
                    <Route index element = {<Home />} />
                    <Route path = "home" element = {<Home />} />
                    <Route path = "dashboard" element = {<Dashboard />} />
                    <Route path = "explore" element = {<Explore />} />
                    <Route path = "charity" element = {<Charity />} />
                    <Route path = "register" element = {<Register />} />
                    <Route path = "*" element = {<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App/>
);