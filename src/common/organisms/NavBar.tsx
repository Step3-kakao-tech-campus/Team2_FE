import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <img src="tabbar.png" alt="Tabbar" className="navbar__tabbar" />
            <img src="logo.png" alt="Logo" className="navbar__logo" />
            <div className="navbar__menu">
                <a href="#menu1">네컷 앨범</a>
                <a href="#menu2">명예의 전당</a>
                <a href="#menu3">주간 네컷</a>
                <a href="#menu4">더보기 리그</a>
            </div>
            <Link to="/login">
                <button className="navbar__login-button">Login</button>
            </Link>
            <button className="navbar__signup-button">Sign Up</button>
        </div>
    );
};

export default NavBar;
