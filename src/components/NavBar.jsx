import React from "react";
import "../style/Navbar.css"; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* 
      <div className="logo">
        <img src="discord-logo.png" alt="Discord Logo" className="logo-image" />
      </div>*/}
      <div className='nav-items'>
        <a className=' nav-item' href="/">🏠</a>
        <a className='nav-item' href="/">💬</a>
        <a className='nav-item' href="/">🛒 </a>
        <a className='nav-item' href="/">⚙️</a>

      </div>
      <div className='user-profile'>
      </div>
    </nav>
  );
};

export default Navbar;
