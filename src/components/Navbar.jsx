import React from 'react';
import skyLogo from '../assets/sky-logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-simple-content">
                <img src={skyLogo} alt="Sky" className="navbar-logo" />
            </div>
            <div className="navbar-gradient-line"></div>
        </nav>
    );
};

export default Navbar;
