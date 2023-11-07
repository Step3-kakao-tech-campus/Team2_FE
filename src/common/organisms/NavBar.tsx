import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/user';
import { LocalImage } from '../atoms/Image';

const NavBar = () => {
    const user = useRecoilValue(userState);

    return (
        <div className="navbar">
            <LocalImage
                src="tabbar.png"
                alt="Tabbar"
                className="navbar__tabbar"
                width="30px"
            />
            <Link to={'/'}>
                <LocalImage
                    src="logo.png"
                    alt="Logo"
                    className="navbar__logo"
                />
            </Link>
            {user ? (
                <div className="navbar__menu">
                    <Link to="album">네컷 앨범</Link>
                    <Link to="challenge">도전 과제</Link>
                    <Link to="account">내 정보</Link>
                </div>
            ) : (
                <div className="navbar__login-Assist-text">
                    로그인으로 네컷앨범을 이용해보세요
                </div>
            )}
            <div className="navbar__action">
                {user ? (
                    //user avatar
                    <>
                        <Link to="account">
                            <LocalImage
                                src="userIcon.png"
                                width="40px"
                                height="40px"
                                alt="Avatar"
                                className="navbar__avatar"
                            />
                        </Link>
                        <div className="navbar__username">{user.nickname}</div>
                        <Link to="logout">
                            <LocalImage
                                src="logout.png"
                                width="25px"
                                height="25px"
                                alt="logout"
                            />
                        </Link>
                    </>
                ) : (
                    <Link className="btn navbar__login-button" to="/login">
                        로그인
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
