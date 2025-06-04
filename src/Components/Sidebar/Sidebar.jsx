import React from 'react';
// import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, heading, links }) => {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <h3>{heading}</h3>
        <ul>
          {links.map((link, index) => (
            <li key={index}><a href={link.url}>{link.text}</a></li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Sidebar;
