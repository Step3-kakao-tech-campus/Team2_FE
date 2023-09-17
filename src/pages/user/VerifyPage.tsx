import React, { useState, ChangeEvent } from 'react';

import './style.scss';
import './VerifyPage.scss';
import { Container, Title, Content } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import ButtonWithImage from '../../common/atoms/ButtonWithImage';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';
import LineOr from './components/LineOr';
import { validateEmail, validateNumeric } from '../../utils';

const VerifyPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    // const navigate = useNavigate();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        validateNumeric(event);
        setCode(event.target.value);
    };

    const handleSendVerificationClick = () => {
        if (!validateEmail(email)) {
            alert('유효하지 않은 이메일입니다.');
            return;
        }

        alert('인증코드를 전송했습니다.');
    };

    const handleConfirmCodeClick = () => {
        console.log('인증번호 확인');
    };

    const handleKakaoSignupClick = () => {};

    const handleGoogleSignupClick = () => {};

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
                <h1>회원가입</h1>
            </Title>
            <Content>
                <form className="form_login">
                    <div className="box_input">
                        <Input
                            type="email"
                            className="input_email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <Button
                        className="send_verification"
                        onClick={handleSendVerificationClick}
                    >
                        인증번호 전송
                    </Button>
                    <div className="confirm_code">
                        <div className="box_input">
                            <Input
                                type="text"
                                className="input_code"
                                value={code}
                                onChange={handleCodeChange}
                                placeholder="0000000"
                            />
                        </div>
                        <Button
                            className="confirm_code"
                            onClick={handleConfirmCodeClick}
                        >
                            인증번호 확인
                        </Button>
                    </div>
                    <LineOr />
                    <ButtonWithImage
                        className="signup with_kakao"
                        onClick={handleKakaoSignupClick}
                        imageSrc="logo_kakao.png"
                    >
                        카카오톡 계정으로 회원가입
                    </ButtonWithImage>
                    <ButtonWithImage
                        className="signup with_google"
                        onClick={handleGoogleSignupClick}
                        imageSrc="logo_google.png"
                    >
                        구글 계정으로 회원가입
                    </ButtonWithImage>
                </form>
            </Content>
        </Container>
    );
};

export default VerifyPage;
