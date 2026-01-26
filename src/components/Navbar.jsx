import React, { useState } from 'react';
import threeLogo from '../assets/three-logo.png';
// Using react-icons for standard icons as requested by the design analysis
// If react-icons is not installed, we might need to use generic standard unicode or SVG icons.
// For now, I will use SVGs directly to avoid dependency issues if react-icons isn't present.

const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: 'block' }}
    >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const BasketIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="three-navbar">
            {/* Top White Strip */}
            <div className="three-navbar-top">
                <div className="three-container top-row">
                    <div className="three-left-section">
                        <img src={threeLogo} alt="Three" className="three-logo" />
                        <div className="three-tabs">
                            <a href="#" className="three-tab active">Personal</a>
                            <a href="#" className="three-tab">Business</a>
                        </div>
                    </div>

                    {/* Desktop Contact Info (Hidden on Mobile) */}
                    <div className="three-right-section desktop-only">
                        <div className="three-contact-group">
                            <span className="three-phone">Order by phone: 0800 033 8006</span>
                            <div className="three-util-links">
                                <a href="#">Blog</a>
                                <span className="util-divider">|</span>
                                <a href="#">Coverage checker</a>
                                <span className="util-divider">|</span>
                                <a href="#">Store locator</a>
                            </div>
                        </div>
                    </div>

                    {/* Actions Row - Always visible or controlled by CSS */}
                    <div className="three-actions-row">
                        <a href="#" className="three-action-link">
                            <UserIcon />
                            <span className="desktop-text">Login/Register</span>
                        </a>
                        <a href="#" className="three-action-link">
                            <BasketIcon />
                            <span className="desktop-text">Basket</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Coral Strip */}
            <div className={`three-navbar-main ${isMenuOpen ? 'open' : ''}`}>
                <div className="three-container main-row">
                    {/* Menu Button - Left on Mobile */}
                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <MenuIcon />
                    </button>

                    <div className="three-main-links">
                        <a href="#" className="three-nav-link">Shop</a>
                        <a href="#" className="three-nav-link">Why Three?</a>
                        <a href="#" className="three-nav-link">Help</a>
                    </div>

                    <div className="store-search-box">
                        <input type="text" placeholder="Search three.co.uk" />
                        <button><SearchIcon /></button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown Content (Simplified for this task) */}
            {isMenuOpen && (
                <div className="mobile-menu-content">
                    <a href="#" className="mobile-link">Personal</a>
                    <a href="#" className="mobile-link">Business</a>
                    <hr />
                    <a href="#" className="mobile-link">Shop</a>
                    <a href="#" className="mobile-link">Why Three?</a>
                    <a href="#" className="mobile-link">Help</a>
                    <hr />
                    <a href="#" className="mobile-link">Login/Register</a>
                    <a href="#" className="mobile-link">Basket</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
