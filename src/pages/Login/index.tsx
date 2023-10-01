import React, { useState } from 'react';

import './Login.scss';
import { MainContainer } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Button from '../../common/atoms/Button';

declare const window: Window & { Kakao: any, google: any };

const LoginPage: React.FC = () => {
    React.useEffect(() => {
        if (window.Kakao) {
          const kakao = window.Kakao;
          if (!kakao.isInitialized()) {
            kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
          }
        }
      }, []);
      const buttonRef = React.useRef<HTMLDivElement>(null); // Specify the type of the ref

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
                        <Button
                            className="login google"
                            onClick={handleClickGoogle}
                            imageSrc="logo_google.png"
                        >
                            구글 계정으로 로그인
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </MainContainer>
    );
};

export default LoginPage;
