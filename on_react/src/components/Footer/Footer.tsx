import React from 'react';
import logo from "../../assets/logo/Logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="IRLIX"/>
            </div>
        </footer>
    );
};

export default Footer;