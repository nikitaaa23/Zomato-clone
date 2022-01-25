import React from "react";
import Header from '../../components/header';
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

import './index.css';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <Footer/>
        </div>
    );
}

export default HomePage;