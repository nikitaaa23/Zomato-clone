import React from "react";
import './header.css';

const Header = () => {
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
                    <div className="seperator"></div>
                    <div className="searchbar">
                        <div className="search-icon">
                            <i class="fa fa-search"></i>
                        </div>
                        <div className="searchbar-input">
                            <input type="text" placeholder="Search for a restaurant, cuisine or a dish" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;