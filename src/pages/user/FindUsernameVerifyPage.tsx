import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import { Container, Title, Content } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';

const FindUsernameVerifyPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleVerificationCodeChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        setVerificationCode(event.target.value);
    };

    const handleSendVerificationCodeClick = () => {};

    const handleConfirmCodeClick = () => {};

    const handleFindUsernameClick = () => {
        navigate('/find-username-result');
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
                <h1>아이디 찾기</h1>
            </Title>
            <Content>
                <Form className="find_username">
                    <span className="information">
                        가입할 때 입력한 이메일로 아이디를 찾을 수 있습니다.
                    </span>
                    <FormItem>
                        <div className="box_input_with_btn send_verification_code">
                            <div className="box_input with_btn email">
                                <Input
                                    type="email"
                                    className="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="이메일 입력"
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
                                    value={verificationCode}
                                    onChange={handleVerificationCodeChange}
                                    placeholder="000000"
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

                    <FormItem>
                        <Button
                            className="find_username"
                            onClick={handleFindUsernameClick}
                        >
                            아이디 찾기
                        </Button>
                    </FormItem>
                </Form>
            </Content>
        </Container>
    );
};

export default FindUsernameVerifyPage;
