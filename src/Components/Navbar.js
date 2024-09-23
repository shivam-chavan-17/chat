import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaPen, FaEdit, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    return (
        <nav className="nav">
            <div className="left">
                <div className="one">
                    <a href="/">Logo</a>
                </div>
                {/* Links visible only on larger screens or when the menu is open on small screens */}
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <div className="two">
                        <FaHome className="icon" />
                        <a href="/">Explore</a>
                    </div>
                    <div className="three">
                        <FaPen className="icon" />
                        <a href="/">Create</a>
                    </div>
                    <div className="four">
                        <FaEdit className="icon" />
                        <a href="/">Edit</a>
                    </div>
                    {/* Login button in menu for small screens */}
                    <div className="login-mobile">
                        <button>Login</button>
                    </div>
                </div>
            </div>
            {/* Right section with the hamburger icon and login button */}
            <div className="right">
                {/* Hamburger Icon for small screens */}
                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                {/* Login button outside the menu for large screens */}
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
