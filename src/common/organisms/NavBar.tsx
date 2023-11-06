import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <img src="tabbar.png" alt="Tabbar" className="navbar__tabbar" />
            <Link to={'/'}>
                <img src="logo.png" alt="Logo" className="navbar__logo" />{' '}
            </Link>
            <div className="navbar__menu">
                <Link to="album">네컷 앨범</Link>
                <Link to="challenge">도전 과제</Link>
                <Link to="account">내 정보</Link>
            </div>
            <button className="navbar__login-button">
                <Link to="/login">로그인</Link>
            </button>
        </div>
    );
};

export default NavBar;
