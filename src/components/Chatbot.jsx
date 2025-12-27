import React, { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

    return (
        <div className="chatbot-wrapper">
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <h3>AI Assistant</h3>
                    <button onClick={() => setIsOpen(false)}>×</button>
                </div>
                <div className="chatbot-body">
                    {messages.length === 0 && (
                        <p className="chatbot-welcome">Hello! I'm here to help you with our products and services.</p>
                    )}
                    {messages.map(m => (
                        <div key={m.id} className={`chat-message ${m.role === 'user' ? 'user' : 'ai'}`}>
                            {m.content}
                        </div>
                    ))}
                    {isLoading && <div className="chat-loading">Thinking...</div>}
                </div>
                <form className="chatbot-input" onSubmit={handleSubmit}>
                    <input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask me anything..."
                    />
                    <button type="submit" disabled={isLoading}>➤</button>
                </form>
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
