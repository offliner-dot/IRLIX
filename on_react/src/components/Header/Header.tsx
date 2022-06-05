import React from 'react';
import logo from "../../assets/logo/Logo.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="IRLIX"/>
            </div>
        </header>
    );
};

export default Header;