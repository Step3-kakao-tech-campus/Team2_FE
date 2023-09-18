import React from 'react';
import './NavMobile.scss';

const NavMobile = () => {
  return (
    <div className="navbar">
      <div className="navbar__item">
        <img src="home.png" alt="메인 페이지" className="navbar__item__logo"/>
        <p className="navbar__item__text">메인</p>
        <img src="select.png" className="navbar__item__bar"/>
      </div>
      <div>
        <img src="select.png" className="navbar__bar"/>
      </div>
      <div className="navbar__item">
        <img src="honor.png" alt="명예의 전당" className="navbar__item__logo"/>
        <p className="navbar__item__text">명예의 전당</p>
        <img src="select.png" className="navbar__item__bar"/>
      </div>
      <div>
        <img src="select.png" className="navbar__bar"/>
      </div>
      <div className="navbar__item">
        <img src="weekly.png" alt="주간 네컷" className="navbar__item__logo"/>
        <p className="navbar__item__text">주간 네컷</p>
        <img src="select.png" className="navbar__item__bar"/>
      </div>
      <div>
        <img src="select.png" className="navbar__bar"/>
      </div>
      <div className="navbar__item">
        <img src="user_logo.png" alt="마이 페이지" className="navbar__item__logo"/>
        <p className="navbar__item__text">마이 페이지</p>
      </div>
    </div>
  );
};

export default NavMobile;
