import React, { useState } from "react";
import Restaurants from "./data";
import RestroNavbar from "./Components/RestroNavBar";

const RestroPage = () => {
    const [overView, setOverview] = useState(true);
    const [orderOnline, setOrderOnline] = useState(false);
    
    const changeActivePage =(e) => {
        switch (e.target.name) {
            case "order":
            setOrderOnline(true);
            setOverview(false);
            break;

            default:
            setOrderOnline(true);
            setOverview(false);
            break;

        }
    };

    return(
        <div>
            <RestroNavbar />           

        </div>
    )
}

export default RestroPage;