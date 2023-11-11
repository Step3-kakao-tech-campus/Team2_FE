import { FC, ReactNode, useState, ChangeEvent } from 'react';
import Modal from '../../../../common/organisms/Modal';
import { LocalImage } from '../../../../common/atoms/Image';
import Input from '../../../../common/atoms/Input';

import './ManageGroupModal.scss';
import Button from '../../../../common/atoms/Button';

interface Member {
    memberId: number;
    nickname: string;
    image: string;
}

interface MemberCardProps {
    key: number;
    member: Member;
}

const MemberCard: FC<MemberCardProps> = ({ member }) => {
    const shortenedNickname =
        member.nickname.length > 8
            ? member.nickname.slice(0, 8) + '...'
            : member.nickname;

    return (
        <div className="member_card">
            <LocalImage
                className="user_photo circle"
                src={member.image}
                alt={member.nickname}
                width="100px"
            />
            <div className="remove_member">X</div>
            <div className="user_nickname">{shortenedNickname}</div>
        </div>
    );
};

interface ManageGroupModalProps {
    members?: Member[];
    searchUser: (nickname: string) => void;
    inviteMember: (userId: string) => void;
    closeModal: () => void;
    deleteGroup: () => void;
}

const MemberList: FC<{ members?: Member[] }> = ({ members }) => {
    return (
        <div className="member_list">
            {members?.map(member => (
                <MemberCard key={member.memberId} member={member} />
            ))}
            <div className="member_card">
                <div className="invite_user circle">그룹원 초대하기</div>
            </div>
        </div>
    );
};

const ManageGroupModal: FC<ManageGroupModalProps> = ({
    members,
    searchUser,
    inviteMember,
    closeModal,
    deleteGroup,
}) => {
    const modalProps = {
        width: '350px',
        title: '그룹관리',
        cancelText: '닫기',
        confirmText: '그룹 삭제',
        onClose: closeModal,
        onConfirm: deleteGroup,
    };
    console.log('모달: member', members);

    const [searchUserNickname, setSearchUserNickname] = useState('');
    const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchUserNickname(value);
    };

    return (
        <Modal {...modalProps}>
            <div className="manage_group">
                <div className="search_user">
                    <Input
                        type="text"
                        id="nickname"
                        className="nickname"
                        value={searchUserNickname}
                        onChange={onChangeNickname}
                        placeholder="닉네임으로 초대할 유저를 검색하세요"
                    ></Input>
                    <LocalImage
                        className="search_icon"
                        src="search.png"
                        width="30px"
                    ></LocalImage>
                </div>
                {/* <div className="members">{MemberCard()}</div> */}
                <MemberList members={members} />
                <div className="invite_link">
                    <div className="link">https://asdasd</div>
                    <Button className="copy_link">링크 복사</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ManageGroupModal;
