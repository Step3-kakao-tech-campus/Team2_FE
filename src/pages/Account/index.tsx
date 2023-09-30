import React, { useState } from 'react';

import { MainContainer } from '../../common/atoms/Container';
import Profile from './components/Profile';
import UserInfo from './components/UserInfo';
import Notice from './components/Notice';
import ChangeNicknameModal from './components/ChangeNicknameModal';

import './Account.scss';

const AccountPage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentNickname, setCurrentNickname] = useState('수용이');

    const handleChangeNicknameClick = () => {
        setModalOpen(true);
    };

    const handleVerifyNickname = (newNickname: string) => {
        console.log('닉네임 검사');
    };

    const handleChangeNicknameComfirmClick = (newNickname: string) => {
        console.log('닉네임 변경');
        setCurrentNickname(newNickname);
    };

    const ModalProps = {
        setModalOpen: setModalOpen,
        currentNickname: currentNickname,
        onVerify: handleVerifyNickname,
        onChangeNickname: handleChangeNicknameComfirmClick,
    };

    const handleNoticeClick = () => {
        console.log('');
    };

    const handleInfoClick = () => {
        console.log('');
    };

    const profileProps = {
        img: 'user.png',
        titleIdx: 2,
        achievementTitle: [
            '네컷 인플루언서',
            '인싸가 될테야!',
            '혼술? 아니 혼컷',
        ],
    };

    const userInfoProps = {
        name: '최수용',
        nickname: currentNickname,
        email: 'example@gmail.com',
        onNicknameChangeClick: handleChangeNicknameClick,
    };

    return (
        <MainContainer
            className="account_contatiner"
            style={{
                margin: '20px',
            }}
        >
            <h2>마이페이지</h2>
            <div className="content">
                <Profile {...profileProps}></Profile>
                <hr />
                <UserInfo {...userInfoProps}></UserInfo>
            </div>
            <hr />
            <Notice
                onNoticeClick={handleNoticeClick}
                onInfoClick={handleInfoClick}
            />
            {isModalOpen && <ChangeNicknameModal {...ModalProps} />}
        </MainContainer>
    );
};

export default AccountPage;
