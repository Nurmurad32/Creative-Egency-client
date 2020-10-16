import React from 'react';
import BusinessPartner from '../BusinessPartner/BusinessPartner';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessPartner></BusinessPartner>
        </div>
    );
};

export default Header;