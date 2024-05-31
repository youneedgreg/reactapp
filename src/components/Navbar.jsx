import React from 'react';
import './style.css'; 


export default function Navbar() {
  return (
    <div className="header-top" data-header>
      <div className="container">
        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className="input-wrapper">
          <input type="search" name="search" placeholder="Search product" className="search-field" />

          <button className="search-submit" aria-label="search">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <a href="#" className="logo">
          <h1>MtaaMall</h1>
        </a>

        <div className="hidden md:ml-6 md:block"></div>

        <div className="header-actions">
          <button className="header-action-btn" aria-label="user">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
          </button>

          <button className="header-action-btn" aria-label="favourite item">
            <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
            <span className="btn-badge">0</span>
          </button>
        </div>
      </div>
      </div>
  )
}