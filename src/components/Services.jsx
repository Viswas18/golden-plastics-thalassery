import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 2,
            title: "Laser Cutting",
            description: "Precision laser cutting for acrylic and other materials.",
            icon: "✂️"
        },
        {
            id: 3,
            title: "Acrylic & LED Sign Boards",
            description: "High quality acrylic letters and LED sign boards for branding.",
            icon: "✨"
        },
        {
            id: 4,
            title: "Engraving & Name Boards",
            description: "Granite engraving, wooden name boards, and house name plates.",
            icon: "🏷️"
        },
        {
            id: 5,
            title: "Sticker Cutting",
            description: "Computerized sticker cutting for various applications.",
            icon: "🎨"
        },
        {
            id: 6,
            title: "Mementos",
            description: "Custom mementos and multi-wood letters.",
            icon: "🏆"
        },
        {
            id: 1,
            title: "Switch Boards",
            description: "Custom designed switch boards for home and office.",
            icon: "⚡"
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
