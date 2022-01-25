import React from "react";
import Header from '../../components/header';
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import './index.css';
import Collections from "../../components/Collections";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <Services />
            <Collections />
            <Footer/>
        </div>
    );
}

export default HomePage;