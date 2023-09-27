import React, { useState } from 'react';

import './Login.scss';
import { MainContainer } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Button from '../../common/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        console.log(`Logging in`);
        navigate('/');
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
                            onClick={handleLoginClick}
                            imageSrc="logo_kakao.png"
                        >
                            카카오톡 계정으로 로그인
                        </Button>
                    </FormItem>

                    <FormItem>
                        <Button
                            className="login google"
                            onClick={handleLoginClick}
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
