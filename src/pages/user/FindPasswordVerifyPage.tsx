import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import './SignupPage.scss';
import { Container, Title, Content } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';
// import { validateEmail, validateNumeric } from '../../utils';

const FindPasswordVerifyPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleVerifyCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVerifyCode(event.target.value);
    };

    const handleSendVerifyCodeClick = () => {};

    const handleConfirmCodeClick = () => {};

    const handleResetPasswordClick = () => {
        navigate('/reset-password');
    };

    return (
        <Container>
            <Title>
                <div className="logo">
                    <LocalImage
                        src="logo_big.png"
                        width="200px"
                        height="auto"
                    />
                </div>
                <h1>비밀번호 찾기</h1>
            </Title>
            <Content>
                <form className="form_find_password">
                    <span className="information">
                        가입하신 아이디로 비밀번호를 찾을 수 있습니다.
                    </span>
                    <div className="input_item">
                        <div className="box_input">
                            <Input
                                type="text"
                                className="input_username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="아이디 입력"
                            />
                        </div>
                    </div>
                    <div className="input_item">
                        <div className="duplicate">
                            <div className="box_input duplicate">
                                <Input
                                    type="email"
                                    className="input_email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="이메일 입력"
                                />
                            </div>
                            <Button
                                className="duplicate send_verification"
                                onClick={handleSendVerifyCodeClick}
                            >
                                인증번호 전송
                            </Button>
                        </div>
                    </div>

                    <div className="input_item">
                        <div className="duplicate">
                            <div className="box_input duplicate">
                                <Input
                                    type="text"
                                    className="input_verify_code"
                                    value={verifyCode}
                                    onChange={handleVerifyCodeChange}
                                    placeholder="000000"
                                />
                            </div>
                            <Button
                                className="duplicate confirm_code"
                                onClick={handleConfirmCodeClick}
                            >
                                인증번호 확인
                            </Button>
                        </div>
                    </div>

                    <Button
                        className="reset_password"
                        onClick={handleResetPasswordClick}
                    >
                        비밀번호 변경
                    </Button>
                </form>
            </Content>
        </Container>
    );
};

export default FindPasswordVerifyPage;
