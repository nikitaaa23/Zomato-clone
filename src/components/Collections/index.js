import React from "react";
import "./collections.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

const collections = [
    {
        id: 1,
        title: "Most Romantic Restaurants",
        places: "20 Places",
        image: "https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg?output-format=webp",
    },
    {
        id: 2,
        title: "Insta Worthy",
        places: "18 Places",
        image: "https://b.zmtcdn.com/data/collections/a5da9440d06307eb45e20715c7e43a00_1618825302.jpg?output-format=webp",
    },
    {
        id: 3,
        title: "Best of Jaipur",
        places: "36 Places",
        image: "https://b.zmtcdn.com/data/collections/176fd420edb8c9cdfd6b4d259c9e719f_1537335484.jpg?output-format=webp" 
    },
    {
        id: 4,
        title: "Rooftops",
        places: "22 Places",
        image: "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg?output-format=webp" 
    },
];


const Collections = () => {
    return(
        <Router>
            <div className="collections-grid">
                <div className="collections-content">
                    <h3>Collections</h3>
                    <div className="description">
                        <p>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends
                        </p>
                        <Link to="/" className="description-link">All collections in Jaipur<i class="fa fa-caret-right"></i></Link>
                    </div>
                </div>
                <div className="collection-card-grid">
                    {collections.map((collection) => {
                        return (
                            <div className="collection-card">
                                <img src = {collection.image} />
                                <div className="card-overlay">
                                    <div className="collection-card-text">
                                        <h4>{collection.title}</h4>
                                        <p>
                                            {collection.places} <Link to = "/"><i class="fa fa-caret-right"></i></Link>
                                        </p>
                                    </div>
                                    </div>
                                    </div>
                        );
                    })}
                </div>
            </div>
        </Router>
    )
};

export default Collections;