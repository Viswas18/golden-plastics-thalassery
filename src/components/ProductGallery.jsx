import React, { useState } from 'react';
import { products } from '../data/products';
import './ProductGallery.css';

const ProductGallery = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <section id="products" className="products-section">
            <div className="container">
                <h2 className="section-title">Product Showcase</h2>

                <div className="product-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <span className="product-category">{product.category}</span>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
