import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Visit Us</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <h3>Address</h3>
                            <p>Near Fly OVER, T.C. Road</p>
                            <p>Thalassery</p>
                        </div>
                        <div className="info-item">
                            <h3>Contact Us</h3>
                            <p><a href="tel:09497843520">9497 843 520</a></p>
                            <p><a href="tel:09744365058">9744 365 058</a></p>
                            <p><a href="mailto:goldendesign2001@gmail.com">goldendesign2001@gmail.com</a></p>
                        </div>
                        <div className="info-item">
                            <h3>Opening Hours</h3>
                            <p>Mon - Sat: 8:30 AM - 7:30 PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.428669769348!2d75.492!3d11.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ1JzAwLjAiTiA3NcKwMjknMzEuMiJF!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Golden Plastics Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
