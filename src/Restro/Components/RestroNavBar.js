import React, { useState } from "react";
import './restroNavBarStyling.css';
import { Link } from "react-router-dom";

const RestroNavbar = () => {

    

    return (
            <div className="navbar">
                <div className="logo">
                    <img
                        src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                        alt=""
                    />
                </div>

                <div className="location-searchbar">
                    <div className="location">
                        <div className="location-icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div className="location-text">
                            <input type="text" placeholder="Jaipur" />
                        </div>
                        <div className="caret">
                            <i class="fa fa-caret-down"></i>

                        </div>
                    </div>
                    <div className="separator"></div>

                    <div className="searchbar">
                        <Link to={`/search/:${searchRestro}`}>
                            <div className="search-icon">
                                <i class="fa fa-search"></i>
                            </div>
                        </Link>
                        <div className="searchbar-input">
                            <input
                                onChange={e => setSearchRestro(e.target.value)}
                                value={searchRestro}
                                type="text"
                                placeholder="Search for a restaurant, cuisine or a dish"
                            />
                        </div>

                    </div>

                </div>

                <div className = "pizza-icon">
                <img src="https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" />
                <Link to="/"><i class="fa fa-caret-down"></i></Link>
                </div>

            </div>
    
    );
};

export default RestroNavbar;