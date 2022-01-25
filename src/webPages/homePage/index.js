import React from "react";
import Header from '../../components/header';
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import './index.css';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <Services />
            <Footer/>
        </div>
    );
}

export default HomePage;