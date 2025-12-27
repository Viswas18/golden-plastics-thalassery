import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductGallery from './components/ProductGallery';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <ProductGallery />
      <Contact />
      <Chatbot />
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#020617', color: '#64748B', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} Golden Plastics. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
