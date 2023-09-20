import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import { Container, Title, Content } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';

const SignupPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        setConfirmPassword(event.target.value);
    };

    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };

    const handleDuplicateUsernameClick = () => {};

    const handleDuplicateNicknameClick = () => {};

    const handleSignupClick = () => {
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
                <h1>회원가입</h1>
            </Title>
            <Content>
                <Form className="signup">
                    <FormItem>
                        <span>아이디</span>
                        <div className="box_input_with_btn username">
                            <div className="box_input with_btn username">
                                <Input
                                    type="text"
                                    className="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder="4~8자 영문/숫자조합으로 입력"
                                />
                            </div>
                            <Button
                                className="with_input duplicate_username"
                                onClick={handleDuplicateUsernameClick}
                            >
                                중복확인
                            </Button>
                        </div>
                    </FormItem>

                    <FormItem>
                        <span>비밀번호</span>
                        <div className="box_input">
                            <Input
                                type="password"
                                className="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="8~16자 영문/숫자조합으로 입력"
                            />
                        </div>
                    </FormItem>

                    <FormItem>
                        <span>비밀번호 확인</span>
                        <div className="box_input">
                            <Input
                                type="password"
                                className="confirm_password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                placeholder="8~16자 영문/숫자조합으로 입력"
                            />
                        </div>
                    </FormItem>

                    <FormItem>
                        <span>닉네임</span>
                        <div className="box_input_with_btn nickname">
                            <div className="box_input with_btn nickname">
                                <Input
                                    type="text"
                                    className="nickname"
                                    value={nickname}
                                    onChange={handleNicknameChange}
                                    placeholder="4~8자 영문/숫자조합으로 입력"
                                />
                            </div>
                            <Button
                                className="with_input duplicate_nickname"
                                onClick={handleDuplicateNicknameClick}
                            >
                                중복확인
                            </Button>
                        </div>
                    </FormItem>

                    <FormItem className="btn_signup">
                        <Button className="signup" onClick={handleSignupClick}>
                            회원가입
                        </Button>
                    </FormItem>
                </Form>
            </Content>
        </Container>
    );
};

export default SignupPage;
