import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg-2.png';

const Hero = () => {
    return (
        <section
            id="hero"
            className="hero"
            style={{ backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.7)), url(${heroBg})` }}
        >
            <div className="container hero-content">
                <h1 className="hero-title">
                    The Complete <br />
                    <span className="text-gold">Acrylic Work</span>
                </h1>
                <p className="hero-subtitle">
                    Laser Cutting • Sign Boards • Switch Boards • Plastic Works
                </p>
                <div className="hero-buttons">
                    <a href="#products" className="btn-primary">Our Products</a>
                    <a href="#services" className="btn-outline">Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
