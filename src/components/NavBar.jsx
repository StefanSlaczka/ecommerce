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
        <div className=' nav-item active'>Home</div>
        <div className='nav-item'>Chat</div>
        <div className='nav-item'>Friends</div>
        <div>🛒 </div>
        <div className='nav-item'>Settings</div>

      </div>
      <div className='user-profile'>
      </div>
    </nav>
  );
};

export default Navbar;
