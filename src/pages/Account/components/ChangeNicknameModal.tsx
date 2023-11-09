import React, { useState } from 'react';
import Button from '../../../common/atoms/Button';
import Input from '../../../common/atoms/Input';
import './ChangeNicknameModal.scss';
import Modal from '../../../common/molecules/Modal';

interface ModalProps {
    setModalOpen: (isOpen: boolean) => void;
    currentNickname: string;
    onVerify: (newNickname: string) => void;
    onChangeNickname: (newNickname: string) => void;
}

const ChangeNicknameModal: React.FC<ModalProps> = ({
    setModalOpen,
    currentNickname,
    onVerify,
    onChangeNickname,
}) => {
    const [newNickname, setNewNickname] = useState(currentNickname);
    const [isVerified, setIsVerified] = useState(false);
    const [isNicknameValid, setIsNicknameValid] = useState(true);

    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewNickname(value);
    };

    const handleVerifyNickname = () => {
        setIsVerified(true);
        onVerify(newNickname);
        setIsNicknameValid(!isNicknameValid);
    };

    const handleChangeNickname = () => {
        onChangeNickname(newNickname);
        closeModal();
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Modal className="nickName" setModalOpen={setModalOpen}>
            <div className="modal_header">
                <div className="modal_title">닉네임 변경</div>
            </div>
            <div className="modal_body">
                <div className="check_nickname">
                    <Input
                        type="text"
                        id="nickname"
                        className="nickname"
                        value={newNickname}
                        onChange={handleNicknameChange}
                        placeholder="닉네임"
                    />
                    <Button
                        className="verify_nickname"
                        onClick={handleVerifyNickname}
                    >
                        중복 조회
                    </Button>
                </div>
                {isVerified && (
                    <div
                        className="varify_result"
                        style={{ color: isNicknameValid ? 'black' : 'red' }}
                    >
                        {isNicknameValid
                            ? '사용가능한 닉네임입니다.'
                            : '사용할 수 없는 닉네임입니다.'}
                    </div>
                )}
            </div>
            <div className="modal_footer">
                <Button className="cancle" onClick={closeModal}>
                    취소
                </Button>
                <Button
                    className="confirm_nickname"
                    onClick={handleChangeNickname}
                >
                    닉네임 변경
                </Button>
            </div>
        </Modal>
    );
};

export default ChangeNicknameModal;
