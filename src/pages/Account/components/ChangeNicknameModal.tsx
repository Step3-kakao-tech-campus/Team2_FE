import { useState, FC, ChangeEvent } from 'react';
import Button from '../../../common/atoms/Button';
import Input from '../../../common/atoms/Input';
import './ChangeNicknameModal.scss';
import Modal from '../../../common/organisms/Modal';

interface ChangeNicknameModalProps {
    currentNickname: string;
    onClose: () => void;
    onVerify: (newNickname: string) => void;
    onChangeNickname: (newNickname: string) => void;
}

const ChangeNicknameModal: FC<ChangeNicknameModalProps> = ({
    currentNickname,
    onClose,
    onVerify,
    onChangeNickname,
}) => {
    const [newNickname, setNewNickname] = useState(currentNickname);
    const [isVerified, setIsVerified] = useState(false);
    const [isNicknameValid, setIsNicknameValid] = useState(true);

    const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        onClose();
    };

    const modalProps = {
        title: '닉네임 변경',
        confirmText: '닉네임 변경',
        onClose: onClose,
        onConfirm: handleChangeNickname,
    };

    return (
        <Modal {...modalProps}>
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
                    className="verify_result"
                    style={{ color: isNicknameValid ? 'black' : 'red' }}
                >
                    {isNicknameValid
                        ? '사용 가능한 닉네임입니다.'
                        : '사용할 수 없는 닉네임입니다.'}
                </div>
            )}
        </Modal>
    );
};

export default ChangeNicknameModal;
