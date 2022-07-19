import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>Your Logo</h1>
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/home">Pricing</a></li>
                <li><a href="/home">Inventory</a></li>
                <li><a href="/home">About</a></li>
                <li><a href="/home">Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;