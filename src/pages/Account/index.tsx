import { useState, FC } from 'react';
import { useRecoilState } from 'recoil';
import { MainContainer } from '../../common/atoms/Container';
import Profile from './components/Profile';
import UserInfo from './components/UserInfo';
import Notice from './components/Notice';
import ChangeNicknameModal from './components/ChangeNicknameModal';
import { useQuery } from 'react-query';
import './Account.scss';
import { userState } from '../../recoil/user';
import { titleSearchApi, useChangeNickname } from '../../service/titles';

const AccountPage: FC = () => {
    const [user, setUser] = useRecoilState(userState);

    const userId = user?.id ? Number(user?.id) : 0;
    const { mutate: changeTitle } = useChangeNickname();

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentNickname, setCurrentNickname] = useState('수용이');
    const { isLoading, isError, data, error } = useQuery(
        ['userTitles', userId],
        () =>
            userId
                ? titleSearchApi.getUserTitles(userId)
                : Promise.reject('No user ID provided'),
    );
    const handleChangeNicknameClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleVerifyNickname = (newNickname: string) => {
        console.log('닉네임 검사');
        console.log(data);
    };

    const handleChangeNicknameComfirmClick = (newNickname: string) => {
        console.log('닉네임 변경');
        setCurrentNickname(newNickname);
        const nickname = currentNickname;
        changeTitle({ userId, nickname });
    };

    const modalProps = {
        currentNickname: currentNickname,
        onClose: handleCloseModal,
        onVerify: handleVerifyNickname,
        onChangeNickname: handleChangeNicknameComfirmClick,
    };

    const handleNoticeClick = () => {
        console.log('');
    };

    const handleInfoClick = () => {
        console.log('');
    };

    function getTitleNames(data: any) {
        return data.titles.map(function (item: any) {
            return item.titleName;
        });
    }

    const profileProps = {
        img: 'user.png',
        titleIdx: 2,
        achievementTitle: getTitleNames(data),
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
            {isModalOpen && <ChangeNicknameModal {...modalProps} />}
        </MainContainer>
    );
};

export default AccountPage;
