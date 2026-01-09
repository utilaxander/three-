import React from 'react';
import skyLogo from '../assets/sky-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={skyLogo} alt="Sky" className="footer-logo" />
                    <span className="footer-copyright">© 2026 Sky UK</span>
                </div>

                <div className="footer-center">
                    <div className="footer-links-row">
                        <a href="#">Privacy options</a>
                        <a href="#">Terms & conditions</a>
                        <a href="#">Privacy & cookies notice</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Site map</a>
                        <a href="#">Contact us</a>
                    </div>
                    <div className="footer-links-row">
                        <a href="#">Complaints</a>
                        <a href="#">Sky Group</a>
                        <a href="#">Store locator</a>
                    </div>
                </div>

                <div className="footer-right">
                    <span className="country-label">Country:</span>
                    <span className="country-flag">🇬🇧</span>
                    <span className="country-arrow">⌄</span>
                </div>
            </div>
            <div className="footer-gradient-line"></div>
        </footer>
    );
};

export default Footer;
