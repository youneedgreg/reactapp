// src/IntroSection.js
import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <h1 className="intro-title">Welcome to Mtaamall</h1>
        <p className="intro-description">
          Mtaamall is a platform that connects local businesses with customers, offering the best value, connectivity, and love. Explore a wide range of products and services from your favorite local shops.
        </p>
        <button className="intro-button">Discover More</button>
      </div>
    </section>
  );
};

export default IntroSection;

