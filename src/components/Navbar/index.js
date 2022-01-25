import React from "react";
import "./navbar.css";
import { Link, BrowserRouter as Router } from 'react-router-dom';


const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <div className="get-the-app">
                    <i className="fa fa-mobile"></i>
                    Get the app
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Add Restaurant</Link></li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/">Signup</Link></li>
                    </ul>
                </div>
            </div>
        </Router>
    );
};

export default Navbar;