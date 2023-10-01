import React from 'react';

import Button from '../../../common/atoms/Button';
import { FormItem } from '../../../common/atoms/Form';
import './UserInfo.scss';

interface UserInfoProps {
    name: string;
    nickname: string;
    email: string;
    onNicknameChangeClick: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({
    name,
    nickname,
    email,
    onNicknameChangeClick,
}) => {
    return (
        <div className="user_info">
            <FormItem>
                <span>이름</span> {name}
            </FormItem>
            <FormItem className="nickname">
                <div>
                    <span>닉네임</span> {nickname}
                </div>
                <Button
                    className="change_nickname"
                    onClick={onNicknameChangeClick}
                    style={{ width: '100px', height: '30px' }}
                >
                    닉네임 변경
                </Button>
            </FormItem>
            <FormItem>
                <span>이메일</span> {email}
            </FormItem>
        </div>
    );
};

export default UserInfo;
