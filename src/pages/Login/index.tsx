import React, { useState, ChangeEvent, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Login.scss';
import { MainContainer } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/Image';
import { Form, FormItem } from '../../common/atoms/Form';
import Button from '../../common/atoms/Button';

declare const window: Window & { Kakao: any; google: any };

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
            }
        }
    }, []);

    const loginWithKakao = () => {
        window.Kakao.Auth.login({
            success: function (authObj: any) {
                console.log(JSON.stringify(authObj)); //인증 완료 토큰
            },
            fail: function (err: any) {
                alert(JSON.stringify(err));
            },
        });
    };

    const buttonRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

    React.useEffect(() => {
        if (buttonRef.current) {
            // Make sure the ref is not null
            window.google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_KEY,
                callback: handleCredentialResponse,
            });

            window.google.accounts.id.renderButton(
                buttonRef.current,
                { theme: 'outline', size: 'large' }, // Customize the button appearance here.
            );

            // Add an event listener to the Google login button.
            buttonRef.current.addEventListener('click', handleClickGoogle);
        }
    }, []);

    function handleCredentialResponse(response: any) {
        // Specify a type for the response
        console.log(response);
    }

    function handleClickGoogle() {
        window.google.accounts.id.prompt(); // Will prompt the user to select their account when the button is clicked.
    }

    return (
        <MainContainer className="column">
            <div className="logo">
                <Link to="/">
                    <LocalImage
                        src="logo_big.png"
                        width="200px"
                        height="auto"
                    />
                </Link>
            </div>
            <div className="content">
                <Form className="login">
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
            </div>
        </MainContainer>
    );
};

export default LoginPage;
