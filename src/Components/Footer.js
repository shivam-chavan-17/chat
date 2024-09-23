import React from 'react';
import './Footer.css';
import { FaTelegramPlane, FaInstagram, FaTwitter } from 'react-icons/fa'; // Icons for Telegram, Instagram, and X (formerly Twitter)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p className="footer-logo">Logo</p>
            </div>
            <div className="footer-right">
                <p>contact@000000.com</p>
                <div className="social-icons">
                    <a href="https://t.me/yourTelegram" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane className="social-icon" />
                    </a>
                    <a href="https://instagram.com/yourInstagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://twitter.com/yourX" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
