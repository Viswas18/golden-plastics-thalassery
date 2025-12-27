import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot-wrapper">
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <h3>AI Assistant</h3>
                    <button onClick={() => setIsOpen(false)}>×</button>
                </div>
                <div className="chatbot-body">
                    <p>Hello! I am currently offline. Please call us for immediate assistance.</p>
                </div>
            </div>
            <button
                className="chatbot-fab"
                onClick={() => setIsOpen(!isOpen)}
                title="Chat with us"
            >
                💬
            </button>
        </div>
    );
};

export default Chatbot;
