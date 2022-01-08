import React, { useState, useEffect } from "react";
import Register from "./component/register/Register";
import Topbar from "./component/topbar/Topbar";
import Services from "./pages/ourservices/Services.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Blood from "./pages/blood/Blood";
import About from "./pages/about/About";

function App() {
    return (
        <div>
            <Router>
                <Topbar />
                {/* <Register /> */}

                <Route exact path="/">
                    <Register />
                </Route>

                <Route path="/service">
                    <Services />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/why-blood">
                    <Blood />
                </Route>
                <Route path="/contact">
                    <About />
                </Route>
            </Router>
        </div>
    );
}

export default App;
