import React, { useState, useEffect } from "react";
import './header.css';
import { Link } from 'react-router-dom';
import { Restaurants } from "../../Restro/data";

const Header = () => {
    const [restaurant, setRestaurant] = useState(Restaurants);
    const [searchRestro, setSearchRestro] = useState("");

    useEffect =(() => {
        const filteredRestro = restaurant.filter((restro) => {
            return restro.name.toLowerCase().includes(searchRestro.toLowerCase());
        });
        setRestaurant(filteredRestro);
        console.log(setRestaurant(filteredRestro));
    }, [searchRestro] ) ;


    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <img
                        src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                        alt=""
                    />
                </div>
                <div className="main-text">Discover the best food & drinks in Jaipur</div>
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
                                //onSearchChange = {setSearchRestro}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Header;