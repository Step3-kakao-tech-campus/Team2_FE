import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import { validateEmail, validateNumeric } from '../../utils';
import { Container, Title, Content } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';
import LineOr from './components/LineOr';

const VerificationPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        validateNumeric(event);
        setCode(event.target.value);
    };

    const handleSendVerificationCodeClick = () => {
        if (!validateEmail(email)) {
            alert('유효하지 않은 이메일입니다.');
            return;
        }

        alert('인증코드를 전송했습니다.');
    };

    const handleConfirmCodeClick = () => {
        console.log('인증번호 확인');
        navigate('/signup');
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
                <Form className="verify">
                    <FormItem>
                        <div className="box_input_with_btn send_verification_code">
                            <div className="box_input with_btn email">
                                <Input
                                    type="email"
                                    className="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <Button
                                className="with_input send_verification_code"
                                onClick={handleSendVerificationCodeClick}
                            >
                                인증번호 전송
                            </Button>
                        </div>
                    </FormItem>

                    <FormItem>
                        <div className="box_input_with_btn confirm_code">
                            <div className="box_input with_btn verification_code">
                                <Input
                                    type="text"
                                    className="verification_code"
                                    value={code}
                                    onChange={handleCodeChange}
                                    placeholder="0000000"
                                />
                            </div>
                            <Button
                                className="with_input confirm_code"
                                onClick={handleConfirmCodeClick}
                            >
                                인증번호 확인
                            </Button>
                        </div>
                    </FormItem>

                    <LineOr />

                    <FormItem>
                        <Button
                            className="signup kakao"
                            onClick={handleKakaoSignupClick}
                            imageSrc="logo_kakao.png"
                        >
                            카카오톡 계정으로 회원가입
                        </Button>
                    </FormItem>

                    <FormItem>
                        <Button
                            className="signup google"
                            onClick={handleGoogleSignupClick}
                            imageSrc="logo_google.png"
                        >
                            구글 계정으로 회원가입
                        </Button>
                    </FormItem>
                </Form>
            </Content>
        </Container>
    );
};

export default VerificationPage;
