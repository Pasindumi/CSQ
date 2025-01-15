import React from 'react';
import '../styles/navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="navbar-top">
        <div className="brand">BrandLogo</div>
        <div className="top-links">
          <a href="#help">Help</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

     
      <div className="navbar-bottom">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
