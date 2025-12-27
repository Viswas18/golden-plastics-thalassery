import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo">
                    Golden <span>Plastics</span>
                </div>
                <div className="menu-toggle" onClick={() => setIsMobile(!isMobile)}>
                    <div className={`hamburger ${isMobile ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                    <li><a href="#hero" onClick={() => setIsMobile(false)}>Home</a></li>
                    <li><a href="#services" onClick={() => setIsMobile(false)}>Services</a></li>
                    <li><a href="#products" onClick={() => setIsMobile(false)}>Products</a></li>
                    <li><a href="#contact" onClick={() => setIsMobile(false)}>Contact</a></li>
                    <li className="mobile-only"><a href="tel:09497843520" className="btn-primary" onClick={() => setIsMobile(false)}>Call Now</a></li>
                </ul>
                <div className="nav-contact">
                    <a href="tel:09497843520" className="btn-primary">Call Now</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
