import React from "react";
import Header from '../components/header';
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import './index.css';
import Collections from "../components/Collections";
import Localities from "../components/Localities";
import MobileApp from "../components/MobileApp";
import { Switch } from "react-router-dom";

const HomePage = () => {
    return (
        <div>

            <Navbar />
            <Header/>
            <Services />
            <Collections />
            <Localities />
            <MobileApp />
            <Footer/>
        </div>
    );
}

export default HomePage;