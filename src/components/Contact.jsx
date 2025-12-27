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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3906.1905485802667!2d75.4960565!3d11.7516228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4264f15048035%3A0x2186a5d4e4a5601e!2sGolden%20Plastics%20And%20Switch%20Boards!5e0!3m2!1sen!2sin!4v1766856179581!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Golden Plastics Location"
                        ></iframe>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Golden+Plastics+And+Switch+Boards,+Thalassery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: 'block', width: 'fit-content', margin: '1rem auto 0', textAlign: 'center' }}
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
