import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import WorksCarousel from '../WorksCarousel/WorksCarousel';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <WorksCarousel></WorksCarousel>
            <ClientsFeedback></ClientsFeedback>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;