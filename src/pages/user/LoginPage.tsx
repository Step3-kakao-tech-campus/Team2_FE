import React, { useState, ChangeEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import { Container, Title, Content } from '../../common/atoms/Contain';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Input from '../../common/atoms/Input';
import Button from '../../common/atoms/Button';
import LineOr from './components/LineOr';

declare const window: Window & { Kakao: any, google: any };

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
    React.useEffect(() => {
        if (window.Kakao) {
          const kakao = window.Kakao;
          if (!kakao.isInitialized()) {
            kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
          }
        }
      }, []);
      const buttonRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  React.useEffect(() => {
    if (buttonRef.current) { // Make sure the ref is not null
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_KEY,
        callback: handleCredentialResponse
      });

      window.google.accounts.id.renderButton(
        buttonRef.current,
        { theme: 'outline', size: 'large' },  // Customize the button appearance here.
      );
      
      // Add an event listener to the Google login button.
      buttonRef.current.addEventListener('click', handleClickGoogle);
    }
  }, []);

  function handleCredentialResponse(response: any) { // Specify a type for the response
    console.log(response);
  }

  function handleClickGoogle() {
     window.google.accounts.id.prompt(); // Will prompt the user to select their account when the button is clicked.
   }
      
      const loginWithKakao = () => {
        window.Kakao.Auth.login({
          success: function(authObj: any) {
            console.log(JSON.stringify(authObj)); //인증 완료 토큰
          },
          fail: function(err: any) {
            alert(JSON.stringify(err));
          },
        });
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
                <Form className="login">
                    <FormItem>
                        <div className="box_input">
                            <Input
                                type="text"
                                className="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="아이디"
                            />
                        </div>
                    </FormItem>

                    <FormItem>
                        <div className="box_input">
                            <Input
                                type="password"
                                className="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="비밀번호"
                            />
                        </div>
                    </FormItem>

                    <FormItem>
                        <Button className="login" onClick={handleLoginClick}>
                            로그인
                        </Button>
                    </FormItem>

                    <ul className="list_user">
                        <li className="list_item">
                            <Link to="/find-username">아이디 찾기</Link>
                        </li>
                        <li className="list_item">
                            <Link to="/find-password">비밀번호 찾기</Link>
                        </li>
                        <li className="list_item">
                            <Link to="/signup/verify">회원가입</Link>
                        </li>
                    </ul>

                    <LineOr />

                    <FormItem>
                        <Button
                            className="login kakao"
                            onClick={loginWithKakao}
                            imageSrc="logo_kakao.png"
                        >
                            카카오톡 계정으로 로그인
                        </Button>
                    </FormItem>

                    <FormItem>
                        <div ref={buttonRef} className="google_login"></div>
                    </FormItem>
                </Form>
            </Content>
        </Container>
    );
};

export default LoginPage;
