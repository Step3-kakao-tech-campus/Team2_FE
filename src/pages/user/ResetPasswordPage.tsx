import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import { Container, Title, Content } from '../../common/atoms/Contain';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';

const FindPasswordVerifyPage: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        setConfirmPassword(event.target.value);
    };

    const handleResetPasswordClick = () => {
        navigate('/login');
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
                <Form className="reset_password">
                    <span className="information">비밀번호 재설정</span>

                    <FormItem>
                        <div className="box_input">
                            <Input
                                type="password"
                                className="input_password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="8~16자 영문/숫자 조합으로 입력"
                            />
                        </div>
                    </FormItem>

                    <FormItem>
                        <div className="box_input">
                            <Input
                                type="password"
                                className="input_confirm_password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                placeholder="비밀번호 확인"
                            />
                        </div>
                    </FormItem>

                    <FormItem>
                        <Button
                            className="reset_password"
                            onClick={handleResetPasswordClick}
                        >
                            비밀번호 변경
                        </Button>
                    </FormItem>
                </Form>
            </Content>
        </Container>
    );
};

export default FindPasswordVerifyPage;
