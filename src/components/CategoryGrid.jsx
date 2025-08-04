/* eslint-disable no-useless-escape */
import React from 'react';
import '../css/categoryGrid.css';

const categories = [
  {
    title: 'Dresses',
    image: 'images/products/kri.jpg',
  },
  {
    title: 'Tops',
    image: 'images/products/kri.jpg',
  },
  {
    title: 'Bottoms',
    image: 'images/products/kri.jpg',
  },
  {
    title: 'Coord Sets',
    image: 'images/products/kri.jpg',
  },
];

const CategoryGrid = () => {
  return (
    <div className="category-section">
      <div className="left-hero">
        <img src="images/products/kri.jpg" alt="Hero" className="hero-img" />
        <div className="category-label">New Arrivals</div>
      </div>

      <div className="right-grid">
        {categories.map((cat, i) => (
          <div key={i} className="category-card">
            <img src={cat.image} alt={cat.title} />
            <div className="category-label">{cat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
