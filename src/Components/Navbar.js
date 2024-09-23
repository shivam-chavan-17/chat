import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaPen, FaEdit, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="left">
                <div className="one">
                    <a href="/">Logo</a>
                </div>
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
                    <div className="login-mobile">
                        <button>Login</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
