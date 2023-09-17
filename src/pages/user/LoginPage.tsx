import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import { Container, Title, Content } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import ButtonWithImage from '../../common/atoms/ButtonWithImage';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';
import LineOr from './components/LineOr';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = () => {
        console.log(
            `Logging in with username: ${username} and Password: ${password}`,
        );
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
            </Title>
            <Content>
                <form className="form_login">
                    <div className="box_input">
                        <Input
                            type="text"
                            className="input_username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="아이디"
                        />
                    </div>
                    <div className="box_input">
                        <Input
                            type="password"
                            className="input_password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="비밀번호"
                        />
                    </div>
                    <Button className="login" onClick={handleLoginClick}>
                        로그인
                    </Button>
                    <ul className="list_user">
                        <li className="list_item">
                            <Link to="/find_password">비밀번호 찾기</Link>
                        </li>
                        <li className="list_item">
                            <Link to="/find_username">아이디 찾기</Link>
                        </li>
                        <li className="list_item">
                            <Link to="/signup">회원가입</Link>
                        </li>
                    </ul>
                    <LineOr />
                    <ButtonWithImage
                        className="login_with_kakao"
                        onClick={handleLoginClick}
                        imageSrc="logo_kakao.png"
                    >
                        카카오톡으로 로그인
                    </ButtonWithImage>
                    <ButtonWithImage
                        className="login_with_google"
                        onClick={handleLoginClick}
                        imageSrc="logo_google.png"
                    >
                        구글 계정으로 로그인
                    </ButtonWithImage>
                </form>
            </Content>
        </Container>
    );
};

export default LoginPage;
